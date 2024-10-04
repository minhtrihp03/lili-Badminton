import React from 'react';
import { useLocation } from 'react-router-dom';
import { Card, Row, Col, Button } from 'react-bootstrap';
import { FaMapMarkerAlt, FaUserFriends, FaCheckCircle } from 'react-icons/fa';
import '../styles/screens/CourtDetailComponent.css';

const CourtDetailComponent = () => {
  const location = useLocation(); // Lấy location
  const { state } = location; // Lấy state từ location
  const { name, price, slots, location: courtLocation, type, level, image } = state; // Destructure các thuộc tính từ state

  return (
    <div className="court-detail-container">
      <Card className="court-detail-card">
        <Row>
          <Col md={7} style={{ padding: 0 }}>
            <img style={{ width: "90%" }} src={image} alt={`Court ${name}`} />
          </Col>
          <Col md={5} className="court-details" style={{ padding: 0 }}>
            <Card.Body>
            <div className="badge-container">
            <Button variant="outline-primary" className="court-badge" >Sân có mái che</Button>
            </div>
              <Card.Title>{name}</Card.Title>
              <Card.Text>
                <FaMapMarkerAlt className="icon" style={{ color: "#828282" }}/> {courtLocation}
              </Card.Text>
              <Card.Text className="price-text">
                {price} VND/người
              </Card.Text>
              <Card.Text>
                <FaUserFriends className="icon" style={{ color: "#828282" }}/> {slots}/8 người
              </Card.Text>
              <Card.Text>
                  <FaCheckCircle className="icon" style={{ color: "#828282" }}/> Ghi chú: Không có
                </Card.Text>
                {/* thieu */}
              <Button className="register-btn" variant="primary">Đăng kí giao lưu</Button>
            </Card.Body>
          </Col>
        </Row>
        {/* Court Description */}
        <Row>
            <Col>
              <h4>Mô tả</h4>
              <p>{ 'No description available'}</p>
            </Col>
          </Row>
      </Card>
    </div>
  );
};

export default CourtDetailComponent;
