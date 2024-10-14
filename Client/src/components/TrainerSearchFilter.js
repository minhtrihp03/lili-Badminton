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
      setShowOther(true); // Show the Other location input field
    } else if (name === 'location') {
      setShowOther(false); // Hide Other input if any other location is selected
      setFilters({ ...filters, otherLocation: '' }); // Clear Other location input
    }

    setFilters({ ...filters, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass filters back to parent component, updating the location or other location
    onSearch({
      trainerName: filters.location === 'Other' ? filters.otherLocation : filters.location,
      experienceLevel: filters.level,
    });
  };

  const handleResetLocation = () => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      location: '',
      otherLocation: '',
    }));
    setShowOther(false);
    onSearch({ trainerName: '', experienceLevel: filters.level }); // Only reset location filter
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
                <option value="Other">Other</option> {/* Other option */}
              </Form.Control>
            </Form.Group>
          </Col>

          {/* Show Other location input field if selected */}
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
            <Button variant="link" className="btn-sm" onClick={handleResetLocation}>
              Xóa lọc
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default TrainerSearchFilter;
