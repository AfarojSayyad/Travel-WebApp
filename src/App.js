import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Waterfall from './components/Destinations/Waterfall';
import WaterfallDetails from './components/Destinations/Waterfall-details';
import Beach from './components/Destinations/Beach';
import BeachDetails from './components/Destinations/Beach-details';
import Mountains from './components/Destinations/Mountains';
import MountainDetails from './components/Destinations/Mountains-details';

//child routing elements
// Waterfall from './components/Waterfall';


function App() {
  return (
    <>
      
      <Router>
        <Navbar/>        
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/services' element={<Services/>}/>
            <Route path='/products' element={<Products/>}/>
            <Route path='/sign-up' element={<SignUp/>}/>
            {/* child routing */}
            <Route path='/waterfall' element={<Waterfall/>}/>
            <Route path='/waterfall/:id' element={<WaterfallDetails/>}/>
            
            {/* <Route path='/waterfall' element={<Waterfall/>}/> */}
            <Route path='/beach' element={<Beach/>}/>
            <Route path='/beach/:id' element={<BeachDetails/>}/>

            <Route path='/mountains' element={<Mountains/>}/>
            
            <Route path='/mountains/:id' element={<MountainDetails/>}/>
            
        </Routes>

      </Router>


    </>
  );
}

export default App;
