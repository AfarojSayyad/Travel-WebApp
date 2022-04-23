import React from 'react';
import Card2 from '../Card2';
import Footer from '../Footer';
//import '../../App.css';
//import { Button } from "./Button";
//import "./HeroSection.css";
import "./Services.css";

export default function Services()
{
    return(
        <>
        <div className="hero-container">
        <video  width="320" height="240" autoPlay muted>
        <source src="https://firebasestorage.googleapis.com/v0/b/my-app-15b0a.appspot.com/o/video-4.mp4?alt=media&token=8ec23a8a-d528-4596-b92a-9590b6bc4260" />
        Your browser does not support the video tag.
      </video>
             {/* <video src='https://firebasestorage.googleapis.com/v0/b/my-app-15b0a.appspot.com/o/video-4.mp4?alt=media&token=8ec23a8a-d528-4596-b92a-9590b6bc4260' autoPlay loop muted /> */}
            <h1 className='services'>
                SERVICES
            </h1>          
            
      </div>
      <Card2/>
      <Footer/>
      
      </>
      /* <div >
        <Button className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          >
          Contact Form
          
        </Button>
      </div> */
    
    );
    
}