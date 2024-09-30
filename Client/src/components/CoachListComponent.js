import React, { useState } from 'react'; 
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
    { name: "Minh Quân", price: "150.000", level: "5.5", contact: "Facebook", phone: "034256789" },
    { name: "Minh Quân", price: "150.000", level: "5.5", contact: "Facebook", phone: "034256789" },
    { name: "Minh Quân", price: "150.000", level: "5.5", contact: "Facebook", phone: "034256789" },
    { name: "Minh Quân", price: "150.000", level: "5.5", contact: "Facebook", phone: "034256789" },
    { name: "Minh Quân", price: "150.000", level: "5.5", contact: "Facebook", phone: "034256789" },
    { name: "Minh Quân", price: "150.000", level: "5.5", contact: "Facebook", phone: "034256789" },
    { name: "Minh Quân", price: "150.000", level: "5.5", contact: "Facebook", phone: "034256789" },
    { name: "Minh Quân", price: "150.000", level: "5.5", contact: "Facebook", phone: "034256789" },
    { name: "Minh Quân", price: "150.000", level: "5.5", contact: "Facebook", phone: "034256789" },
    { name: "Minh Quân", price: "150.000", level: "5.5", contact: "Facebook", phone: "034256789" },
    { name: "Minh Quân", price: "150.000", level: "5.5", contact: "Facebook", phone: "034256789" },
  ];

  // State để kiểm soát số lượng huấn luyện viên được hiển thị
  const [visibleCount, setVisibleCount] = useState(8); // Bắt đầu với 8 huấn luyện viên

  // Xác định số lượng huấn luyện viên sẽ được hiển thị
  const displayedCoaches = coaches.slice(0, visibleCount); // Hiển thị dựa trên visibleCount

  const handleShowMore = () => {
    setVisibleCount(prevCount => Math.min(prevCount + 4, coaches.length)); // Thêm 4 huấn luyện viên mỗi lần nhấn nút, không vượt quá tổng số huấn luyện viên
  };

  return (
    <div className="coach-list">
      <h2 style={{fontWeight: "bold"}}>Huấn Luyện Viên</h2>
      <Row className="coach-list-row">
        {displayedCoaches.map((coach, index) => (
          <Col key={index} md={3} className="coach-card"> {/* Sử dụng 3 cột trên 12 cột tổng */}
            <CoachComponent
              name={coach.name}
              price={coach.price}
              level={coach.level}
              contact={coach.contact}
              phone={coach.phone}
            />
          </Col>
        ))}
      </Row>

      {/* Nút xem thêm */}
      {visibleCount < coaches.length && (
        <button className="btn btn-primary" onClick={handleShowMore}>
          Xem thêm
        </button>
      )}
    </div>
  );
}

export default CoachListComponent;
