import React from 'react';
import { FaFacebook, FaPhoneAlt, FaUserTie } from 'react-icons/fa';
import '../styles/screens/CoachComponent.css'; // Custom CSS for card styling

const CoachComponent = ({ name, price, level, phone }) => {
  return (
    <div className="card coach-card">
      {/* Zalo Button at the top right */}
      <button className="btn btn-light zalo-btn">
        Zalo
      </button>

      {/* Image at the top */}
      <img
        src={process.env.PUBLIC_URL + '/assets/images/coach1.png'}
        alt={`Coach ${name}`}
        className="card-img-top card-image"
      />

      <div className="card-body">
        <h5 className="card-title">{name}</h5>

        <p className="card-text">
          <FaUserTie /> Trình độ: {level}
        </p>

        <p className="card-text price-text">
          {price} VND/buổi
        </p>

        <p className="card-text">
          <FaPhoneAlt /> SĐT: {phone}
        </p>

        {/* Contact buttons: Facebook and Zalo */}
        <div className="row contact-buttons">
          <div className="col">
            <button className="btn btn-outline-primary contact-btn">
              <FaFacebook /> Facebook
            </button>
          </div>
          <div className="col">
            <button className="btn btn-outline-primary contact-btn">
              <FaPhoneAlt /> Zalo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoachComponent;
