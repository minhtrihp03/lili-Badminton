import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import CoachComponent from './CoachComponent';

const CoachListComponent = ({ searchFilters = { trainerName: '', experienceLevel: '' } }) => {
  const [coaches, setCoaches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch coach data from the API
  const fetchCoaches = async () => {
    try {
      const response = await fetch('https://bepickleball.vercel.app/api/coach/list');
      if (!response.ok) {
        throw new Error('Failed to fetch coaches');
      }
      const data = await response.json();
      setCoaches(data); // Ensure this data is in the correct format
    } catch (error) {
      console.error('Error fetching coaches:', error);
      setError('Có lỗi xảy ra khi tải dữ liệu.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCoaches();
  }, []);

  const filteredCoaches = coaches.filter((coach) => {
    // Ensure coach object is defined
    if (!coach) return false;

    // Ensure the properties we access exist
    const trainerName = searchFilters.trainerName?.toLowerCase() || '';
    const matchesName = coach.name?.toLowerCase().includes(trainerName) || false;

    // Check for the address to prevent errors
    const matchesLocation = coach.address 
      ? coach.address.toLowerCase().includes(trainerName)
      : false;

    // Check for experience level, if it exists
    const matchesLevel = searchFilters.experienceLevel 
      ? (coach.skill_level && parseFloat(coach.skill_level) === parseFloat(searchFilters.experienceLevel))
      : true;

    return (matchesName || matchesLocation) && matchesLevel;
  });

  if (loading) {
    return <div>Đang tải dữ liệu...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="coach-list ms-3" style={{ textAlign: 'center' }}>
      <h2 style={{ fontWeight: '600', margin: "50px 0 30px 0" }}>Huấn Luyện Viên</h2>

      <Row className="coach-list-row">
        {filteredCoaches.length > 0 ? (
          filteredCoaches.map((coach, index) => (
            <Col key={index} style={{ padding: 0 }}>
              <CoachComponent
                name={coach.name}
                price={coach.price_per_session.toLocaleString('vi-VN')}
                level={coach.rating} // Adjusted to use rating from API
                contact={coach.contact_info}
                phone={coach.contact_info?.phone} // Safely access phone
                image={coach.images[0]} // Access the first image from the array
                location={coach.address}
                style={{
                  width: "250px",
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: "center"
                }}
              />
            </Col>
          ))
        ) : (
          <p>Không tìm thấy huấn luyện viên nào.</p>
        )}
      </Row>
    </div>
  );
};

export default CoachListComponent;
