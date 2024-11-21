import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import './MediaGallery.css';

const mediaData = [
  {
    id: 1,
    category: 'Ambulance Service',
    description: 'Providing emergency medical services to the community.',
    date: '2024-11-20',
    imgSrc: 'https://via.placeholder.com/300x200?text=Image+1',
  },
  {
    id: 2,
    category: 'Free Tent Service',
    description: 'Tents provided for community events and gatherings.',
    date: '2024-11-18',
    imgSrc: 'https://via.placeholder.com/300x200?text=Image+2',
  },
  {
    id: 3,
    category: 'Water Filter Plant',
    description: 'Ensuring clean water for the community through filtration.',
    date: '2024-11-15',
    imgSrc: 'https://via.placeholder.com/300x200?text=Image+3',
  },
  // Add more data here
];

const MediaGallery = () => {
  return (
    <div className="container my-4">
      <Row>
        {mediaData.map((media) => (
          <Col key={media.id} md={4} className="mb-4">
            <Card className="media-card">
              <Card.Img variant="top" src={media.imgSrc} />
              <Card.Body>
                <Card.Title>{media.category}</Card.Title>
                <Card.Text>{media.description}</Card.Text>
                <Card.Footer>
                  <small className="text-muted">{media.date}</small>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default MediaGallery;
