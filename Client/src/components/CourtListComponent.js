import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import CourtComponent from './CourtComponent';
import '../styles/screens/CourtListComponent.css'; // Import custom CSS
import { SiZebpay } from 'react-icons/si';

const courts = [
  {
    name: 'Sân Pickleball 286 Nguyễn Xiển',
    price: '100.000',
    slots: 6,
    location: '286 Nguyễn Xiển',
    type: 'không có mái che',
    level: 2.0,
    image: process.env.PUBLIC_URL + '/assets/images/new1.png',
  },
  {
    name: 'Sân Pickleball 286 Nguyễn Xiển',
    price: '100.000',
    slots: 7,
    location: '286 Nguyễn Xiển',
    type: 'có mái che',
    level: 2.5,
    image: process.env.PUBLIC_URL + '/assets/images/new2.png',
  },
  {
    name: 'Sân Pickleball 286 Nguyễn Xiển',
    price: '120.000',
    slots: 2,
    location: '286 Nguyễn Xiển',
    type: 'không có mái che',
    level: 3.0,
    image: process.env.PUBLIC_URL + '/assets/images/new3.png',
  },
  {
    name: 'Sân Pickleball 286 Nguyễn Xiển',
    price: '100.000',
    slots: 0,
    location: '286 Nguyễn Xiển',
    type: 'có mái che',
    level: 4.0,
    image: process.env.PUBLIC_URL + '/assets/images/new2.png',
  },
];

const CourtListComponent = () => {
  const [courts, setCourts] = useState([]); // State để lưu trữ danh sách sân
  const [loading, setLoading] = useState(true); // State để theo dõi trạng thái loading

  useEffect(() => {
    const fetchCourts = async () => {
      try {
        const response = await fetch('http://localhost:8383/api/post'); // Địa chỉ API của bạn
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        const data = await response.json();
        setCourts(data); // Lưu dữ liệu vào state
      } catch (error) {
        console.error('Error fetching courts:', error);
      } finally {
        setLoading(false); // Đặt loading thành false sau khi fetch hoàn tất
      }
    };

    fetchCourts(); // Gọi hàm fetch
  }, []);
  return (
    <div className="court-list-container">
      <Row style={{padding: "20px"}}>
        {courts.map((court, index) => (
          <Col key={index} md={3} style={{ padding: 0}}>
            <CourtComponent
              key={court._id}
              name={court.court_address}
              price={court.cost}
              slots={court.total_players} // Bạn có thể cần điều chỉnh này tùy theo yêu cầu
              location={court.court_address}
              type={court.court_type}
              level={parseFloat(court.skill_level)} // Chuyển đổi skill level thành float
              image={court.images[0]}
              style={{width: "100%", alignItems: 'center', justifyContent: 'center', textAlign: "center"}}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CourtListComponent;
