import React from "react";
import "../App.css";
import "./HeroSection.css";

function HeroSection() {

  return (
    <div className="hero-container">
        <video  width="320" height="240" autoPlay muted>
          <source src="https://firebasestorage.googleapis.com/v0/b/myapp-281407.appspot.com/o/Pexels%20Videos%202040075.mp4?alt=media&token=afa0f610-43ea-4d58-aca9-76d63ab09a82" />
          Your browser does not support the video tag.
        </video>
        <h1>ADVENTURE AWAITS</h1>
        <p>what are you waiting for?</p>
    </div>
  );
}

export default HeroSection;
