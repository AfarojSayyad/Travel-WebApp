import React from 'react';
import '../Card.css';
import CardItem from '../CardItem';
import {WaterfallImages} from '../../WaterfallDetails';

function Card3() {
    return ( 
        <>
        <div className='cards'>
                <h1>Check out these Epic Destinations!!!</h1>
                <div >
                    <div className='cards__wrapper'>
                    
                        <ul className='cards__items'>
                            {
                                WaterfallImages.map((item)=>{
                                    return <CardItem {...item} 
                                    />
                                })                           
                            }                            
                        </ul>                        
                    </div>
                </div>
            </div>
       
        </>
     );
}

export default Card3;