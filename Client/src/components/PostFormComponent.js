import React, { useState } from 'react';
import { Form, Button, Card, Row, Col } from 'react-bootstrap';
import { FaPen, FaMapMarkerAlt, FaUsers, FaCalendarAlt, FaDollarSign, FaPhoneAlt, FaFacebook } from 'react-icons/fa';
import { toast } from 'react-toastify';
import '../styles/screens/PostFormComponent.css';

const PostFormComponent = () => {
  const [post, setPost] = useState({
    title: '',
    location: '',
    groupType: '',
    courtType: '',
    slots: 0,
    date: '',
    price: '',
    phone: '',
    facebook: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Đăng bài thành công!', { position: toast.POSITION.TOP_RIGHT });
  };

  return (
    <div className='post-back'>
      <Row className="g-3">
        {/* Left Side: Thông tin chung */}
        <Col md={6} style={{ padding: 0 }} className="g-3">
          <Card className="mb-4 card " id='card-1' >
            <Card.Body style={{ padding: 0 }}>
              <Card.Title id='post-card-title'>Thông tin chung</Card.Title>

              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formLocation">
                  <Form.Label><FaMapMarkerAlt /> Địa chỉ sân (bắt buộc)</Form.Label>
                  <Form.Control
                    type="text"
                    name="location"
                    placeholder="Nhập địa điểm"
                    value={post.location}
                    onChange={handleInputChange}
                  style={{ width: '90%' }}
                  />
                </Form.Group>

                <Form.Group controlId="formGroupType">
                  <Form.Label><FaUsers /> Loại nhóm (bắt buộc)</Form.Label>
                  <Form.Control as="select" name="groupType" value={post.groupType} onChange={handleInputChange} style={{ width: '90%' }}>
                    <option value="Nhóm xé vé">Nhóm xé vé</option>
                    <option value="Nhóm cố định">Nhóm cố định</option>
                  </Form.Control>
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
                  <Form.Control type="file" multiple style={{ height: '210px', borderRadius: '10px' }} />
                </Form.Group>
              </Form>
              <br></br>
            </Card.Body>
          </Card>
        </Col>

        {/* Right Side: Other information in 3 cards */}
        <Col md={6} style={{ padding: 0 }} className="g-3">
          <Row style={{ margin: 0 }}>
            {/* Yêu cầu về thành viên */}
            <Col md={12} style={{ padding: 0 }}>
              <Card className="mb-3 card" id='card-2'>
                <Card.Body style={{ padding: 0 }}>
                  <Card.Title id='post-card-title'>Yêu cầu về thành viên</Card.Title>

                  <Form.Group controlId="formSlots" style={{ width: '90%', textAlign: 'center' }}>
                    <Form.Label><FaUsers /> Số người cần tuyển (bắt buộc)</Form.Label>
                    <Form.Control type="number" name="slots" value={post.slots} onChange={handleInputChange} />
                  </Form.Group>

                  <Form.Group controlId="formLevel" style={{ width: '90%', textAlign: 'center' }}>
                    <Form.Label>Trình độ (bắt buộc)</Form.Label>
                    <Form.Control as="select" name="level" onChange={handleInputChange}>
                      <option value="1.0">1.0-2.0</option>
                      <option value="2.5">2.5</option>
                      <option value="3.0">3.0</option>
                      <option value="3.5">3.5</option>
                      <option value="4.0">4.0</option>
                      <option value="4.5">4.5</option>
                      <option value="5.0">5.0</option>
                      <option value="5.5+">5.5+</option>
                    </Form.Control>
                  </Form.Group>
                  <br></br>
                </Card.Body>
              </Card>
            </Col>

            {/* Thời gian và chi phí */}
            <Col md={12} style={{ padding: 0 }}>
              <Card className="mb-3 card" id='card-2'>
                <Card.Body style={{ padding: 0 }}>
                  <Card.Title id='post-card-title'>Thời gian và chi phí</Card.Title>

                  <Form.Group controlId="formDate" style={{ width: '90%', textAlign: 'center' }}>
                    <Form.Label><FaCalendarAlt /> Ngày (bắt buộc)</Form.Label>
                    <Form.Control type="date" name="date" value={post.date} onChange={handleInputChange} />
                  </Form.Group>

                  <Form.Group controlId="formPrice" style={{ width: '90%', textAlign: 'center' }}>
                    <Form.Label><FaDollarSign /> Giá/người (bắt buộc)</Form.Label>
                    <Form.Control type="number" name="price" placeholder="Nhập giá" value={post.price} onChange={handleInputChange} />
                  </Form.Group>
                  <br></br>
                </Card.Body>
              </Card>
            </Col>

            {/* Thông tin liên hệ */}
            <Col md={12} style={{ padding: 0 }}>
              <Card className="mb-3 card" id='card-2'>
                <Card.Body style={{ padding: 0 }}>
                  <Card.Title style={{textAlign: "center"}}>Thông tin liên hệ</Card.Title>

                  <Form.Group controlId="formPhone" style={{ width: '90%', textAlign: 'center' }}>
                    <Form.Label><FaPhoneAlt /> Số điện thoại (bắt buộc)</Form.Label>
                    <Form.Control type="text" name="phone" placeholder="Nhập số điện thoại" value={post.phone} onChange={handleInputChange} />
                  </Form.Group>

                  <Form.Group controlId="formFacebook" style={{ width: '90%', textAlign: 'center' }}>
                    <Form.Label><FaFacebook /> Link Facebook (nếu cần)</Form.Label>
                    <Form.Control type="text" name="facebook" placeholder="Nhập link Facebook" value={post.facebook} onChange={handleInputChange} />
                  </Form.Group>
                  <br></br>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* Checkbox and Buttons */}
      <div className="form-actions">
        <Form.Check type="checkbox" label={<span className="custom-label">&nbsp;&nbsp; Lưu lựa chọn của bạn cho lần sau</span>} className="d-flex justify-content-center" style={{color: "fff"}}/>
        <div className="d-flex justify-content-center">
          <Button variant="secondary" id='btn-post-1' className="post-form-button me-2">Hủy Bỏ</Button>
          <Button variant="primary" type="submit" className='post-form-button'>Đăng Bài</Button>
        </div>
      </div>
    </div>
  );
};

export default PostFormComponent;