import React from 'react';
import { FaUser, FaPhone, FaLock, FaRedo, FaArrowLeft } from 'react-icons/fa';
import './Register.css';

const Register = () => {
  return (
    <div className="container">
      <div className="form-wrapper">
        <img src={process.env.PUBLIC_URL + '/assets/images/Register.png'} alt="Register" className="image" />
        <div className="form">
          <button className="back-button">
            <FaArrowLeft />
          </button>
          <h2>Đăng ký</h2>
          <p className="subtitle">Hãy tạo tài khoản mới để đến với chúng tôi</p>
          <div className="input-group">
            <div className="icon-wrapper">
              <FaUser />
            </div>
            <input type="text" placeholder="Tên đăng nhập" className="input" />
          </div>
          <div className="input-group">
            <div className="icon-wrapper">
              <FaPhone />
            </div>
            <input type="tel" placeholder="Nhập số điện thoại" className="input" />
          </div>
          <div className="input-group">
            <div className="icon-wrapper">
              <FaLock />
            </div>
            <input type="password" placeholder="Nhập mật khẩu" className="input" />
          </div>
          <div className="input-group">
            <div className="icon-wrapper">
              <FaRedo />
            </div>
            <input type="password" placeholder="Nhập lại mật khẩu" className="input" />
          </div>
          <button className="button">Đăng ký</button>
          <p className="link-wrapper">
            Đã có tài khoản? <a href="#" className="link">Đăng nhập</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
