import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import TrainerSearchFilter from './TrainerSearchFilter';
import CoachComponent from './CoachComponent';

const CoachListComponent = () => {
  const [coaches, setCoaches] = useState([]);
  const [visibleCount, setVisibleCount] = useState(8); // Bắt đầu với 8 huấn luyện viên
  const [searchFilters, setSearchFilters] = useState({
    trainerName: '',
    experienceLevel: '',
  });

  // Fetch dữ liệu từ file JSON
  useEffect(() => {
    fetch('http://localhost:9999/coaches')
      .then((response) => response.json())
      .then((data) => {
        setCoaches(data); // Lưu dữ liệu vào state
      })
      .catch((error) => {
        console.error('Lỗi khi fetch dữ liệu:', error);
      });
  }, []);

  // Xác định số lượng huấn luyện viên sẽ được hiển thị
  const displayedCoaches = coaches.slice(0, visibleCount); // Hiển thị dựa trên visibleCount

  const handleShowMore = () => {
    setVisibleCount((prevCount) => Math.min(prevCount + 4, coaches.length)); // Thêm 4 huấn luyện viên mỗi lần nhấn nút
  };

  // Hàm để nhận thông tin tìm kiếm từ TrainerSearchFilter
  const handleSearch = (filters) => {
    setSearchFilters(filters);
  };

  // Lọc danh sách huấn luyện viên dựa trên tên và trình độ
  const filteredCoaches = coaches.filter((coach) => {
    const matchesName = coach.name.toLowerCase().includes(searchFilters.trainerName.toLowerCase());
    const matchesLevel = !searchFilters.experienceLevel || coach.level === searchFilters.experienceLevel;
    return matchesName && matchesLevel;
  });

  return (
    <div className="coach-list">
      <h2 style={{ fontWeight: "bold" }}>Huấn Luyện Viên</h2>

      {/* Truyền hàm handleSearch cho TrainerSearchFilter */}
      <TrainerSearchFilter onSearch={handleSearch} />

      <Row className="coach-list-row">
        {filteredCoaches.length > 0 ? (
          filteredCoaches.map((coach, index) => (
            <Col key={index} md={3} className="coach-card">
              <CoachComponent
                name={coach.name}
                price={coach.price}
                level={coach.level}
                contact={coach.contact}
                phone={coach.phone}
              />
            </Col>
          ))
        ) : (
          <p>Không tìm thấy huấn luyện viên nào.</p>
        )}
      </Row>

      {visibleCount < coaches.length && (
        <button className="btn btn-primary" onClick={handleShowMore}>
          Xem thêm
        </button>
      )}
    </div>
  );
};

export default CoachListComponent;
