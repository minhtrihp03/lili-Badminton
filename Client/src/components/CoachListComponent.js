import React from 'react';
import { Row, Col } from 'react-bootstrap';
import CoachComponent from './CoachComponent';

const CoachListComponent = () => {
  const coaches = [
    { name: "Minh Trí", price: "100.000", level: "5.5", contact: "Facebook", phone: "0123456789" },
    { name: "Thái Sơn", price: "150.000", level: "5.5", contact: "Zalo", phone: "0756456789" },
    { name: "Minh Quân", price: "150.000", level: "5.5", contact: "Facebook", phone: "034256789" },
  ];

  return (
    <div className="coach-list">
      <Row>
      {coaches.map((coach, index) => (
        <Col key={index} sm={6} md={4} lg={3}>
        <CoachComponent 
          key={index}
          name={coach.name}
          price={coach.price}
          level={coach.level}
          contact={coach.contact}
          phone={coach.phone}
        />
        </Col>
      ))}
      </Row>
    </div>
  );
}

export default CoachListComponent;
