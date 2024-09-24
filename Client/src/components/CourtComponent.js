import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FaMapMarkerAlt, FaMoneyBillWave } from 'react-icons/fa';

const CourtComponent = ({ name, price, slots, location }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <FaMapMarkerAlt /> Địa chỉ: {location}
        </Card.Text>
        <Card.Text>
          <FaMoneyBillWave /> Giá: {price} VND/người
        </Card.Text>
        <Card.Text>Còn {slots} slot</Card.Text>
        <Button variant="primary">Đặt sân</Button>
      </Card.Body>
    </Card>
  );
}

export default CourtComponent;
