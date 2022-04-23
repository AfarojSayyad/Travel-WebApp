import React from 'react';
import { Link, useParams } from 'react-router-dom';


import './Destination-details.css';
import {BeachImages} from '../../BeachDetails';
import { Button } from '../Button';


function BeachDetails() {
    // const {id} = useParams();
    const { id } = useParams();
       
       const result = BeachImages.find(items=>items.id==id);
       console.log({ result});
       
        return ( 
            <>
            {/* <h1>{id}</h1> */}
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
    
                    {/* <div className="page-container">
                    <div className='cards__container'>
                        <h1>{result2.text}</h1>
                        <img className = 'image'src={result2.url} height='400px' width='800px'/>
                        <p className='p-info'>{result2.Info}</p>
                        <Button className="btn"
                                buttonStyle="btn--outline"
                                buttonSize="btn--large">
                            {result2.label}
                        </Button>
                    </div>                
                </div> */}
                
    
            {/* <div>
                <h1>Waterfall Detail component here</h1>
                {/* <Link to={`waterfall/${Waterfall.id}`}></Link> */}
               {/*} <img src='https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' height='500px' width='500px'/>
                <Link to='/sign-up'>Book Now</Link>
            </div> */}
                    {/* {setid.id === '/waterfall/1'? (<div>
                    <h1>Waterfall Detail component here</h1>
                    <img src='https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' height='500px' width='500px'/>
                    </div>):(
                        <div>
                        <h1>Waterfall Detail component here***</h1>
                        <img src='https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' height='500px' width='500px'/>
                        </div>
                    )} */}
            
            </>
         );
}

export default BeachDetails;