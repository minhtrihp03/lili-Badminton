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
import HomeComponent from './components/HomeComponent';
import CourtComponent from './components/CourtComponent';
import BookingComponent from './components/BookingComponent';
import CoachComponent from './components/CoachComponent';
import CoachListComponent from './components/CoachListComponent';
import CourtDetailComponent from './components/CourtDetailComponent';
import CourtListComponent from './components/CourtListComponent';
import DetailedFilterComponent from './components/DetailedFilterComponent';
import ParticipationComponent from './components/ParticipationComponent';
import PostFormComponent from './components/PostFormComponent';
import RelatedPostsComponent from './components/RelatedPostsComponent';
import SearchFilterComponent from './components/SearchFilterComponent';

function App() {
  return (
    <div className='App'>
      {/* <Router>
        <Routes>
          <Route path="/register" element={<AuthLayout><Register /></AuthLayout>} />
          <Route path="/forgot-password" element={<AuthLayout><ForgotPasswordPhone /></AuthLayout>} />
          <Route path="/forgot-password/otp" element={<AuthLayout><ForgotPasswordOTP /></AuthLayout>} />
          <Route path="/change-password" element={<AuthLayout><ChangePassword /></AuthLayout>} />
          <Route path="/login" element={<AuthLayout><Login /></AuthLayout>} />
          <Route path="/" element={<MainLayout></MainLayout>} />
        </Routes>
      </Router> */}

      <HomeComponent />
      <CourtComponent name="Sân 286 Nguyễn Xiên" price="100.000" slots="6/8" location="Hà Nội" />
      <BookingComponent />
      <CoachComponent name="Minh Trí" price="100.000" level="5.5" contact="Facebook" />
      <CoachListComponent />
      <CourtDetailComponent court={{ name: "Sân 286 Nguyễn Xiên", price: "100.000", slots: "6/8", location: "Hà Nội" }} />
      <CourtListComponent />
      <DetailedFilterComponent />
      <ParticipationComponent />
      <PostFormComponent />
      <RelatedPostsComponent />
      <SearchFilterComponent />
    </div>

  );
}

export default App;