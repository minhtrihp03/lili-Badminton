import React from 'react';
import { Button } from 'react-bootstrap';
import { FaInfoCircle } from 'react-icons/fa';
import '../styles/screens/HomeComponent.css';
import { useLocation } from 'react-router-dom';

const HomeComponent = () => {
  const location = useLocation();

  const isCoachPage = location.pathname.includes('coach');

  return (
    <div className={`home-component ${isCoachPage ? 'coach-home' : ''}`}>
      <h1>Trang đặt sân Pickleball uy tín ở Việt Nam</h1>
      <p>Chọn sân nhanh chóng và dễ dàng, với sự hỗ trợ từ cộng đồng.</p>
      <button className='button btn-primary'>
        <FaInfoCircle /> Tìm hiểu thêm
      </button>
    </div>
  );
}

export default HomeComponent;
