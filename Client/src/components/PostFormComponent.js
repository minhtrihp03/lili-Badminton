import React, { useState } from 'react';
import { Form, Button, Card, Row, Col, Modal } from 'react-bootstrap';
import { FaMapMarkerAlt, FaUsers, FaCalendarAlt, FaDollarSign, FaPhoneAlt, FaFacebook } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import '../styles/screens/PostFormComponent.css';

const PostFormComponent = () => {
  const navigate = useNavigate();
  const [post, setPost] = useState({
    name: '',
    location: '',
    courtType: '',
    slots: 0,
    date: new Date(), // Initialize with a Date object
    price: '',
    phone: '',
    facebook: '',
    image: '',
  });
  
  const [showModal, setShowModal] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Check if the field is the date input
    if (name === "date") {
      // Convert the input string (YYYY-MM-DD) to a Date object
      const dateValue = new Date(value);
      setPost({ ...post, [name]: dateValue });
    } else {
      setPost({ ...post, [name]: value });
    }
    console.log("Updated Post State:", { ...post, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const token = localStorage.getItem('token'); // Retrieve token from localStorage
    console.log('Token:', token);
  
    const formData = new FormData();
    formData.append("court_address", post.location);
    formData.append("total_players", post.slots);
    formData.append("court_type", post.courtType);
    formData.append("players_needed", post.slots);
    formData.append("skill_level", post.level);
    
    // Ensure date is formatted correctly and exists
    if (post.date) {
        // Create a Date object from the post.date
        const dateObject = new Date(post.date);
        
        // Check if the date is valid
        if (isNaN(dateObject)) {
            alert('Please enter a valid date.');
            return;
        }

        // Format date to DD-MM-YYYY
        const formattedDate = formatDate(dateObject);
        console.log("Formatted Date:", formattedDate, "typeDate", typeof(formattedDate)); // Log formatted date
        formData.append("play_date", formattedDate);
    } else {
        alert('Please enter a valid date.');
        return;
    }
    
    formData.append("cost", post.price);
    formData.append("contact_info", JSON.stringify({ phone: post.phone, facebook: post.facebook }));

    // Validate required fields
    if (!post.location || post.slots <= 0 || !post.courtType || !post.date || !post.price || !post.phone) {
        alert('Please fill in all required fields.');
        return;
    }

    // Log the form data
    for (const [key, value] of formData.entries()) {
        console.log(key, value);
    }
  
    try {
        const response = await fetch("https://bepickleball.vercel.app/api/post/create", {
            method: "POST",
            headers: {
                'Authorization': `Bearer ${token}`, // Use the token in the Authorization header
            },
            body: formData,
        });
  
        if (!response.ok) {
            const errorData = await response.json();
            console.error('Response Error:', errorData); // Log error response
            alert(`Error: ${errorData.error}`);
            return;
        }
  
        const result = await response.json();
        setShowModal(true); // Show modal on success
    } catch (error) {
        console.log(error);
        alert('Có lỗi xảy ra khi đăng bài!');
    }
};

// Utility function to format Date object to DD-MM-YYYY
const formatDate = (dateObject) => {
    const day = String(dateObject.getDate()).padStart(2, '0');
    const month = String(dateObject.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = dateObject.getFullYear();
    return `${day}-${month}-${year}`; // Return formatted date
};

  
  const handleCloseModal = () => {
    setShowModal(false);
    navigate('/');
  };

  return (
    <div style={{ margin: "110px" }}>
      <Row className="g-3">
        {/* Left Side: Thông tin chung */}
        <Col md={6} style={{ padding: 0 }} className="g-3">
          <Card className="mb-4" style={{ width: '90%' }}>
            <Card.Body style={{ padding: 0 }}>
              <Card.Title>Thông tin chung</Card.Title>

              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formnameName">
                  <Form.Label><FaMapMarkerAlt /> Tên sân</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Nhập tên sân"
                    value={post.name}
                    onChange={handleInputChange}
                    style={{ width: '90%' }}
                  />
                </Form.Group>

                <Form.Group controlId="formLocation">
                  <Form.Label><FaMapMarkerAlt /> link địa điểm</Form.Label>
                  <Form.Control
                    type="text"
                    name="location"
                    placeholder="Nhập link địa điểm"
                    value={post.location}
                    onChange={handleInputChange}
                    style={{ width: '90%' }}
                  />
                </Form.Group>

                <Form.Group controlId="formSlots" style={{ width: '90%', textAlign: 'center' }}>
                  <Form.Label><FaUsers /> Số người trên sân (bắt buộc)</Form.Label>
                  <Form.Control type="number" name="slots" value={post.slots} onChange={handleInputChange} />
                </Form.Group>

                <Form.Group controlId="formCourtType">
                  <Form.Label>Loại sân:</Form.Label>
                  <div>
                    <Form.Check
                      inline
                      type="radio"
                      label="Không có mái che"
                      name="courtType"
                      value="Không có mái che"
                      onChange={handleInputChange}
                    />
                    <Form.Check
                      inline
                      type="radio"
                      label="Có mái che"
                      name="courtType"
                      value="Có mái che"
                      onChange={handleInputChange}
                    />
                  </div>
                </Form.Group>

                {/* Image and video upload */}
                <Form.Group controlId="formImage" style={{ width: '90%', textAlign: 'center' }}>
                  <Form.Label>Thêm ảnh/Video (bắt buộc)</Form.Label>
                  <Form.Control type="file" multiple style={{ height: '210px', borderRadius: '10px' }} name= "image" onChange={handleInputChange}/>
                </Form.Group>
              </Form>
              <br />
            </Card.Body>
          </Card>
        </Col>

        {/* Right Side: Other information in 3 cards */}
        <Col md={6} style={{ padding: 0 }} className="g-3">
          <Row style={{ margin: 0 }}>
            {/* Yêu cầu về thành viên */}
            <Col md={12} style={{ padding: 0 }}>
              <Card className="mb-3">
                <Card.Body style={{ padding: 0 }}>
                  <Card.Title>Yêu cầu về thành viên</Card.Title>

                  <Form.Group controlId="formSlots" style={{ width: '90%', textAlign: 'center' }}>
                    <Form.Label><FaUsers /> Số người cần tuyển (bắt buộc)</Form.Label>
                    <Form.Control type="number" name="slots" value={post.slots} onChange={handleInputChange} />
                  </Form.Group>

                  <Form.Group controlId="formLevel" style={{ width: '90%', textAlign: 'center' }}>
                    <Form.Label>Trình độ (bắt buộc)</Form.Label>
                    <Form.Control as="select" name="level" onChange={handleInputChange}>
                      <option value="<2.0">1.0 - 2.0 (Newbie)</option>
                      <option value="2.5">2.5</option>
                      <option value="3.0">3.0</option>
                      <option value="3.5">3.5</option>
                      <option value="4.0">4.0</option>
                      <option value="4.5">4.5</option>
                      <option value="5.0">5.0</option>
                      <option value="5.5+">5.5+</option>
                    </Form.Control>
                  </Form.Group>
                  <br />
                </Card.Body>
              </Card>
            </Col>

            {/* Thời gian và chi phí */}
            <Col md={12} style={{ padding: 0 }}>
              <Card className="mb-3">
                <Card.Body style={{ padding: 0 }}>
                  <Card.Title>Thời gian và chi phí</Card.Title>

                  <Form.Group controlId="formDate" style={{ width: '90%', textAlign: 'center' }}>
                    <Form.Label><FaCalendarAlt /> Ngày (bắt buộc)</Form.Label>
                    <Form.Control type="date" name="date" value={post.date.toISOString().substring(0, 10)} onChange={handleInputChange} />
                  </Form.Group>

                  <Form.Group controlId="formPrice" style={{ width: '90%', textAlign: 'center' }}>
                    <Form.Label><FaDollarSign /> Giá/người (bắt buộc)</Form.Label>
                    <Form.Control type="number" name="price" placeholder="Nhập giá" value={post.price} onChange={handleInputChange} />
                  </Form.Group>
                  <br />
                </Card.Body>
              </Card>
            </Col>

            {/* Thông tin liên hệ */}
            <Col md={12} style={{ padding: 0 }}>
              <Card className="mb-3">
                <Card.Body style={{ padding: 0 }}>
                  <Card.Title>Thông tin liên hệ</Card.Title>

                  <Form.Group controlId="formPhone" style={{ width: '90%', textAlign: 'center' }}>
                    <Form.Label><FaPhoneAlt /> Số điện thoại (bắt buộc)</Form.Label>
                    <Form.Control type="text" name="phone" placeholder="Nhập số điện thoại" value={post.phone} onChange={handleInputChange} />
                  </Form.Group>

                  <Form.Group controlId="formFacebook" style={{ width: '90%', textAlign: 'center' }}>
                    <Form.Label><FaFacebook /> Facebook</Form.Label>
                    <Form.Control type="text" name="facebook" placeholder="Nhập Facebook" value={post.facebook} onChange={handleInputChange} />
                  </Form.Group>
                  <br />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* Submit actions */}
      <div className="form-actions">
        <Form.Check type="checkbox" label="Lưu lựa chọn của bạn cho lần sau" className="d-flex justify-content-center" />
        <div className="d-flex justify-content-center">
          <Button variant="secondary" className="me-2">Hủy Bỏ</Button>
          <Button variant="primary" type="submit" onClick={handleSubmit}>Đăng Bài</Button>
        </div>
      </div>

      {/* Success Modal */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Success</Modal.Title>
        </Modal.Header>
        <Modal.Body>Bài đăng của bạn đã thành công!</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseModal}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default PostFormComponent;
