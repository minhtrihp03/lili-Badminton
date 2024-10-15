import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import '../styles/screens/CourtRegistrationList.css'; // Add your custom styles

const CourtRegistrationList = () => {
  const [courts, setCourts] = useState([]);  // State to store the list of courts
  const [loading, setLoading] = useState(true);  // Loading state
  const [error, setError] = useState(null);  // Error state

  // Function to fetch registered courts
  const fetchCourts = async () => {
    const token = localStorage.getItem('token');
  
    if (!token) {
      setError('Bạn cần đăng nhập để tải danh sách sân.');
      return;
    }
  
    try {
      const response = await fetch('https://bepickleball.vercel.app/api/post/futureApp', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        }
      });
  
      // Log the status for debugging
      console.log('Response status:', response);
  
      if (response.status === 404) {
        throw new Error('API endpoint not found (404). Check the URL.');
      }
  
      if (!response.ok) {
        console.error('Failed to fetch:', response.statusText);
        throw new Error('Failed to fetch registered courts');
      }
  
      const data = await response.json();
      setCourts(data);
    } catch (error) {
      setError('Có lỗi xảy ra khi tải danh sách sân.');
      console.error('Error:', error);  // Log error for debugging
    } finally {
      setLoading(false);
    }
  };
  

  // Fetch the courts when the component mounts
  useEffect(() => {
    fetchCourts();
  }, []);

  // Handle unregistering from the court
  const handleUnregister = async (courtId) => {
  //   if (!courtId) {
  //     console.error('Không có courtId để hủy đăng ký');
  //     return;
  //   }

  //   const confirmCancel = window.confirm('Bạn có chắc chắn muốn hủy đăng ký sân này?');
  //   if (!confirmCancel) return;

  //   const token = localStorage.getItem('token');
  //   if (!token) {
  //     alert('Bạn cần đăng nhập để thực hiện hành động này.');
  //     return;
  //   }

  //   try {
  //     const response = await fetch('https://bepickleball.vercel.app/api/post/futureApp', {
  //       method: 'GET',
  //       headers: {
  //         'Authorization': `Bearer ${token}`,
  //         'Content-Type': 'application/json',
  //       },
  //     });

  //     if (response.ok) {
  //       setCourts(courts.filter((court) => court._id !== courtId));  // Remove the court from the list
  //       alert('Đã hủy đăng ký sân thành công');
  //     } else {
  //       alert('Hủy đăng ký thất bại');
  //     }
  //   } catch (error) {
  //     console.error('Lỗi khi hủy đăng ký:', error);
  //     alert('Có lỗi xảy ra khi hủy đăng ký');
  //   }
  // };

  // if (loading) {
  //   return <div>Đang tải dữ liệu...</div>;  // Show loading message while fetching
  // }

  // if (error) {
  //   return <div>{error}</div>;  // Show error message if any
  }

  return (
    <div className="court-registration-list">
      <h4 style={{ paddingLeft: '10px' }}>Sân đã đăng ký</h4>

      <div className="court-items scrollable-list">
        {courts.map((court) => (
          <div key={court._id} className="court-item">
            <img 
              src={court.images[0] || '/assets/images/default-court.png'} 
              alt={court.court_name} 
              className="court-image" 
            />
            <div className="court-details">
              <p style={{ color: '#2D70A1' }}>{court.court_type}</p>
              <h5>{court.court_name}</h5>
              <p style={{ color: '#828282' }}>
                Vị trí: {court.location} - Thời gian: {court.play_date} ({court.play_time})
              </p>
              <p style={{ color: '#828282' }}>
                Người chơi yêu cầu: {court.players_needed}/{court.total_players} - Trình độ: {court.skill_level}
              </p>
              <p style={{ color: '#828282' }}>Chi phí: {court.cost}đ</p>
            </div>
            <div className="court-actions">
              <Button variant="danger" onClick={() => handleUnregister(court._id)}>Hủy đăng ký</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourtRegistrationList;
