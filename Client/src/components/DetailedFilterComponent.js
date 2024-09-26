import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const DetailedFilterComponent = () => {
  const [filters, setFilters] = useState({
    location: '',
    startTime: '',
    level: '',
    courtType: '',
    groupType: '',
    numPeople: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(filters);
  };

  const handleReset = () => {
    setFilters({
      location: '',
      startTime: '',
      level: '',
      courtType: '',
      groupType: '',
      numPeople: ''
    });
  };

  return (
    <div className="detailed-filter">
      <Form onSubmit={handleSubmit}>
        <Row className="g-2">
          {/* Địa điểm */}
          <Col xs="auto" className="me-3">
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
                <option value="Other">Other</option>
              </Form.Control>
            </Form.Group>
          </Col>

          {/* Giờ bắt đầu */}
          <Col xs="auto" className="me-3">
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

          {/* Trình độ */}
          <Col xs="auto" className="me-3">
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
              </Form.Control>
            </Form.Group>
          </Col>

          {/* Loại nhóm */}
          <Col xs="auto" className="me-3">
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

          {/* Loại sân */}
          <Col xs="auto" className="me-3">
            <Form.Group controlId="formCourtType">
              <Form.Control
                as="select"
                name="courtType"
                value={filters.courtType}
                onChange={handleInputChange}
                className="form-control-sm"
              >
                <option value="">Loại sân</option>
                <option value="Có mái che">Có mái che</option>
                <option value="Không có mái che">Không có mái che</option>
              </Form.Control>
            </Form.Group>
          </Col>

          {/* Số người */}
          <Col xs="auto" className="me-3">
            <Form.Group controlId="formNumPeople">
              <Form.Control
                as="select"
                name="numPeople"
                value={filters.numPeople}
                onChange={handleInputChange}
                className="form-control-sm"
              >
                <option value="">Số người trên sân</option>
                {Array.from({ length: 9 }, (_, i) => i + 1).map((num) => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </Form.Control>
            </Form.Group>
          </Col>

          {/* Tìm kiếm button */}
          <Col xs="auto" className="me-3">
            <Button variant="primary" type="submit" className="btn-sm">
              Tìm kiếm
            </Button>
          </Col>

          {/* Xóa lọc link */}
          <Col xs="auto" className="me-3">
            <Button variant="link" className="btn-sm" onClick={handleReset}>
              Xóa lọc
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default DetailedFilterComponent;
