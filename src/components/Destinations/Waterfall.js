import React from 'react';
import Card3 from './Card3';
import './Destinations.css';

function Waterfall() {
    return ( 
        <>
        <div className='waterfall'>
            <div className="hero-container">
                <video  width="250" height="50" autoPlay muted>
                <source src="https://firebasestorage.googleapis.com/v0/b/my-app-15b0a.appspot.com/o/Waterfalls.mp4?alt=media&token=980a1cfc-9e29-46ba-9c94-2d884c454210" />
                    Your browser does not support the video tag.
                </video>
                {/* <video src='https://firebasestorage.googleapis.com/v0/b/my-app-15b0a.appspot.com/o/video-4.mp4?alt=media&token=8ec23a8a-d528-4596-b92a-9590b6bc4260' autoPlay loop muted /> */}
                <h1 className='waterfall-h1'>
                    Waterfall
                </h1>         
            </div>

            
            <Card3/>

            </div>
      
        </>
     );
}

export default Waterfall;