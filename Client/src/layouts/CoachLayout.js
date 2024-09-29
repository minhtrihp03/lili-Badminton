import React from 'react';
import Header from '../components/Header';
import HomeComponent from '../components/HomeComponent';
import TrainerSearchFilter from '../components/TrainerSearchFilter';
import CoachListComponent from '../components/CoachListComponent';
import Footer from '../components/Footer';

const CoachLayout = () => {
  return (
    <div>
      <Header />
      <HomeComponent />
      <TrainerSearchFilter />
      <CoachListComponent />
      <Footer />
    </div>
  );
};

export default CoachLayout;
