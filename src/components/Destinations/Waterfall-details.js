import React,{useState} from 'react';

// import Card3 from './Card3';

import { Link, useParams } from 'react-router-dom';


import './Destination-details.css';
import {WaterfallImages} from '../../WaterfallDetails';
import { Button } from '../Button';



 function WaterfallDetails(props) {
    const { id } = useParams();
    
//     const [ setid]=useState({
//         id:null
//     })
    // getPageInfo = async () =>
    // {
        // const {id} = this.props.match;
    //     return fetch(`http://localhost:3000/waterfall/${id}`).then(resp =>resp.json())
    // };
   
   const result = WaterfallImages.find(item=>item.id==id);
   console.log({ result});
   

//    const result2 = WaterfallImages2.find(item=>item.id==id2);
//    console.log({ result2});
//    console.log(result);
        // const result = Card3.data.find(({text})=> text==='1. Chitrakoot Falls, Chhattisgarh');
        // console.log(result)
  
//   console.log(result) 
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

export default WaterfallDetails;