import React from 'react';

import { Link, useParams } from 'react-router-dom';


import './Destination-details.css';
import {WaterfallImages} from '../../WaterfallDetails';
import { Button } from '../Button';



 function WaterfallDetails(props) {
    const { id } = useParams();
    
   const result = WaterfallImages.find(item=>item.id==id);
   console.log({ result});
   
    return ( 
        <>
            <div className="page-container">
                <div className='cards__container'>
                    <h1>{result.text}</h1>
                    <img className = 'image'src={result.url} height='400px' width='800px'/>
                    <p className='p-info'>{result.Info}</p>
                    <Button className="btn"
                            buttonStyle="btn--outline"
                            buttonSize="btn--large">
                        {result.btn}
                    </Button>
                    
                </div>
            </div>  
        
        </>
     );
}

export default WaterfallDetails;