import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    setUsername('Minh Trí'); // Set username here or fetch from a form or API
    setIsLoggedIn(true);
  };

  return (
    <header className="header">
      <div className="logo">LOGO</div>
      <ul className="nav-links">
        <li><a href="#">Trang chủ</a></li>
        <li><a href="#">Giới thiệu</a></li>
        <li><a href="#">Hướng dẫn</a></li>
        <li><a href="#">Liên hệ</a></li>
      </ul>
      {isLoggedIn ? (
        <div className="user-section">
          <button className="post-button">Đăng Bài Tìm Giao Lưu</button>
          <div className="user-info">
          <img src={process.env.PUBLIC_URL + '/assets/images/Register.png'} alt="Login" className="image" />
            <span>{username}</span>
          </div>
        </div>
      ) : (
        <div className="auth-buttons">
          <button className="login-button" onClick={handleLogin}>Đăng Nhập</button>
          <button className="register-button">Đăng Ký</button>
        </div>
      )}
    </header>
  );
};

export default Header;
