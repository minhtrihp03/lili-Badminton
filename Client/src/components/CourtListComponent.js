import React, { useState, useEffect } from 'react';
import { Row, Col, Spinner } from 'react-bootstrap';
import CourtComponent from './CourtComponent';
import Pagination from '@mui/material/Pagination'; 
import '../styles/screens/CourtListComponent.css'; 

const CourtListComponent = ({ filteredResults }) => {
  const [loading, setLoading] = useState(true); 
  const [page, setPage] = useState(1); 
  const itemsPerPage = 16; 
  const totalPages = Math.ceil(filteredResults.length / itemsPerPage); 

  useEffect(() => {
    setLoading(false); 
  }, [filteredResults]);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const startIndex = (page - 1) * itemsPerPage;
  const currentCourts = filteredResults.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="court-list-container">
      {loading ? (
        <div className="loading-spinner">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <>
          <Row style={{ padding: '20px' }}>
            {currentCourts.map((court, index) => (
              <Col key={index} md={3} style={{ padding: 0 }}>
                <CourtComponent
                  key={court._id}
                  name={court.court_address}
                  price={court.cost}
                  slots={court.total_players}
                  location={court.court_address}
                  type={court.court_type}
                  level={parseFloat(court.skill_level)}
                  image={court.images[0]}
                  players_needed={court.players_needed}
                  applied_players={court.applied_players}
                  time={court.time}
                />
              </Col>
            ))}
          </Row>

          <div className='pagination'>
            <Pagination
              count={totalPages} 
              page={page} 
              onChange={handlePageChange} 
              siblingCount={2} 
              boundaryCount={1} 
              variant="outlined" 
              shape="circular" 
              sx={{
                '& .MuiPaginationItem-root': {
                  borderRadius: '50%', 
                  margin: '0 5px', 
                  color: '#000', 
                  backgroundColor: '#fff', 
                  width: '30px', 
                  height: '43px', 
                  fontWeight: 600,
                  '&.Mui-selected': {
                    backgroundColor: '#2d70a1 !important', 
                    color: '#fff', 
                  },
                },
              }}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default CourtListComponent;
