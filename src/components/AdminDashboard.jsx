import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button, Form, Modal } from "react-bootstrap";

const AdminDashboard = () => {
  const [images, setImages] = useState([]);
  const [file, setFile] = useState(null);
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    const res = await fetch("http://localhost:5000/api/images");
    const data = await res.json();
    setImages(data);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("category", category);
    formData.append("description", description);

    await fetch("http://localhost:5000/api/images/upload", {
      method: "POST",
      body: formData,
    });

    fetchImages();
    setFile(null);
    setCategory("");
    setDescription("");
  };

  const handleDelete = async (id) => {
    await fetch(`http://localhost:5000/api/images/${id}`, {
      method: "DELETE",
    });
    fetchImages();
  };

  const handleEdit = (image) => {
    setCurrentImage(image);
    setCategory(image.category);
    setDescription(image.description);
    setShowModal(true);
  };

  const handleCategoryUpdate = async () => {
    await fetch(`http://localhost:5000/api/images/${currentImage.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ category, description }),
    });
    fetchImages();
    setShowModal(false);
  };

  const handleViewUpdate = async (id) => {
    await fetch(`http://localhost:5000/api/images/view/${id}`, {
      method: "PUT",
    });
    fetchImages();
  };

  return (
    <Container>
      <Row>
        <Col md={6}>
          <h2>Admin Dashboard</h2>
          <Form>
            <Form.Group controlId="formFile">
              <Form.Label>Upload Image</Form.Label>
              <Form.Control
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </Form.Group>
            <Form.Group controlId="formCategory">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" onClick={handleUpload}>
              Upload
            </Button>
          </Form>
        </Col>
      </Row>

      <Row>
        {images.map((image) => (
          <Col md={4} key={image.id}>
            <Card className="my-3">
              <Card.Img variant="top" src={image.url} />
              <Card.Body>
                <Card.Title>{image.name}</Card.Title>
                <Card.Text>
                  {image.description}
                  <br />
                  Category: {image.category}
                  <br />
                  Uploaded on: {image.uploadDate}
                  <br />
                  View count: {image.viewCount}
                </Card.Text>
                <Button
                  variant="warning"
                  onClick={() => handleEdit(image)}
                >
                  Edit
                </Button>{" "}
                <Button
                  variant="danger"
                  onClick={() => handleDelete(image.id)}
                >
                  Delete
                </Button>
                <Button
                  variant="info"
                  onClick={() => handleViewUpdate(image.id)}
                >
                  Increment View
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Category and Description</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="formCategory">
            <Form.Label>Category</Form.Label>
            <Form.Control
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCategoryUpdate}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default AdminDashboard;
