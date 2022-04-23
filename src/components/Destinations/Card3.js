import React from 'react';
import '../Card.css';
import CardItem from '../CardItem';
import {WaterfallImages} from '../../WaterfallDetails';

// import {WaterfallImages2} from '../../WaterfallDetails';

function Card3() {
   
    // const result = data.find(({text})=> text==='1. Chitrakoot Falls, Chhattisgarh');
    // console.log(result)
    
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

                        {/* <ul className='cards__items'>
                            {
                                WaterfallImages2.map((item)=>{
                                    return <CardItem3 {...item}/>
                                })                           
                            }
                            
                        </ul> */}
                        
                        {/* <div className='text-container'> 
                            <h2 className='text1'>5. Jog Falls, Karnataka</h2>  
                            <h2 className='text3'>6. Nohkalikai Falls, Meghalaya</h2> 
                        </div> 
                        <ul className='cards__items'>
                            <CardItem3 
                                url="https://s3.india.com/travel/wp-content/uploads/2017/06/Jog-Falls.jpg"
                                text="The Jog falls are the second tallest segmented waterfalls in India, following the Nohsngithiang Falls(also known as the Seven sisters falls). A part of the Saravathi river, the Jog falls are a very important tourist destination in Uttara-Kannada, Karnataka"
                                label='book now'
                                path='/sign-up'
                            />
                            <CardItem3 
                                url='https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/NohKaLikai_Falls_V2_Wiki.jpg/750px-NohKaLikai_Falls_V2_Wiki.jpg'
                                text="This is the tallest plunge waterfall in India located in the East Khasi Hills of Meghalaya. There is a very gruesome story about the name of this waterfall and it will definitely give you the chills."
                                label='book now'
                                path='/sign-up'
                            />
                            
                        </ul>
                        <div className='text-container'> 
                            <h2 className='text1'>7. Hogenakkal Falls, Tamil Nadu</h2>  
                            <h2 className='text2'>8. Langshiang Falls</h2> 
                        </div> 
                        <ul className='cards__items'>
                            <CardItem3 
                                url="https://upload.wikimedia.org/wikipedia/commons/5/52/Hogenakkal_Falls_Close.jpg"
                                text="These waterfalls get the name Hogenakkal from hoge meaning smoke and kal meaning rock in Kannada, as it looks like there is smoke rising from the rocks. It is one of the most beautiful waterfalls in Tamil Nadu."
                                label='book now'
                                path='/sign-up'
                            />
                            <CardItem3 
                                url='https://www.tripiwiki.com/images/places/uploads/Langshiang-Falls52432.jpg'
                                text="These waterfalls located in Meghalaya are 1,106 ft in height. The Langshiang falls are the third highest falls in India, flowing from river Kynshi."
                                label='book now'
                                path='/sign-up'
                            />
                        </ul>     */}
                        
                    </div>
                </div>
            </div>
       
        </>
     );
}

export default Card3;