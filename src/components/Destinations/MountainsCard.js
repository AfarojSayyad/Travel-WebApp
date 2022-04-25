import React from 'react';
import CardItem from '../CardItem';
import {MountainImages} from '../../MountainDetails';

function BeachCard() {
    
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