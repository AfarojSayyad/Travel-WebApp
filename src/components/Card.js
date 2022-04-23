import React from 'react';
import CardItem from './CardItem';
import './Card.css';
import {HomePageSection1} from '../../src/constant';

function Card() {
    return ( 
            <div className='cards'>
                <h1>Check out these Epic Destination!!!</h1>
                <div className='cards__container'>
                    <div className='cards__wrapper'>
                        <ul className='cards__items'>
                            {
                                HomePageSection1.map((item) => {
                                    return <CardItem {...item}/>
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
       
     );
}

export default Card;