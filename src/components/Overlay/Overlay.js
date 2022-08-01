import "./Overlay.css";
import React from "react";

const Overlay = () => {
  return (
    <div className="parent">
      {/* <!-- Start Header --> */}
      <header className="header" id="intro">
        <div className="hero-div center container">
          <h1>
            Welcome to our pharmacy suit <br></br>
            <span>
              Pharmacy is a profession and not just the place of employment
              where you just show up and serve patients
            </span>
          </h1>
          <p className="animate__animated animate__fadeInUp animate__slow"></p>
        </div>
      </header>
      {/* <!-- End Header --> */}
    </div>
  );
};

export default Overlay;
