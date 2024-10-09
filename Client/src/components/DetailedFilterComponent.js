import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import '../styles/screens/DetailedFilterComponent.css';

const DetailedFilterComponent = ({ setFilteredResults, allCourts }) => {
  const [filters, setFilters] = useState({
    location: '',
    startTime: '',
    level: '',
    courtType: '',
    numPeople: '',
    otherLocation: '', // Thêm trường cho tuỳ chọn "Other"
  });

  const [showOther, setShowOther] = useState(false); // Trạng thái cho việc hiển thị "Other"

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'location' && value === 'Other') {
      setShowOther(true); // Hiển thị trường Other nếu chọn "Other"
    } else if (name === 'location') {
      setShowOther(false); // Ẩn trường Other nếu chọn khác
      setFilters({ ...filters, otherLocation: '' }); // Xoá giá trị Other khi chọn khác
    }

    setFilters({ ...filters, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const filteredResults = allCourts.filter(court => {
      const locationFilter = filters.location === 'Other' 
        ? court.court_address.includes(filters.otherLocation) // Lọc bằng tuỳ chọn "Other"
        : filters.location
        ? court.court_address.includes(filters.location)
        : true;

      return (
        locationFilter &&
        (filters.startTime ? new Date(court.time).getHours() === new Date(filters.startTime).getHours() : true) &&
        (filters.level ? parseFloat(court.skill_level) === parseFloat(filters.level) : true) &&
        (filters.courtType ? court.court_type.includes(filters.courtType) : true) &&
        (filters.numPeople ? court.total_players >= parseInt(filters.numPeople) : true)
      );
    });

    setFilteredResults(filteredResults); // Cập nhật danh sách sau khi lọc
  };

  const handleReset = () => {
    setFilters({
      location: '',
      startTime: '',
      level: '',
      courtType: '',
      numPeople: '',
      otherLocation: '',
    });
    setShowOther(false); // Ẩn "Other" khi reset
    setFilteredResults(allCourts); // Hiển thị lại tất cả sân khi reset bộ lọc
  };

  return (
    <div className="detailed-filter">
      <Form onSubmit={handleSubmit}>
        <Row className="g-2">
          <Col xs="auto" className="me-1">
            <Form.Group controlId="formLocation">
              <Form.Control
                as="select"
                name="location"
                value={filters.location}
                onChange={handleInputChange}
                className="form-control-sm"
              >
                <option value="">Địa điểm</option>
                <option value="Hồ Chí Minh">Hồ Chí Minh</option>
                <option value="Hà Nội">Hà Nội</option>
                <option value="Hải Phòng">Hải Phòng</option>
                <option value="Other">Other</option> {/* Tuỳ chọn Other */}
              </Form.Control>
            </Form.Group>
          </Col>

          {/* Hiển thị trường nhập tuỳ chọn "Other" khi được chọn */}
          {showOther && (
            <Col xs="auto" className="me-1">
              <Form.Group controlId="formOtherLocation">
                <Form.Control
                  type="text"
                  placeholder="Nhập địa điểm khác"
                  name="otherLocation"
                  value={filters.otherLocation}
                  onChange={handleInputChange}
                  className="form-control-sm"
                />
              </Form.Group>
            </Col>
          )}

          <Col xs="auto" className="me-1">
            <Form.Group controlId="formStartTime">
              <Form.Control
                type="time"
                name="startTime"
                value={filters.startTime}
                onChange={handleInputChange}
                className="form-control-sm"
              />
            </Form.Group>
          </Col>

          <Col xs="auto" className="me-1">
            <Form.Group controlId="formLevel">
              <Form.Control
                as="select"
                name="level"
                value={filters.level}
                onChange={handleInputChange}
                className="form-control-sm"
              >
                <option value="">Trình độ</option>
                {Array.from({ length: 11 }, (_, i) => (i * 0.5).toFixed(1)).map((level) => (
                  <option key={level} value={level}>{level}</option>
                ))}
                <option value="5.5+">5.5+</option>
              </Form.Control>
            </Form.Group>
          </Col>

          <Col xs="auto" className="me-1">
            <Form.Group controlId="formGroupType">
              <Form.Control
                as="select"
                name="groupType"
                value={filters.groupType}
                onChange={handleInputChange}
                className="form-control-sm"
              >
                <option value="">Loại nhóm</option>
                <option value="Nhóm xé vé">Nhóm xé vé</option>
                <option value="Nhóm cố định">Nhóm cố định</option>
              </Form.Control>
            </Form.Group>
          </Col>

          <Col xs="auto" className="me-1">
            <Form.Group controlId="formCourtType">
              <Form.Control
                as="select"
                name="courtType"
                value={filters.courtType}
                onChange={handleInputChange}
                className="form-control-sm"
              >
                <option value="">Loại sân</option>
                <option value="covered">Có mái che</option>
                <option value="uncovered">Không có mái che</option>
              </Form.Control>
            </Form.Group>
          </Col>

          <Col xs="auto" className="me-1">
            <Button variant="primary" type="submit" className="btn-sm">
              Tìm kiếm
            </Button>
          </Col>

          <Col xs="auto" className="me-1">
            <Button variant="link" className="btn-sm" onClick={handleReset}>
              Xóa lọc
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default DetailedFilterComponent;
