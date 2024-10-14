import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { CiLocationOn } from "react-icons/ci";
import { PiUserRectangleLight } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';
import '../styles/screens/CourtComponent.css'; // Import custom CSS
import NoImage from '../assets/no-image.jpg'; 

const CourtComponent = ({ name, price, slots, location, type, level, images = [], applied_players, players_needed, time, contact_info }) => { // Added time here
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
        level,
        images,
        applied_players,
        players_needed,
        time, // time is now defined
        contact_info
      }
    });
  };

  return (
    <Card className="court-card" onClick={handleCardClick}>
      <div className="top-left-badge">
        {type === 'có mái che' ? 'Sân Có Mái Che' : 'Sân không có mái che'}
      </div>

      <div className="top-right-badge">
        {displayedLevel}
      </div>

      {/* <Card.Img
        variant="top"
        src={image}
        alt={`Court ${name}`}
        className="card-image"
      /> */}
      <div
        className="card-image"
        style={{
          backgroundImage: `url(${images.length > 0 ? images[0] : NoImage})`, // Thay thế bằng hình ảnh mặc định nếu không có
        }}
        alt={`Court ${name}`}
      />


      <Card.Body style={{ padding: "0px", margin: "8px", marginBottom: "0px", marginRight: "0px" }}>
        <Card.Title className="court-name">{name}</Card.Title>

        <Card.Text className="price-text" style={{ marginTop: "10px" }}>
          {price.toLocaleString('vi-VN')} VND /người
        </Card.Text>

        <Row style={{ padding: "0px", margin: "0px", marginBottom: "10px" }}>
          <Col className="location" md={7}>
            <CiLocationOn /> {name}
          </Col>
          <Col className="slots-text" md={5}>
            <PiUserRectangleLight /> {slots}/8 người
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default CourtComponent;
