import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import CoachComponent from './CoachComponent';

const CoachListComponent = ({ searchFilters }) => {
  const [coaches, setCoaches] = useState([]);

  const fetchCoaches = async () => {
    try {
      const response = await fetch('https://bepickleball.vercel.app/api/coach/list');
      const data = await response.json();
      setCoaches(data);
    } catch (error) {
      console.error('Error fetching coaches:', error);
    }
  };

  useEffect(() => {
    fetchCoaches();
  }, []);

  const filteredCoaches = coaches.filter((coach) => {
    const matchesName = searchFilters.trainerName
      ? coach.name.toLowerCase().includes(searchFilters.trainerName.toLowerCase())
      : true;

    const matchesLocation = searchFilters.location && searchFilters.location !== 'Other'
      ? coach.address && coach.address.includes(searchFilters.location) // Ensure coach.address is defined
      : searchFilters.otherLocation
      ? coach.address && coach.address.includes(searchFilters.otherLocation) // Ensure coach.address is defined
      : true;

    const matchesLevel = searchFilters.level
      ? parseFloat(coach.skill_level) === parseFloat(searchFilters.level)
      : true;

    return matchesName && matchesLocation && matchesLevel;
  });

  return (
    <div className="coach-list">
      <h2>Huấn Luyện Viên</h2>
      <Row>
        {filteredCoaches.map((coach, index) => (
          <Col key={index}>
            <CoachComponent
              name={coach.name}
              price={coach.price_per_session.toLocaleString('vi-VN')}
              level={coach.rating}
              contact={coach.contact_info}
              phone={coach.contact_info.phone}
              image={coach.profile_image_url}
              location={coach.address}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CoachListComponent;
