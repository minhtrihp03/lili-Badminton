import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import CoachComponent from './CoachComponent';

const CoachListComponent = ({ searchFilters = {} }) => {
  const [coaches, setCoaches] = useState([]);

   // Hàm để lấy dữ liệu từ API
   const fetchCoaches = async () => {
    try {
      const response = await fetch('https://bepickleball.vercel.app/api/coach/list');
      const data = await response.json();
      setCoaches(data); // Giả sử dữ liệu trả về là mảng huấn luyện viên
    } catch (error) {
      console.error('Error fetching coaches:', error);
    }
  };

  useEffect(() => {
    fetchCoaches(); // Gọi hàm fetchCoaches khi component được mount
  }, []);

  const [visibleCount, setVisibleCount] = useState(8);

  // Lọc danh sách huấn luyện viên dựa trên tên và trình độ
  const filteredCoaches = coaches.filter((coach) => {
    const matchesName = searchFilters.trainerName
      ? coach.name.toLowerCase().includes(searchFilters.trainerName.toLowerCase())
      : true;

      const matchesLocation = searchFilters.location && searchFilters.location !== 'Other'
      ? coach.address && coach.address.includes(searchFilters.location) // Ensure coach.address is defined
      : searchFilters.otherLocation
      ? coach.address && coach.address.includes(searchFilters.otherLocation) // Ensure coach.address is defined
      : true;
      const matchesLevel = searchFilters.level
      ? parseFloat(coach.skill_level) === parseFloat(searchFilters.level)
      : true;
      return matchesName && matchesLocation && matchesLevel;
  });

  // Xác định số lượng huấn luyện viên sẽ được hiển thị
  const displayedCoaches = filteredCoaches.slice(0, visibleCount);

  const handleShowMore = () => {
    setVisibleCount((prevCount) => Math.min(prevCount + 4, filteredCoaches.length));
  };

  // console.log(coaches[0].description);
  

  return (
    <div className="coach-list ms-3" style={{ textAlign: 'center' }} >
      <h2 style={{ fontWeight: '600', margin: "50px 0 30px 0"}}>Huấn Luyện Viên</h2>

      {/* Responsive grid for coach list */}
      <Row className="coach-list-row" >
        {displayedCoaches.length > 0 ? (
          displayedCoaches.map((coach, index) => (
            <Col key={index} style={{ padding: 0 }} >
              <CoachComponent
                name={coach.name}
                price={coach.price_per_session.toLocaleString('vi-VN')}
                level={coach.rating}
                contact={coach.contact_info}
                phone={coach?.contact_info.phone}
                images={coach.images}
                address={coach.address}
                description={coach.description}
                style={{
                  width: "250px", /* Kích thước cố định cho mỗi thẻ coach */
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: "center"
                }}
              />
            </Col>
          ))
        ) : (
          <p>Không tìm thấy huấn luyện viên nào.</p>
        )}
      </Row>
    </div>
  );
};

export default CoachListComponent;
