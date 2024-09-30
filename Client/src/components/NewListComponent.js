import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/screens/NewListComponent.css';

const newsList = [
  {
    id: 1,
    title: "Review sân Pickleball tại đường 123 Nguyễn Xiển xem thực hư...",
    date: "03 tháng 08 năm 2024",
    imageUrl: process.env.PUBLIC_URL + '/assets/images/new1.png', // replace with actual image paths
    description: "Sân chơi Pickleball Nguyễn Xiển...."
  },
  {
    id: 2,
    title: "Review sân Pickleball tại đường 286 Nguyễn Xiển xem thực hư...",
    date: "03 tháng 08 năm 2024",
    imageUrl: process.env.PUBLIC_URL + '/assets/images/new2.png',
    description: "Sân chơi Pickleball Nguyễn Xiển...."
  },
  {
    id: 3,
    title: "Review sân Pickleball tại đường 365 Nguyễn Xiển xem thực hư...",
    date: "03 tháng 08 năm 2024",
    imageUrl: process.env.PUBLIC_URL + '/assets/images/new3.png',
    description: "Sân chơi Pickleball Nguyễn Xiển...."
  },
  {
    id: 4,
    title: "Review sân Pickleball tại đường 987 Nguyễn Xiển xem thực hư...",
    date: "03 tháng 08 năm 2024",
    imageUrl: process.env.PUBLIC_URL + '/assets/images/new2.png',
    description: "Sân chơi Pickleball Nguyễn Xiển...."
  },
  {
    id: 5,
    title: "Review sân Pickleball tại đường 135 Nguyễn Xiển xem thực hư...",
    date: "03 tháng 08 năm 2024",
    imageUrl: process.env.PUBLIC_URL + '/assets/images/new1.png',
    description: "Sân chơi Pickleball Nguyễn Xiển...."
  }
];

const NewListComponent = () => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/news/${id}`);
  };

  return (
    <div className="news-list">
      <div className="news-cards">
        {newsList.map((news) => (
          <div
            key={news.id}
            className="news-card"
            onClick={() => handleClick(news.id)}
          >
            <img src={news.imageUrl} alt={news.title} className="news-image" />
            <div className="news-info">
              <p>{`T7 ngày ${news.date}`}</p>
              <h4>{news.title}</h4>
              <p>{news.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewListComponent;
