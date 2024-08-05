import React from 'react';
import Register from './components/Register';
import ForgotPasswordPhone from './components/ForgotPasswordPhone';
import ForgotPasswordOTP from './components/ForgotPasswordOTP';
import ChangePassword from './components/ChangePassword';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Header />
      <Router>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPasswordPhone />} />
          <Route path="/forgot-password/otp" element={<ForgotPasswordOTP />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
      <Footer />
    </div>

  );
}

export default App;