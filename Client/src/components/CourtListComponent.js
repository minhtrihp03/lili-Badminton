import React from 'react';
import CourtComponent from './CourtComponent';

const CourtListComponent = () => {
  const courts = [
    { name: "Sân 286 Nguyễn Xiển", price: "100.000", slots: "6/8", location: "Hà Nội" },
    { name: "Sân có mái che 2.5", price: "120.000", slots: "7/8", location: "Hà Nội" },
    { name: "Sân không mái che", price: "100.000", slots: "0/8", location: "Hà Nội" },
  ];

  return (
    <div className="court-list">
      <h2>Danh sách sân Pickleball</h2>
      {courts.map((court, index) => (
        <CourtComponent 
          key={index} 
          name={court.name} 
          price={court.price} 
          slots={court.slots} 
          location={court.location} 
        />
      ))}
    </div>
  );
}

export default CourtListComponent;
