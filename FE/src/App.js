import React from 'react';
import Register from './conpoments/Register';
import ForgotPasswordPhone from './conpoments/ForgotPasswordPhone';
import ForgotPasswordOTP from './conpoments/ForgotPasswordOTP';
import ChangePassword from './conpoments/ChangePassword';
import './App.css';

function App() {
  return (
    <div className="App">
      <Register />
      <ForgotPasswordPhone />
      <ForgotPasswordOTP />
      <ChangePassword />
    </div>
  );
}

export default App;