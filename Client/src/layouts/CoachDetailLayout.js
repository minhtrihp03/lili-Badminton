import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CoachDetailComponent from '../components/CoachDetailComponent';
// import RelatedPostsComponent from '../components/RelatedPostsComponent';
import HomeComponent from '../components/HomeComponent';
// import "../styles/layouts/CoachDetailLayout.css";

const CoachDetailLayout = () => {
  const location = useLocation();
  const { Coach } = location.state; // Extract the Coach data from the state

  return (
    <div className="Coach-detail-layout" style={{ backgroundColor: "#F0F0F0" }}>
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="main-content">

        <HomeComponent />
        <div className='main-detail-Coach'>
          {/* Coach Detail Component */}
          <CoachDetailComponent Coach={{ name: "Sân 286 Nguyễn Xiên", price: "100.000", slots: "6", location: "Hà Nội" }} />

          {/* Related Posts */}
          {/* <RelatedPostsComponent /> */}
        </div>

      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CoachDetailLayout;
