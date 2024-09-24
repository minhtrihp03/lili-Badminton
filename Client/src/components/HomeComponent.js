import React from 'react';
import { Button } from 'react-bootstrap';
import { FaInfoCircle } from 'react-icons/fa';

const HomeComponent = () => {
  return (
    <div className="home-component">
      <h1>Trang đặt sân Pickleball uy tín ở Việt Nam</h1>
      <p>Chọn sân nhanh chóng và dễ dàng, với sự hỗ trợ từ cộng đồng.</p>
      <Button variant="primary">
        <FaInfoCircle /> Tìm hiểu thêm
      </Button>
    </div>
  );
}

export default HomeComponent;
