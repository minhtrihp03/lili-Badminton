import React from 'react';
import { FaFacebook, FaPhoneAlt, FaUserTie } from 'react-icons/fa';
import '../styles/screens/CoachComponent.css'; // Custom CSS for card styling
import { CiLocationOn } from "react-icons/ci";

const CoachComponent = ({ name, price, level, phone, image, contact, location }) => {
  return (
    <div className="card coach-card">
      {/* Image at the top */}
      <img
        src={image}
        alt={`Coach ${name}`}
        className="card-img-top card-image"
      />

      <div className="card-body">
        <h5 className="card-title">{name}</h5>

        <p className="card-text price-text">
          {price} VND/buổi
        </p>

        <div className="court-info-item">
                  <CiLocationOn className="icon" style={{ color: "#828282" }} /> 
                  <a
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "#828282" }}
                >
                  {location}
                </a>
                </div>

        {/* Contact buttons: Facebook and Zalo */}
        <div className="row contact-buttons">
          <div className="col">
            <button className="btn btn-outline-primary contact-btn" style={{ color: "white", backgroundColor: "#3b5998", borderColor: "#3b5998" }}>
                <a href={`https://zalo.me/${phone}`} target="_blank" rel="noopener noreferrer" style={{ marginLeft: '5px', color: "white", textDecoration: "none" }}>
                  Xem thông tin liên hệ
                </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoachComponent;
