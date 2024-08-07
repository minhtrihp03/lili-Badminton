import React from 'react';
import Register from './components/Register';
import ForgotPasswordPhone from './components/ForgotPasswordPhone';
import ForgotPasswordOTP from './components/ForgotPasswordOTP';
import ChangePassword from './components/ChangePassword';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import AuthLayout from './layouts/AuthLayout';
import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/register" element={<AuthLayout><Register /></AuthLayout>} />
          <Route path="/forgot-password" element={<AuthLayout><ForgotPasswordPhone /></AuthLayout>} />
          <Route path="/forgot-password/otp" element={<AuthLayout><ForgotPasswordOTP /></AuthLayout>} />
          <Route path="/change-password" element={<AuthLayout><ChangePassword /></AuthLayout>} />
          <Route path="/login" element={<AuthLayout><Login /></AuthLayout>} />
          <Route path="/" element={<MainLayout></MainLayout>} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;