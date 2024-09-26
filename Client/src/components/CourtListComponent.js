import React from 'react';
import { Row, Col } from 'react-bootstrap';
import CourtComponent from './CourtComponent';
import '../styles/screens/CourtListComponent.css'; // Import custom CSS

const courts = [
  {
    name: 'Sân Pickleball 286 Nguyễn Xiển',
    price: '100.000',
    slots: 6,
    location: '286 Nguyễn Xiển',
    type: 'không có mái che',
    level: 2.0,
    image: process.env.PUBLIC_URL + '/assets/images/court1.png',
  },
  {
    name: 'Sân Pickleball 286 Nguyễn Xiển',
    price: '100.000',
    slots: 7,
    location: '286 Nguyễn Xiển',
    type: 'có mái che',
    level: 2.5,
    image: process.env.PUBLIC_URL + '/assets/images/court2.png',
  },
  {
    name: 'Sân Pickleball 286 Nguyễn Xiển',
    price: '120.000',
    slots: 2,
    location: '286 Nguyễn Xiển',
    type: 'không có mái che',
    level: 3.0,
    image: process.env.PUBLIC_URL + '/assets/images/court3.png',
  },
  {
    name: 'Sân Pickleball 286 Nguyễn Xiển',
    price: '100.000',
    slots: 0,
    location: '286 Nguyễn Xiển',
    type: 'có mái che',
    level: 4.0,
    image: process.env.PUBLIC_URL + '/assets/images/court4.png',
  },
];

const CourtListComponent = () => {
  return (
    <div className="court-list-container">
      <h2>Các bài tương tự</h2>
      <Row>
        {courts.map((court, index) => (
          <Col key={index} sm={6} md={4} lg={3}>
            <CourtComponent
              name={court.name}
              price={court.price}
              slots={court.slots}
              location={court.location}
              type={court.type}
              level={court.level}
              image={court.image}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default CourtListComponent;
