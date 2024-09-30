import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaPhoneAlt, FaUserTie } from 'react-icons/fa';
import '../styles/screens/CoachComponent.css'; // Custom CSS for card styling

const CoachComponent = ({ name, price, level, phone }) => {
  return (
    <Card className="coach-card">

      {/* Image at the top */}
      <img
        src={process.env.PUBLIC_URL + '/assets/images/coach1.png'}
        alt={`Coach ${name}`}
        className="card-image"
      />

<Card.Body>
<Card.Title>{name}</Card.Title>

<Card.Text>
          <FaUserTie /> Trình độ: {level}
          </Card.Text>

          <Card.Text className="price-text">
          {price} VND/buổi
          </Card.Text>

          <Card.Text>
          <FaPhoneAlt /> SĐT: {phone}
          </Card.Text>

        {/* Contact buttons: Facebook and Zalo */}
        <Row className="contact-buttons">
          <Col>
            <Button variant="outline-primary" className="contact-btn">
              <FaFacebook /> Facebook
              </Button>
          </Col>
          <Col>
            <Button variant="outline-primary" className="contact-btn">
              <FaPhoneAlt /> Zalo
              </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default CoachComponent;
