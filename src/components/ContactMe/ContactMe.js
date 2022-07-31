import React from "react";
import "./ContactMe.css";


const ContactMe = () => {
  return (
    <div className="parent">
      <section className="contact" id="contact">
        <div className="container">
          <div className="title">
            <h2 className="wow animate__animated animate__bounceIn animate__slow">
              About US
            </h2>
          </div>
          <div className="row wow animate__animated animate__fadeInUp animate__slow">
            <div className="contact-right">
              <div>
                <h2>Call Me</h2>
                <p className="text">+201157869779</p>
              </div>
              <div>
                <h2>Send Email</h2>
                <p className="text">yousefhassan121999@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactMe;
