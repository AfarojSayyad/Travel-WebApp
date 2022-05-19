import React from 'react';
import CardItem from './CardItem2';
import './Card2.css';
function Card2() {
    const data1 =[
        {
            url:'https://images.pexels.com/photos/4553618/pexels-photo-4553618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            text:"Go on a road Trip",
            label:'Adventure',
            path:'/services',
        },
        {
            url:"https://images.pexels.com/photos/3193318/pexels-photo-3193318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            text:"By Train",
            label:'Adventure',
            path:'/services'
        },
        {
            url:"https://images.pexels.com/photos/2253644/pexels-photo-2253644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            text:"By Flight",
            label:'Luxury',
            path:'/services'
        }
    ]
    const data2 = [
        {
            url:"https://images.pexels.com/photos/756024/pexels-photo-756024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            text:"A guide",
            label:'Adventure',
            path:'/services'
        },
        {
            url:'https://media.istockphoto.com/photos/tourist-studying-map-picture-id91814300?s=612x612',
            text:"Guide book",
            label:'Guide book',
            path:'/services'
        }
    ]
    const data3 =[
        {
            url:"https://images.pexels.com/photos/4825701/pexels-photo-4825701.jpeg",
            text:"Explore the Adventurous stay inside adventurous destination",
            label:'Adventure',
            path:'/services'
        },
        {
            url:'https://images.pexels.com/photos/2901215/pexels-photo-2901215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            text:"Enjoy Luxurious stay",
            label:'Luxury',
            path:'/services'
        },
        {
            url:"https://images.pexels.com/photos/10854326/pexels-photo-10854326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            text:"Enjoy local stay",
            label:'Local Stay',
            path:'/services'
        }
    ]
   
    return ( 
        
        <>
        <div className='cards'>
                <h1>Check out these Services!!!</h1>
                <div className='cards__container'>
                    <div className='cards__wrapper'>
                    
                        <h2>Travel Through</h2>
                        <ul className='cards__items'>
                            {
                                data1.map((item) =>
                                {
                                    return <CardItem {...item}/>
                                })
                            }
                            
                        </ul>

                        <h2>Travel With</h2>
                        <ul className='cards__items'>
                        {
                                data2.map((item) =>
                                {
                                    return <CardItem {...item}/>
                                })
                            }                            
                        </ul>

                        <h2>Stay</h2>
                        <ul className='cards__items'>
                        {
                                data3.map((item) =>
                                {
                                    return <CardItem {...item}/>
                                })
                        }  
                            
                        </ul>
                    </div>
                </div>
            </div>
       
        </>
     );
}

export default Card2;