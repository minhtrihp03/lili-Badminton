import React, {memo} from 'react';
import '../styles/screens/CoachComponent.css'; // Custom CSS for card styling
import { CiLocationOn } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';


const CoachComponent = memo(({ name, price, level, phone, image, contact, address, description }) => {
  const navigate = useNavigate();

  // Handle card click to navigate with coach details
  const handleCardClick = () => {
    navigate('/coach/coach-detail', {
      state: {
        name,
        price,
        level,
        phone,
        image,
        contact,
        address,
        description
      }
    });
  }  

  return (
    <div className="card coach-card" onClick={handleCardClick}>
      {/* Image at the top */}
      <img
        src={image}
        alt={`Coach ${name}`}
        className="card-img-top card-image"
      />

      <div className="card-body">
        <h5 className="card-title">{name}</h5>

        <p className="card-text" id='price-text'>
          {price} VND/buổi
        </p>

        <p className="card-text level-text" style={{ marginBottom: 0, padding: 0 }}>
          <CiLocationOn /> Khu vực: {address}
        </p>



        {/* <p className="card-text">
          <FaPhoneAlt /> SĐT: {phone}
        </p> */}

        {/* Contact buttons: Facebook and Zalo */}
        <div className="row contact-buttons">
          <div className="col">
            {/* <button className="btn btn-outline-primary contact-btn" style={{ color: "#3b5998", backgroundColor: "white", borderColor: "#3b5998" }}>
              <FaFacebook /> {contact?.facebook && (
                <a style={{ color: "black", textDecoration: "none" }} href={contact.facebook} target="_blank" rel="noopener noreferrer">
                  Facebook
                </a>
              )}
            </button> */}
            <button className="btn btn-outline-primary contact-btn" style={{ color: "#FFFFFF", backgroundColor: "#2D70A1", borderColor: "#2D70A1" }}>
               {contact?.facebook && (
                <a style={{ color: "#FFFFFF", textDecoration: "none" }} href="/coach/coach-detail" target="_blank" rel="noopener noreferrer">
                  Xem thông tin liên hệ
                </a>
              )}
            </button>
          </div>
          {/* <div className="col">
            <button className="btn btn-outline-primary contact-btn" style={{ color: "white", backgroundColor: "#3b5998", borderColor: "#3b5998" }}>
                <a href={`https://zalo.me/${phone}`} target="_blank" rel="noopener noreferrer" style={{ marginLeft: '5px', color: "white", textDecoration: "none" }}>
                  Xem thông tin liên hệ
                </a>
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
});

export default CoachComponent;
