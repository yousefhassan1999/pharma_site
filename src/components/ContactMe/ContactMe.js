import React from "react";
import "./ContactMe.css";
import Container from "react-bootstrap/Container";

const ContactMe = () => {
  return (
    <div id="parent">
      <Container>
        <div className="about-section">
          <div className="inner-container">
            <h1>About Us</h1>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              velit ducimus, enim inventore earum, eligendi nostrum pariatur
              necessitatibus eius dicta a voluptates sit deleniti autem error
              eos totam nisi neque voluptates sit deleniti autem error eos totam
              nisi neque.
            </p>
            <div className="skills">
              <span><i className="fa-brands fa-whatsapp"></i></span>
              <span><i className="fa-solid fa-envelope"></i></span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactMe;
