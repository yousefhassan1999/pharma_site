import "./Overlay.css";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Overlay = () => {
  const scrollDown = () =>{
    window.scrollTo(0, 800)
  }
  return (
    <div className="parent">
      <header className="header" id="intro">
        <div className="hero-div center container">
          <h1>
            Welcome to our pharmacy suit <br></br>
            <span>
              <Typewriter
                words={[
                  "Pharmacy is a profession and not just the place of employment where you just show up and serve patients",
                ]}
                loop={5}
                cursor
                cursorStyle="_"
                typeSpeed={40}
                deleteSpeed={50}
                delaySpeed={3000}
              />
            </span>
          </h1>
        </div>
      </header>
      <span  className="go_down" onClick={scrollDown}>
        <i className="fas fa-angle-double-down fa-2x"></i>
      </span>
    </div>
  );
};

export default Overlay;
