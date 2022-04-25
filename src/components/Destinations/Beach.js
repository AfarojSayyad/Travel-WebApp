import React from 'react';
import BeachCard from './BeachCard';

import './Destinations.css';
function Beach() {
    return ( <>
        <div className='beach'>
            <div className="hero-container">
                <video  width="250" height="50" autoPlay muted>
                <source src="https://firebasestorage.googleapis.com/v0/b/my-app-15b0a.appspot.com/o/Beach.mp4?alt=media&token=68e736ff-5374-4126-bac3-bf561b1e8c48" />
                    Your browser does not support the video tag.
                </video>
                <h1 className='waterfall-h1'>
                    Beach
                </h1>         
            </div>            
            <BeachCard/>
        </div>      
        </> 
        );
}

export default Beach;