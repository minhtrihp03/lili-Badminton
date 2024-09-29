import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CourtDetailComponent from '../components/CourtDetailComponent';
import RelatedPostsComponent from '../components/RelatedPostsComponent';

const CourtDetailLayout = () => {
  const location = useLocation();
  const { court } = location.state; // Extract the court data from the state

  return (
    <div className="court-detail-layout">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="main-content">
        {/* Court Detail Component */}
        <CourtDetailComponent court={{ name: "Sân 286 Nguyễn Xiên", price: "100.000", slots: "6", location: "Hà Nội" }} />

        {/* Related Posts */}
        <RelatedPostsComponent />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CourtDetailLayout;
