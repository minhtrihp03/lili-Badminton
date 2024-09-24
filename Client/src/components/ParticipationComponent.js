import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FaCalendarAlt } from 'react-icons/fa';

const ParticipationComponent = () => {
  const events = [
    { title: "Giao lưu tại sân 286 Nguyễn Xiển", date: "03/08/2024", location: "Hà Nội", slots: "6/8", price: "100.000" },
    { title: "Giao lưu Pickleball tại TP. Hồ Chí Minh", date: "05/08/2024", location: "TP. Hồ Chí Minh", slots: "5/8", price: "120.000" },
  ];

  return (
    <div className="participation">
      <h2>Tham gia giao lưu</h2>
      {events.map((event, index) => (
        <Card key={index} style={{ width: '18rem', marginBottom: '10px' }}>
          <Card.Body>
            <Card.Title>{event.title}</Card.Title>
            <Card.Text>
              <FaCalendarAlt /> Ngày: {event.date}
            </Card.Text>
            <Card.Text>Địa điểm: {event.location}</Card.Text>
            <Card.Text>Còn {event.slots} slot</Card.Text>
            <Card.Text>Giá: {event.price} VND/người</Card.Text>
            <Button variant="primary">Tham gia ngay</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default ParticipationComponent;
