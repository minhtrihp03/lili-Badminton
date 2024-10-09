import React from 'react';
import Header from '../components/Header'; // Import Header component
import HomeComponent from '../components/HomeComponent'; // Import HomeComponent
import ParticipationComponent from '../components/ParticipationComponent'; // Import ParticipationComponent
import CoachListComponent from '../components/CoachListComponent'; // Import CoachListComponent
import Footer from '../components/Footer'; // Import Footer component
import NewsComponent from '../components/NewsComponent';
import { Link } from 'react-router-dom';

const HomeLayout = () => {
  return (
    <div className="home-layout" style={{ backgroundColor: "#F0F0F0" }}>
      {/* Header Section */}
      <Header />

      {/* Main Content */}
      <div className="content-container">
        <div className="main-content">
          {/* Home Component */}
          <div>
            <HomeComponent />
          </div>

          <div id='body-home'>
            {/* Participation Section */}
            <ParticipationComponent />

            {/* Coach List Section */}
            <CoachListComponent />

            <Link
              to="/coach"
              style={{
                textDecoration: 'none',
                color: "#828282",
                display: window.innerWidth <= 430 ? 'none' : 'block' // Kiểm tra kích thước màn hình
              }}
            >
              Xem thêm
            </Link>

            {/* News Section */}
            <NewsComponent />
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default HomeLayout;
