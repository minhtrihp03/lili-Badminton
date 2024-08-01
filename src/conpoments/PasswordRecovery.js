import React, { useState } from 'react';
import './PasswordRecovery.css';

const PasswordRecovery = () => {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState(1);

  const handleSendOtp = (e) => {
    e.preventDefault();
    // Handle sending OTP logic here
    setStep(2);
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    // Handle OTP verification logic here
    console.log("OTP verified");
  };

  return (
    <div className="password-recovery-container">
      <div className="password-recovery-image">
        <img src="/assets/images/your-image.jpg" alt="Password Recovery" />
      </div>
      <div className="password-recovery-form">
        {step === 1 ? (
          <>
            <h2>Quên mật khẩu</h2>
            <form onSubmit={handleSendOtp}>
              <label>
                Số điện thoại
                <input 
                  type="tel" 
                  placeholder="Số điện thoại" 
                  value={phone} 
                  onChange={(e) => setPhone(e.target.value)} 
                />
              </label>
              <button type="submit">Nhận mã OTP</button>
            </form>
          </>
        ) : (
          <>
            <h2>Quên mật khẩu</h2>
            <form onSubmit={handleVerifyOtp}>
              <label>
                Nhập mã OTP
                <input 
                  type="text" 
                  placeholder="Nhập mã OTP" 
                  value={otp} 
                  onChange={(e) => setOtp(e.target.value)} 
                />
              </label>
              <button type="submit">Tiếp tục</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default PasswordRecovery;
