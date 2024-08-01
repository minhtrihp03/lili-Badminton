import React from 'react';
import Register from './conpoments/Register';
import ForgotPasswordPhone from './conpoments/ForgotPasswordPhone';
import ForgotPasswordOTP from './conpoments/ForgotPasswordOTP';
import './App.css';

function App() {
  return (
    <div className="App">
      <Register />
      <ForgotPasswordPhone />
      <ForgotPasswordOTP />
    </div>
  );
}

export default App;