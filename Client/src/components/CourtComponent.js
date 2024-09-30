import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { FaMapMarkerAlt, FaUsers } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import '../styles/screens/CourtComponent.css'; // Import custom CSS

const CourtComponent = ({ name, price, slots, location, type, level }) => {
  const navigate = useNavigate();

  // Fallback level if it's undefined
  const displayedLevel = level ? level.toFixed(1) : "N/A";

  // Handle card click to navigate with court details
  const handleCardClick = () => {
    navigate('/court/court-detail', {
      state: {
        name,
        price,
        slots,
        location,
        type,
        level
      }
    });
  };

  return (
    <Card className="court-card" onClick={handleCardClick}>
      <div className="top-left-badge">
        {type === 'có mái che' ? 'Sân có mái che' : 'Sân không có mái che'}
      </div>

      <div className="top-right-badge">
        {displayedLevel}
      </div>

      <Card.Img
        variant="top"
        src={process.env.PUBLIC_URL + '/assets/images/Register.png'}
        alt={`Court ${name}`}
        className="card-image"
      />

      <Card.Body>
        <Card.Title className="court-name">{name}</Card.Title>

        <Card.Text className="price-text">
          {price} VND/người
        </Card.Text>

        <Row>
          <Col className="location">
            <FaMapMarkerAlt /> {location}
          </Col>
          <Col className="slots-text">
            <FaUsers /> {slots}/9 người
          </Col>
        </Row>
        <Button variant="primary" className="book-btn">
          Đặt sân
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CourtComponent;
