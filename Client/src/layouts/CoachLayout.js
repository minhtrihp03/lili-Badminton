import React, { useState } from 'react';
import Header from '../components/Header';
import HomeComponent from '../components/HomeComponent';
import TrainerSearchFilter from '../components/TrainerSearchFilter';
import CoachListComponent from '../components/CoachListComponent';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const CoachLayout = () => {
  const [searchFilters, setSearchFilters] = useState({
    trainerName: '',
    experienceLevel: '',
  });

  // Hàm để nhận thông tin tìm kiếm từ TrainerSearchFilter
  const handleSearch = (filters) => {
    setSearchFilters(filters); // Cập nhật bộ lọc tìm kiếm
  };

  return (
    <div style={{backgroundColor: "#F0F0F0"}}>
      <Header />
      <HomeComponent />
      {/* Truyền hàm handleSearch cho TrainerSearchFilter */}
      <TrainerSearchFilter onSearch={handleSearch} />
      {/* Truyền searchFilters cho CoachListComponent */}
      <CoachListComponent searchFilters={searchFilters} />
      <Link to={'/coach'} style={{padding: "10px 0", textDecoration: "none", color: "gray"}}>Xem thêm</Link>
      <Footer />
    </div>
  );
};

export default CoachLayout;
