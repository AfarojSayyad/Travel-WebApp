import React from 'react';
import BeachCard from './MountainsCard';

import './Destinations.css';
function Mountains() {
    return ( <>
        <div className='mountains'>
            <div className="hero-container">
                <video  width="250" height="50" autoPlay muted>
                <source src="https://firebasestorage.googleapis.com/v0/b/my-app-15b0a.appspot.com/o/Beach.mp4?alt=media&token=68e736ff-5374-4126-bac3-bf561b1e8c48" />
                    Your browser does not support the video tag.
                </video>
                {/* <video src='https://firebasestorage.googleapis.com/v0/b/my-app-15b0a.appspot.com/o/video-4.mp4?alt=media&token=8ec23a8a-d528-4596-b92a-9590b6bc4260' autoPlay loop muted /> */}
                <h1 className='waterfall-h1'>
                   Mountains
                </h1>         
            </div>

            
            <BeachCard/>

            </div>
      
        </> );
}

export default Mountains;