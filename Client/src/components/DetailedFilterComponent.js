import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

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

  return (
    <div className="detailed-filter">
      <h2>Bộ lọc chi tiết</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formLocation">
          <Form.Label>Địa điểm</Form.Label>
          <Form.Control
            type="text"
            name="location"
            placeholder="Nhập địa điểm"
            value={filters.location}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="formStartTime">
          <Form.Label>Giờ bắt đầu</Form.Label>
          <Form.Control
            type="time"
            name="startTime"
            value={filters.startTime}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="formLevel">
          <Form.Label>Trình độ</Form.Label>
          <Form.Control as="select" name="level" value={filters.level} onChange={handleInputChange}>
            <option value="1.0-2.0">1.0 - 2.0</option>
            <option value="2.5">2.5</option>
            <option value="3.0">3.0</option>
            <option value="4.0">4.0</option>
            <option value="5.5">5.5+</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formCourtType">
          <Form.Label>Loại sân</Form.Label>
          <Form.Control as="select" name="courtType" value={filters.courtType} onChange={handleInputChange}>
            <option value="Có mái che">Có mái che</option>
            <option value="Không có mái che">Không có mái che</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formGroupType">
          <Form.Label>Loại nhóm</Form.Label>
          <Form.Control as="select" name="groupType" value={filters.groupType} onChange={handleInputChange}>
            <option value="Nhóm xé vé">Nhóm xé vé</option>
            <option value="Nhóm cố định">Nhóm cố định</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formNumPeople">
          <Form.Label>Số người</Form.Label>
          <Form.Control type="number" name="numPeople" placeholder="Số người trên sân" value={filters.numPeople} onChange={handleInputChange} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Lọc
        </Button>
      </Form>
    </div>
  );
}

export default DetailedFilterComponent;
