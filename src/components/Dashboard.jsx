import React, { useState, useEffect } from "react";
import { Container, Table, Button, Modal, Form } from "react-bootstrap";
import { FaTrash, FaEdit, FaUpload } from "react-icons/fa";

const Dashboard = () => {
  const [images, setImages] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newImageFile, setNewImageFile] = useState(null);
  const [newImage, setNewImage] = useState({ name: "", description: "" });

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    const res = await fetch("http://localhost:5000/api/images");
    const data = await res.json();
    setImages(data);
  };

  const handleFileChange = (e) => {
    setNewImageFile(e.target.files[0]);
  };

  const handleUploadImage = async () => {
    if (!newImageFile) {
      alert("Please select an image file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("file", newImageFile);
    formData.append("name", newImage.name);
    formData.append("description", newImage.description);

    try {
      const res = await fetch("http://localhost:5000/api/upload", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        alert("Image uploaded successfully!");
        fetchImages();
        setShowModal(false);
        setNewImageFile(null);
        setNewImage({ name: "", description: "" });
      } else {
        alert("Failed to upload image. Please try again.");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("An error occurred. Please try again.");
    }
  };

  const handleDeleteImage = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/api/images/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        alert("Image deleted successfully!");
        fetchImages();
      } else {
        alert("Failed to delete image.");
      }
    } catch (error) {
      console.error("Error deleting image:", error);
    }
  };

  return (
    <Container className="mt-5">
      <h1 className="mb-4">Dashboard - Manage Images</h1>
      <Button variant="primary" className="mb-3" onClick={() => setShowModal(true)}>
        <FaUpload /> Upload New Image
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Name</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {images.map((img, index) => (
            <tr key={img.id}>
              <td>{index + 1}</td>
              <td>
                <img src={img.url} alt={img.name} style={{ width: "100px", height: "auto" }} />
              </td>
              <td>{img.name}</td>
              <td>{img.description}</td>
              <td>
                <Button variant="danger" onClick={() => handleDeleteImage(img.id)}>
                  <FaTrash />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal for Image Upload */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Upload New Image</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Image File</Form.Label>
              <Form.Control type="file" onChange={handleFileChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Image Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter image name"
                value={newImage.name}
                onChange={(e) => setNewImage({ ...newImage, name: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Image Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter image description"
                value={newImage.description}
                onChange={(e) => setNewImage({ ...newImage, description: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleUploadImage}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Dashboard;
