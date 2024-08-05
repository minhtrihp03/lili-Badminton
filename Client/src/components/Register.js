import React from 'react';
import { FaUser, FaPhone, FaLock, FaRedo, FaArrowLeft } from 'react-icons/fa';
import '../styles/bootstraps/custom_bootstrap.css';
import '../styles/screens/Register.css';

const Register = () => {
  return (
    <div className="register-container-fluid">
      <div className="form-wrapper d-flex flex-row bg-white w-85 h-85 overflow-hidden position-relative">
        <div className="image-wrapper w-50">
          <img src={process.env.PUBLIC_URL + '/assets/images/Register.png'}
            alt="Register"
            className="image w-100 h-100" />
        </div>
        <div className='wrapper w-50 h-100'>
          <button className="btn border" style={{position: "absolute", top: "14%", left: "53.5%"}}>
            <FaArrowLeft className='fa-icon'/>
          </button>
          <div className="form w-80">
            <div className='form-header d-flex flex-column align-items-center mb-4'>
              <h2 className='font-weight-bold mb-4' style={{fontSize: "3rem"}}>Đăng ký</h2>
              <p className="subtitle">Hãy tạo tài khoản mới để đến với chúng tôi</p>
            </div>

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
    </div>
  );
};

export default Register;
