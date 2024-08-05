import React, { useState } from 'react';
import { FaFacebook, FaUser, FaLock, FaArrowLeft } from 'react-icons/fa';
import '../styles/screens/Login.css'; // Import the CSS file

const Login = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleLoginClick = () => {
    setShowAlert(true);
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <div className="container">
      <div className="form-wrapper">
        <div className="form">
          <button className="back-button">
            <FaArrowLeft />
          </button>
          <h2>Đăng nhập</h2>
          <button className="facebook-button">
            <FaFacebook /> Đăng nhập bằng Facebook
          </button>
          <p className="subtitle1">Hoặc</p>
          <div className="input-group">
            <div className="icon-wrapper">
              <FaUser />
            </div>
            <input type="text" className="input" placeholder="Tên đăng nhập" />
          </div>
          <div className="input-group">
            <div className="icon-wrapper">
              <FaLock />
            </div>
            <input type="password" className="input" placeholder="Mật khẩu" />
          </div>
          <div className="remember-me-container">
            <div>
              <input type="checkbox" id="rememberMe" />
              <label htmlFor="rememberMe"> Ghi nhớ đăng nhập</label>
            </div>
            <a href="#" className="link">Quên mật khẩu?</a>
          </div>
          <button className="button" onClick={handleLoginClick}>Đăng nhập</button>
          <p>Chưa có tài khoản? <a href="#" className="link">Đăng ký</a></p>
        </div>
        <img src={process.env.PUBLIC_URL + '/assets/images/Register.png'} alt="Login" className="image" />
      </div>
      {showAlert && (
        <div className="alert-overlay">
          <div className="alert-content">
            <h3 className="alert-title">Chú ý</h3>
            <p className="alert-text">
              Bạn có muốn lưu tài khoản đăng nhập cho lần đăng nhập sau không?
            </p>
            <div className="alert-button-group">
              <button className="alert-button" onClick={handleCloseAlert}>Hủy bỏ</button>
              <button className="alert-button" onClick={handleCloseAlert}>Tiếp tục đăng nhập</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
