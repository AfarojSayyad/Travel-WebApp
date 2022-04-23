import React from 'react';
// import './Card3.css';
import CardItem from '../CardItem';


// import {WaterfallImages2} from '../../WaterfallDetails';
import {MountainImages} from '../../MountainDetails';
function BeachCard() {
   
    // const result = data.find(({text})=> text==='1. Chitrakoot Falls, Chhattisgarh');
    // console.log(result)
    
    return ( 
        <>
        <div className='cards'>
                <h1>Check out these Epic Beach Destinations!!!</h1>
                <div >
                    <div className='cards__wrapper'>
                    
                        <ul className='cards__items'>
                            {
                                MountainImages.map((items)=>{
                                    return <CardItem {...items} 
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

export default BeachCard;