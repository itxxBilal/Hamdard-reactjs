import React, { useState, useEffect } from "react";
import { Container, Table, Button, Form, Modal, Alert } from "react-bootstrap";
import "./Dashboard.css";
import MediaGallery from "../components/MediaGallery";

const Dashboard = () => {
  const [images, setImages] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(""); // 'add' or 'edit'
  const [currentImage, setCurrentImage] = useState({ id: "", name: "", description: "", url: "" });
  const [showAlert, setShowAlert] = useState({ visible: false, message: "" });

  const BACKEND_URL = "https://itxbilal.pythonanywhere.com";

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const res = await fetch(`${BACKEND_URL}/api/images`);
      const data = await res.json();
      setImages(data);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  const handleShowModal = (type, image = {}) => {
    setModalType(type);
    setCurrentImage(image);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentImage({ id: "", name: "", description: "", url: "" });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentImage((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", currentImage.name);
      formData.append("description", currentImage.description);
      if (currentImage.file) {
        formData.append("image", currentImage.file);
      }

      const endpoint =
        modalType === "add"
          ? `${BACKEND_URL}/api/images`
          : `${BACKEND_URL}/api/images/${currentImage.id}`;
      const method = modalType === "add" ? "POST" : "PUT";

      await fetch(endpoint, {
        method,
        body: formData,
      });

      fetchImages();
      handleCloseModal();
      setShowAlert({
        visible: true,
        message: `Image ${modalType === "add" ? "added" : "updated"} successfully!`,
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this image?")) {
      try {
        await fetch(`${BACKEND_URL}/api/images/${id}`, { method: "DELETE" });
        fetchImages();
        setShowAlert({ visible: true, message: "Image deleted successfully!" });
      } catch (error) {
        console.error("Error deleting image:", error);
      }
    }
  };

  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">Admin Dashboard</h1>

      {showAlert.visible && (
        <Alert
          variant="success"
          onClose={() => setShowAlert({ visible: false })}
          dismissible
        >
          {showAlert.message}
        </Alert>
      )}

      <Button
        variant="primary"
        className="mb-3"
        onClick={() => handleShowModal("add")}
      >
        Add New Image
      </Button>

      {/* Media Gallery */}
      <h2 className="mt-4">Media Gallery</h2>
      <MediaGallery />

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Description</th>
            <th>Preview</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {images.map((image, index) => (
            <tr key={image.id}>
              <td>{index + 1}</td>
              <td>{image.name}</td>
              <td>{image.description}</td>
              <td>
                <img
                  src={`${BACKEND_URL}${image.url}`}
                  alt={image.name}
                  className="img-thumbnail"
                  style={{ width: "100px" }}
                />
              </td>
              <td>
                <Button
                  variant="warning"
                  onClick={() => handleShowModal("edit", image)}
                  className="me-2"
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  onClick={() => handleDelete(image.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            {modalType === "add" ? "Add Image" : "Edit Image"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={currentImage.name}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                value={currentImage.description}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Image File</Form.Label>
              <Form.Control
                type="file"
                name="file"
                onChange={(e) =>
                  setCurrentImage({ ...currentImage, file: e.target.files[0] })
                }
                required={modalType === "add"}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Save
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Dashboard;
