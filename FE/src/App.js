import React from 'react';
import Register from './conpoments/Register';
import ForgotPasswordPhone from './conpoments/ForgotPasswordPhone';
import ForgotPasswordOTP from './conpoments/ForgotPasswordOTP';
import ChangePassword from './conpoments/ChangePassword';
import Login from './conpoments/Login';
import Header from './conpoments/Header';
import Footer from './conpoments/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Register />
      <ForgotPasswordPhone />
      <ForgotPasswordOTP />
      <ChangePassword />
      <Login />
      <Footer />
    </div>
  );
}

export default App;