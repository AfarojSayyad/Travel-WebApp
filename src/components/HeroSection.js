import React from "react";
import "../App.css";
import { Button } from "./Button";
//import ContactForm from "./ContactForm";
import "./HeroSection.css";

function HeroSection() {
  // url='https://www.pexels.com/video/person-on-a-cliff-overlooking-the-mountains-2040075/'

  return (
    <div className="hero-container">
      <video  width="320" height="240" autoPlay muted>
        <source src="https://firebasestorage.googleapis.com/v0/b/myapp-281407.appspot.com/o/Pexels%20Videos%202040075.mp4?alt=media&token=afa0f610-43ea-4d58-aca9-76d63ab09a82" />
        Your browser does not support the video tag.
      </video>
      <h1>ADVENTURE AWAITS</h1>
      <p>what are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>

        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button>
      </div>
      {/* <div >
        <Button className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          >
          Contact Form
          
        </Button>
      </div> */}
    </div>
  );
}

export default HeroSection;
