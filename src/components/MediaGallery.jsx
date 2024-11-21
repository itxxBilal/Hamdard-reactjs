import React, { useState } from "react";
import { Button, ButtonGroup, Card, Row, Col } from "react-bootstrap";
import "./MediaGallery.css";
import medical1 from "../assets/Media Gallery/medical1.jpeg";
import medical2 from "../assets/Media Gallery/medical2.jpeg";
import medical5 from "../assets/Media Gallery/medical5.jpeg";
import plant from "../assets/Media Gallery/plant.jpeg";
import plant1 from "../assets/Media Gallery/plant2.jpeg";

const mediaData = [
  {
    id: 1,
    category: "Medical",
    title: "Free Medical Services",
    description: "Providing free medical services for village people.",
    imgSrc: medical1,
  },
  {
    id: 2,
    category: "Medical",
    title: "Community Medical Camp",
    description: "Organizing camps to ensure healthcare for all.",
    imgSrc: medical2,
  },
  {
    id: 3,
    category: "Medical",
    title: "Emergency Medical Help",
    description: "Emergency medical facilities available for villagers.",
    imgSrc: medical5,
  },
  {
    id: 4,
    category: "Plant",
    title: "Free Plant Distribution",
    description: "Distributing plants for a greener and cleaner village.",
    imgSrc: plant,
  },
  {
    id: 5,
    category: "Plant",
    title: "Community Plantation Drive",
    description: "Encouraging plantation to ensure a sustainable environment.",
    imgSrc: plant1,
  },
];

const MediaGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredMedia =
    selectedCategory === "All"
      ? mediaData
      : mediaData.filter((media) => media.category === selectedCategory);

  return (
    <div className="media-gallery container my-4">
      <h2 className="text-center mb-4">Media Gallery</h2>

      {/* Category Buttons */}
      <ButtonGroup className="d-flex justify-content-center mb-4">
        {["All", "Medical", "Plant"].map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "success" : "outline-success"}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </Button>
        ))}
      </ButtonGroup>

      {/* Card Layout */}
      <Row className="g-4">
        {filteredMedia.map((media) => (
          <Col key={media.id} md={4}>
            <Card className="media-card shadow-sm">
              <Card.Img
                variant="top"
                src={media.imgSrc}
                className="img-fluid"
                alt={media.title}
              />
              <Card.Body>
                <Card.Title>{media.title}</Card.Title>
                <Card.Text>{media.description}</Card.Text>
              </Card.Body>
              <Card.Footer className="text-muted">{media.category}</Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default MediaGallery;
