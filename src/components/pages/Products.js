import React from 'react';
import Card from '../Card';
import Footer from '../Footer';
// import '../../App.css';
import './Products.css';

export default function Products()
{
    return(
        <>
        <div className="hero-container">
        <video  width="320" height="240" autoPlay muted>
        <source src="https://firebasestorage.googleapis.com/v0/b/my-app-15b0a.appspot.com/o/Foggy%20Mountain.mp4?alt=media&token=ac021951-d414-4ab9-8e48-393f38569217" />
        Your browser does not support the video tag.
      </video>
             {/* <video src='https://firebasestorage.googleapis.com/v0/b/my-app-15b0a.appspot.com/o/video-4.mp4?alt=media&token=8ec23a8a-d528-4596-b92a-9590b6bc4260' autoPlay loop muted /> */}
            <h1 className='products'>
                PRODUCTS
            </h1>          
            
      </div>
      <Card/>
      <Footer/>
     
      
      </>
      
    
    );
    
}
