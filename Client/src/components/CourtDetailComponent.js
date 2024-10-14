import React from 'react';
import { useLocation } from 'react-router-dom';
import { Card, Row, Col, Button } from 'react-bootstrap';
import { FaMapMarkerAlt, FaUserFriends, FaCheckCircle, FaRegClock } from 'react-icons/fa';
import { CiLocationOn } from "react-icons/ci";
import { FaArrowUpRightDots } from "react-icons/fa6";
import { IoIosInformationCircle } from "react-icons/io";
import { PiUserSquareLight } from "react-icons/pi";
import { useNotifications } from './NotificationContext'; // Cập nhật đường dẫn
import '../styles/screens/CourtDetailComponent.css';

const CourtDetailComponent = () => {
  const location = useLocation();
  const { state } = location;
  const { name, price, slots, location: courtLocation, type, level, image, players_needed, applied_players, time, contact_info } = state;

  const { addNotification } = useNotifications(); // Lấy hàm addNotification từ context

  const handleRegister = () => {
    // Thêm thông báo khi đăng ký thành công
    addNotification(`Đặt sân ${name} thành công!`);
  };

  const getPhoneNumber = (contactInfo) => {
    const match = contactInfo.match(/SĐT:\s?(\d+)/); // Tìm số điện thoại
    return match ? match[1] : 'Không có số điện thoại'; // Trả về số điện thoại nếu có
  };

  return (
    <div className="court-detail-container">
      <Card id="court-detail-card">
        <Row>
          <Col md={7} style={{ padding: 0 }}>
            <img src={image} alt={`Court ${name}`} />
          </Col>
          <Col md={5} className="court-details">
            <Card.Body>
              <div className="badge-container">
                <Button variant="outline-primary" className="court-badge">{type}</Button>
              </div>
              <Card.Title style={{ fontSize: "32px", fontWeight: "500" }}>{name}</Card.Title>
              <Card.Text className='court-info'>
                <div className="court-info-item">
                  <CiLocationOn className="icon" style={{ color: "#828282" }} /> {courtLocation}
                </div>
                <div className="court-info-item">
                  <FaArrowUpRightDots className="icon" style={{ color: "#828282", fontSize: "20px" }} />
                  Trình độ: {level.toFixed(1)}
                </div>
              </Card.Text>
              <Card.Text style={{ fontSize: "24px", fontWeight: "600", color: "#059A8F" }}>{price.toLocaleString('vi-VN')} VND / người</Card.Text>
              <Card.Text>
                <PiUserSquareLight className="icon" style={{ color: "#828282" }} />Slot cần tuyển: {applied_players}/{players_needed} người đã đăng ký
              </Card.Text>
              <Card.Text>
                <IoIosInformationCircle className="icon" style={{ color: "#828282", fontSize: "20px" }} />Thời gian chơi: {time}
              </Card.Text>
              <Card.Text>
                <div className="icon" style={{ color: "#828282" }} />Số điện thoại: {getPhoneNumber(contact_info)}
              </Card.Text>
              <Button className="register-btn" variant="primary" onClick={handleRegister}>Đăng kí giao lưu</Button>
            </Card.Body>
          </Col>
        </Row>
        {/* Court Description */}
        <Row>
          <Col style={{ textAlign: "left" }}>
            <h5 style={{ color: "#059A8F" }}>Lưu ý</h5>
            <div style={{ width: '4%', height: '1px', color: "#059A8F", backgroundColor: '#ccc', margin: '10px 0' }} /> {/* Đường kẻ ngăn cách */}
            <br />
            <p>
              1.  "Xé vé" là hình thức thu tiền trọn gói cho cả buổi chơi (thường 2-3 giờ) bao gồm: sân + bóng + nước uống (Aqua/Dasani). <br />
              2. Hình thức này rất phù hợp với những người có công việc bận rộn không có nhóm chơi cố định hoặc có thời gian rảnh mà không kiếm được đồng đội chơi cùng. <br />
              3. Sau khi đăng ký giao lưu thành công, mọi người thể kiểm tra lại thông qua chức năng sân đã đăng ký. <br />
              4. Mọi người hoàn toàn có thể hủy sân sau khi đặt nếu có việc đột suất. <br />
              5. Chúng tôi hoàn toàn không thu bất kì phí nào của người chơi, vui lòng thanh toán trực tiếp với chủ sân.
            </p>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default CourtDetailComponent;
