import React from 'react';
import { Row, Col } from 'react-bootstrap';
import CoachComponent from './CoachComponent';

const CoachListComponent = () => {
  const coaches = [
    { name: "Minh Trí", price: "100.000", level: "5.5", contact: "Facebook", phone: "0123456789" },
    { name: "Thái Sơn", price: "150.000", level: "5.5", contact: "Zalo", phone: "0756456789" },
    { name: "Minh Quân", price: "150.000", level: "5.5", contact: "Facebook", phone: "034256789" },
    { name: "Minh Quân", price: "150.000", level: "5.5", contact: "Facebook", phone: "034256789" },
    { name: "Minh Quân", price: "150.000", level: "5.5", contact: "Facebook", phone: "034256789" },
    { name: "Minh Quân", price: "150.000", level: "5.5", contact: "Facebook", phone: "034256789" },
  ];

  return (
    <div className="coach-list" style={{backgroundColor: "#f0f0f0"}}>
      <h2>Huấn Luyện Viên</h2>
      <div className="coach-list-row">
        {coaches.map((coach, index) => (
          <div key={index} className="coach-card">
            <CoachComponent
              name={coach.name}
              price={coach.price}
              level={coach.level}
              contact={coach.contact}
              phone={coach.phone}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CoachListComponent;
