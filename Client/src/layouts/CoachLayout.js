import React, { useState } from 'react';
import Header from '../components/Header';
import HomeComponent from '../components/HomeComponent';
import TrainerSearchFilter from '../components/TrainerSearchFilter';
import CoachListComponent from '../components/CoachListComponent';
import Footer from '../components/Footer';

const CoachLayout = () => {
  const [searchFilters, setSearchFilters] = useState({
    location: '',
    level: '',
    otherLocation: '',
  });

  const handleSearch = (filters) => {
    setSearchFilters(filters); // Update the search filters state
  };

  return (
    <div style={{ backgroundColor: "#F0F0F0" }}>
      <Header />
      <HomeComponent />
      <TrainerSearchFilter onSearch={handleSearch} />
      <CoachListComponent searchFilters={searchFilters} />
      <Footer />
    </div>
  );
};

export default CoachLayout;
