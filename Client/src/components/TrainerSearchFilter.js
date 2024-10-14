import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import '../styles/screens/TrainerSearchFilter.css';

const TrainerSearchFilter = ({ onSearch }) => {
  const [filters, setFilters] = useState({
    location: '',
    level: '',
    otherLocation: '',
  });

  const [showOther, setShowOther] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'location' && value === 'Other') {
      setShowOther(true);
    } else if (name === 'location') {
      setShowOther(false);
      setFilters({ ...filters, otherLocation: '' });
    }
    setFilters({ ...filters, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(filters); // Pass filters back to parent
  };

  const handleReset = () => {
    setFilters({ location: '', level: '', otherLocation: '' });
    setShowOther(false);
    onSearch({ location: '', level: '', otherLocation: '' }); // Reset filters in parent
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
                <option value="Other">Other</option>
              </Form.Control>
            </Form.Group>
          </Col>

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

export default TrainerSearchFilter;
