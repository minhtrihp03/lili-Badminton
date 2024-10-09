import React, { useEffect, useState } from 'react';
import { Row, Col, Spinner } from 'react-bootstrap';
import CourtComponent from './CourtComponent';
import Pagination from '@mui/material/Pagination'; // Import Pagination từ Material-UI
import '../styles/screens/CourtListComponent.css'; // Import custom CSS

const CourtListComponent = () => {
  const [courts, setCourts] = useState([]); // State để lưu trữ danh sách sân
  const [loading, setLoading] = useState(true); // State để theo dõi trạng thái loading
  const [page, setPage] = useState(1); // State để lưu trang hiện tại
  const itemsPerPage = 16; // Số phần tử mỗi trang
  const totalPages = Math.ceil(courts.length / itemsPerPage); // Tổng số trang

  useEffect(() => {
    const fetchCourts = async () => {
      try {
        const response = await fetch('https://bepickleball.vercel.app/api/post/future'); // Địa chỉ API của bạn
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

  // Hàm thay đổi trang
  const handlePageChange = (event, value) => {
    setPage(value);
  };

  // Tính toán phần tử hiển thị cho trang hiện tại
  const startIndex = (page - 1) * itemsPerPage;
  const currentCourts = courts.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="court-list-container">
      {/* Kiểm tra trạng thái loading */}
      {loading ? (
        <div className="loading-spinner">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <>
          <Row style={{ padding: '20px' }}>
            {currentCourts.map((court, index) => (
              <Col key={index} md={3} style={{ padding: 0 }}>
                <CourtComponent
                  key={court._id}
                  name={court.court_address}
                  price={court.cost}
                  slots={court.total_players}
                  location={court.court_address}
                  type={court.court_type}
                  level={parseFloat(court.skill_level)}
                  image={court.images[0]}
                  players_needed={court.players_needed}
                  applied_players={court.applied_players}
                  time={court.time}
                  style={{
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                  }}
                />
              </Col>
            ))}
          </Row>

          {/* Hiển thị pagination */}
          <div className='pagination'>
            <Pagination
              count={totalPages} // Tổng số trang
              page={page} // Trang hiện tại
              onChange={handlePageChange} // Hàm xử lý khi chuyển trang
              siblingCount={2} // Số ô bên cạnh hiện tại (5 ô hiển thị)
              boundaryCount={1} // Số ô đầu/cuối
              variant="outlined" // Kiểu giao diện của pagination
              shape="circular" // Hình dạng các nút
              sx={{
                '& .MuiPaginationItem-root': {
                  borderRadius: '50%', // Đặt border-radius để tạo nút tròn
                  margin: '0 5px', // Thêm khoảng cách giữa các nút
                  color: '#000', // Màu chữ
                  backgroundColor: '#fff', // Màu nền
                  width: '30px', // Chiều rộng
                  height: '43px', // Chiều cao
                  fontWeight: 600,
                  '&.Mui-selected': {
                    backgroundColor: '#2d70a1 !important', // Màu nền khi nút được chọn
                    color: '#fff', // Màu chữ khi nút được chọn
                  },
                },
              }}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default CourtListComponent;
