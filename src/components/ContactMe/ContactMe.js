import React from "react";
import "./ContactMe.css";

const ContactMe = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="box">
          <h3>Pharmacy</h3>
          <ul className="social">
            <li>
              <span className="facebook">
                <i className="fab fa-facebook-f"></i>
              </span>
            </li>
            <li>
              <span className="whatsapp">
                <i className="fab fa-whatsapp"></i>
              </span>
            </li>
          </ul>
          <p className="text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
            nulla rem, dignissimos iste aspernatur
          </p>
        </div>
        <div className="box">
          <div className="line">
            <i className="fas fa-map-marker-alt fa-fw"></i>
            <div className="info">
              Egypt, Alexandria
            </div>
          </div>
          <div className="line">
            <i className="far fa-clock fa-fw"></i>
            <div className="info">Business Hours: From 10:00 To 18:00</div>
          </div>
          <div className="line">
            <i className="fas fa-phone-volume fa-fw"></i>
            <div className="info">
              <span>+20123456789</span>
              <span>+20198765432</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
