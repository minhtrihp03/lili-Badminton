import React from 'react';
import CoachComponent from './CoachComponent';

const CoachListComponent = () => {
  const coaches = [
    { name: "Minh Trí", price: "100.000", level: "5.5", contact: "Facebook" },
    { name: "Thái Sơn", price: "150.000", level: "5.5", contact: "Zalo" },
    { name: "Minh Quân", price: "150.000", level: "5.5", contact: "Facebook" },
  ];

  return (
    <div className="coach-list">
      <h2>Danh sách huấn luyện viên</h2>
      {coaches.map((coach, index) => (
        <CoachComponent 
          key={index}
          name={coach.name}
          price={coach.price}
          level={coach.level}
          contact={coach.contact}
        />
      ))}
    </div>
  );
}

export default CoachListComponent;
