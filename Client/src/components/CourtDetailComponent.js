import React from 'react';
import { Card, Button, Row, Col, Badge } from 'react-bootstrap';
import { FaMapMarkerAlt, FaRulerCombined, FaUserFriends, FaCheckCircle, FaTimesCircle,  } from 'react-icons/fa';
import '../styles/screens/CourtDetailComponent.css';

const court=[{ name: "Sân 286 Nguyễn Xiên", price: "100.000", slots: "6", location: "Hà Nội" }];
const CourtDetailComponent = ({ court }) => {
  const imgSrc = process.env.PUBLIC_URL + '/assets/images/new1.png';
    return (
      <div className="court-detail-container">
        <Card className="court-detail-card">
          <Row>
            {/* Court Image */}
            <Col md={7} style={{ padding: 0}}>
              <img style={{width: "90%", textAlign: "right"}} src={process.env.PUBLIC_URL + '/assets/images/new1.png'} />
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
            <Col md={5} className="court-details" style={{ padding: 0 }}>
              <Card.Body>
                <div className="badge-container">
                  <Button variant="outline-primary" className="court-badge" >Sân có mái che</Button>
                </div>
  
                <Card.Title>{court.name}</Card.Title>
                {/* <a href='https://maps.app.goo.gl/Pb8J3vVjnWFSxsvb8'>
                <Card.Text><FaMapMarkerAlt className="icon" style={{ color: "#828282" }}/> {court.location }   Trình độ: 4.0</Card.Text>
                </a> */}
                <Card.Text><FaMapMarkerAlt className="icon" style={{ color: "#828282" }}/> {court.location }   Trình độ: 4.0</Card.Text>
                <Card.Text className="price-text">{court.price} VND/người</Card.Text>
                <Card.Text><FaUserFriends className="icon" style={{ color: "#828282" }}/> Slot còn tuyển: {court.slots}</Card.Text>
                <Card.Text>
                  <FaCheckCircle className="icon" style={{ color: "#828282" }}/> Ghi chú: Có
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