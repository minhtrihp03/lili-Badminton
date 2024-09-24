import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { FaMapMarkerAlt, FaRulerCombined, FaUserFriends, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import '../styles/screens/CourtDetailComponent.css';

const CourtDetailComponent = ({ court }) => {
    return (
      <div className="court-detail-container">
        <Card className="court-detail-card">
          <Row>
            {/* Court Image */}
            <Col md={8}>
              <img src={court.image} alt="Court" className="court-image" />
              {/* Image Gallery */}
              <div className="image-gallery">
                {(court.gallery && court.gallery.length > 0) ? (
                  court.gallery.map((imgSrc, idx) => (
                    <img src={imgSrc} alt={`Court ${idx}`} key={idx} className="gallery-thumbnail" />
                  ))
                ) : (
                  <p>No images available</p>
                )}
                <Button variant="light" className="view-more-btn">Xem thêm</Button>
              </div>
            </Col>
            {/* Court Details */}
            <Col md={4} className="court-details">
              <Card.Body>
                <div className="badge-container">
                  <Button variant="outline-primary" className="court-badge">Sân có mái che</Button>
                  <Button variant="outline-secondary" className="court-badge">Nhóm xe về</Button>
                </div>
  
                <Card.Title>{court.name}</Card.Title>
                <Card.Text><FaMapMarkerAlt className="icon" /> {court.location}</Card.Text>
                <Card.Text className="price-text">{court.price} VND/người</Card.Text>
                <Card.Text><FaUserFriends className="icon" /> Slot còn tuyển: {court.slots}</Card.Text>
                <Card.Text>
                  <FaCheckCircle className="icon" /> Ghi chú: Có
                </Card.Text>
                <Card.Text>
                  <FaTimesCircle className="icon" /> Chỉ dành cho tuyển
                </Card.Text>
  
                {/* Slot Selection */}
                <div className="slot-selection">
                  {court.availableSlots && court.availableSlots.length > 0 ? (
                    court.availableSlots.map((slot, idx) => (
                      <Button variant={slot.isAvailable ? 'outline-primary' : 'outline-secondary'} key={idx}>
                        {slot.label}
                      </Button>
                    ))
                  ) : (
                    <p>No slots available</p>
                  )}
                </div>
                
                <Button className="register-btn" variant="primary">Đăng kí giao lưu</Button>
              </Card.Body>
            </Col>
          </Row>
          {/* Court Description */}
          <Row>
            <Col>
              <h4>Mô tả</h4>
              <p>{court.description || 'No description available'}</p>
            </Col>
          </Row>
        </Card>
      </div>
    );
  }
  
  export default CourtDetailComponent;