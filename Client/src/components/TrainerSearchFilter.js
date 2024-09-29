import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const TrainerSearchFilter = () => {
  const [trainerName, setTrainerName] = useState('');
  const [experienceLevel, setExperienceLevel] = useState('');
  const [filters, setFilters] = useState({
    trainerName: '',
    experienceLevel: '',
  });

  // Experience levels from 1 to 10
  const experienceLevels = Array.from({ length: 10 }, (_, index) => index + 1);

  const handleSearch = () => {
    // Handle the search logic here
    console.log('Searching for:', trainerName, 'Experience Level:', experienceLevel);
  };

  const handleReset = () => {
    setFilters({
        experienceLevel: '',
        trainerName: '',
    });
  };

  return (
    <div className="d-flex align-items-center justify-content-between p-3">
      <input
        type="text"
        placeholder="Huấn luyện viên gần bạn"
        value={trainerName}
        onChange={(e) => setTrainerName(e.target.value)}
        className="form-control me-2"
      />
      <select
        value={experienceLevel}
        onChange={(e) => setExperienceLevel(e.target.value)}
        className="form-select me-2"
      >
        <option value="">Trình độ của huấn luyện viên</option>
        {experienceLevels.map(level => (
          <option key={level} value={level}>Level {level}</option>
        ))}
      </select>
      <button
        onClick={handleSearch}
        className="btn btn-primary"
      >
        Tìm Kiếm
      </button>
      <button
        className="btn-sm" onClick={handleReset}
        variant="link"
      >
        xoá
      </button>
    </div>
  );
};

export default TrainerSearchFilter;
