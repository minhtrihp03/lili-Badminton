import React, { useState } from 'react';
import { FaFacebook, FaUser, FaLock, FaArrowLeft } from 'react-icons/fa';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/screens/Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLoginClick = async () => {
    try {
      const response = await axios.get('http://localhost:9999/users', {
        params: { username: username },
      });

      const user = response.data.find((user) => user.username === username);

      if (user) {
        if (user.password === password) {
          // Lưu trạng thái đăng nhập vào LocalStorage
          localStorage.setItem('isLoggedIn', true);
          localStorage.setItem('name', user?.profile?.name);
          console.log(user.profile.name);
          
          
          alert('Đăng nhập thành công!');
          navigate('/');  // Điều hướng đến trang chủ sau khi đăng nhập
        } else {
          setError('Mật khẩu không đúng');
        }
      } else {
        setError('Tên đăng nhập không tồn tại');
      }
    } catch (error) {
      console.error('Lỗi khi đăng nhập:', error);
      setError('Có lỗi xảy ra. Vui lòng thử lại sau.');
    }
  };

  const handleBackButton = () => {
    navigate('/');
  };

  return (
    <div className="container">
      <div className="form-wrapper">
        <div className="form">
          <button className="back-button" onClick={handleBackButton}>
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
            <input
              type="text"
              className="input"
              placeholder="Tên đăng nhập"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <div className="icon-wrapper">
              <FaLock />
            </div>
            <input
              type="password"
              className="input"
              placeholder="Mật khẩu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error-text">{error}</p>}
          <div className="remember-me-container">
            <div>
              <input type="checkbox" id="rememberMe" />
              <label htmlFor="rememberMe"> Ghi nhớ đăng nhập</label>
            </div>
            <a href="/forgot-password" className="link">Quên mật khẩu?</a>
          </div>
          <button className="button" onClick={handleLoginClick}>Đăng nhập</button>
          <p>Chưa có tài khoản? <a href="/register" className="link">Đăng ký</a></p>
        </div>
        <img src={process.env.PUBLIC_URL + '/assets/images/Register.png'} alt="Login" className="image" />
      </div>
    </div>
  );
};

export default Login;
