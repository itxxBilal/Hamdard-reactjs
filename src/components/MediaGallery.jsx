import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";
import { FaEye, FaShareAlt, FaDownload } from "react-icons/fa"; // Import React Icons
import "./MediaGallery.css";

// Import frontend images
import img1 from "../assets/Media Gallery/1.jpeg";
import img2 from "../assets/Media Gallery/2.jpeg";
import img3 from "../assets/Media Gallery/3.jpeg";
import img4 from "../assets/Media Gallery/4.jpeg";
import img5 from "../assets/Media Gallery/5.jpeg";
import img6 from "../assets/Media Gallery/6.jpeg";
import img7 from "../assets/Media Gallery/7.jpeg";

const frontendImages = [
  { id: "f1", url: img1, name: "Old Qabarstan Event", description: "Old Qabarstan Event" },
  { id: "f2", url: img2, name: "Old Qabarstan Event", description: "Old Qabarstan Event" },
  { id: "f3", url: img3, name: "Old Qabarstan Event", description: "Old Qabarstan Event Moment" },
  { id: "f4", url: img4, name: "Plant Dist", description: "" },
  { id: "f5", url: img5, name: "Free Medical Camp For Villager Peoples", description: "Free Medical Camp For Villager Peoples" },
  { id: "f6", url: img6, name: "Free Medical Camp", description: "Free Medical Camp For Villager Peoples" },
  { id: "f7", url: img7, name: "Free Medical Camp", description: "Free Medical Camp For Villager Peoples" },
];

const MediaGallery = () => {
  const [backendImages, setBackendImages] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const BACKEND_URL = "https://itxbilal.pythonanywhere.com";

  // Fetch backend images on component mount
  useEffect(() => {
    fetchImages();
  }, []);

  // Function to fetch images from backend
  const fetchImages = async () => {
    try {
      const res = await fetch(`${BACKEND_URL}/api/images`);
      const data = await res.json();

      // Fix backend URLs: Add base URL to the 'url' property if not absolute
      const updatedImages = data.map((image) => ({
        ...image,
        url: image.url.startsWith("http") ? image.url : `${BACKEND_URL}${image.url}`,
      }));

      setBackendImages(updatedImages);
    } catch (error) {
      console.error("Error fetching backend images:", error);
    }
  };

  // Function to open modal for viewing image
  const handleShowModal = (image) => {
    setCurrentImage(image);
    setShowModal(true);
  };

  // Function to close modal
  const handleCloseModal = () => setShowModal(false);

  // Function to download image
  const handleDownload = (url) => {
    const a = document.createElement("a");
    a.href = url;
    a.download = url.split("/").pop();
    a.click();
  };

  // Function to share image URL
  const handleShare = (url) => {
    navigator.clipboard.writeText(url);
    alert("Image URL copied to clipboard!");
  };

  // Combine frontend and backend images
  const allImages = [...frontendImages, ...backendImages];

  return (
    <Container className="mt-5">
      <div className="text-center mb-5">
        <h1 className="gallery-heading">Media Gallery</h1>
        <p className="gallery-description">
          Explore the Hamdard Committee's journey and achievements through our media gallery. Relive our memorable moments!
        </p>
      </div>

      <Row>
        {allImages.map((image) => (
          <Col md={4} sm={6} xs={12} key={image.id} className="mb-4">
            <Card className="media-card shadow-sm">
              <div className="img-container" onClick={() => handleShowModal(image)}>
                <Card.Img variant="top" src={image.url} className="card-img" />
                <div className="overlay">
                  <Button
                    variant="light"
                    className="overlay-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleShare(image.url);
                    }}
                  >
                    <FaShareAlt />
                  </Button>
                  <Button
                    variant="light"
                    className="overlay-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDownload(image.url);
                    }}
                  >
                    <FaDownload />
                  </Button>
                  <Button
                    variant="light"
                    className="overlay-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleShowModal(image);
                    }}
                  >
                    <FaEye />
                  </Button>
                </div>
              </div>
              <Card.Body>
                <Card.Title className="text-center">{image.name}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Modal for image preview */}
      {currentImage && (
        <Modal show={showModal} onHide={handleCloseModal} centered>
          <Modal.Header closeButton>
            <Modal.Title>{currentImage.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={currentImage.url} alt={currentImage.name} className="modal-img img-fluid" />
            <p className="text-center mt-3">{currentImage.description}</p>
          </Modal.Body>
        </Modal>
      )}
    </Container>
  );
};

export default MediaGallery;
