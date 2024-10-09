import React, { useEffect, useState } from 'react';
import '../styles/screens/Header.css';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [menuOpen, setMenuOpen] = useState(false); // State for menu toggle

  const navigate = useNavigate();

  useEffect(() => {
    const loggedInStatus = localStorage.getItem('isLoggedIn');
    const storedName = localStorage.getItem('name');
    const storedAvatar = localStorage.getItem('avatar');

    if (loggedInStatus === 'true') {
      setIsLoggedIn(true);
      setName(storedName || '');
      setAvatar(storedAvatar || '');
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('name');
    localStorage.removeItem('avatar');
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setName('');
    setAvatar('');
    navigate('/');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  const handleRegister = () => {
    navigate('/register');
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle menu state
  };

  return (
    <header className="header">
      <div className="logo">
        <a href="/">
        <img src={process.env.PUBLIC_URL + '/assets/images/logo.png'} alt="Logo" />
        </a>
        
      </div>
      <span className="menu-toggle" onClick={toggleMenu}>&#9776;</span> {/* Menu toggle button */}
      <ul className={`nav-links ${menuOpen ? 'show' : ''}`}>
        <li><a href="/">Trang chủ</a></li>
        <li><a href="https://shop-jijiball.netlify.app/">Cửa Hàng</a></li>
        <li><a href="/court">Giao lưu</a></li>
        <li><a href="/coach">Huấn luyện viên</a></li>
        <li><button className="post-button"><a href="/post-form" style={{ color: "white", backgroundColor: "#064D7E" }}> Đăng Bài Tìm Giao Lưu </a></button></li>
      </ul>
      {isLoggedIn ? (
        <div className="user-section">
          <div className="user-info">
            <img 
              src={avatar ? avatar : process.env.PUBLIC_URL + '/assets/images/blank-avatar.png'} 
              alt="User Avatar" 
              className="image" 
            />
            <span>{name}</span>
          </div>
          <button className="login-button" onClick={handleLogout} style={{ backgroundColor: "#064D7E" }}>Đăng xuất</button>
        </div>
      ) : (
        <div className="auth-buttons">
          <button className="login-button" onClick={handleLogin} style={{ backgroundColor: "#064D7E" }}>Đăng Nhập</button>
          <button className="register-button" onClick={handleRegister}>Đăng Ký</button>
        </div>
      )}
    </header>
  );
};

export default Header;
