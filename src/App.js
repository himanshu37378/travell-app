import React from 'react';
// import logo from './logo.svg';
import './App.css';

import About from './About.js';
import Pricing from './Pricing';
import Home from './Home.js';

import Services from './Services';
import Trips from './Trips';
import Shimla from './Shimla';
import Contact from './Contact';
import Peru from './Peru';  
import Machu from './Machu';  
import Egypt from './Egypt';  
import England from './England';  
import Italy from './Italy';  

import { Router, Routes, Route, Link } from 'react-router-dom';

function App() {



  return (
    
<>
  <Routes>
          <Route exact path='/' index element={<Home/>} /> 
          <Route path='/about' element={<About/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/Pricing' element={<Pricing/>} />
          <Route path='/Plans' element={<Pricing/>} />
          <Route path='/trips' element={<Trips/>} />
          <Route path='/Contact' element={<Contact/>} />
          <Route path='/Shimla' element={<Shimla/>} />
          <Route path='/peru' element={<Peru/>} />
          <Route path='/egypt' element={<Egypt/>} />
          <Route path='/england' element={<England/>} />
          <Route path='/italy' element={<Italy/>} />
          <Route path='/machu' element={<Machu/>} />
     </Routes>
     </>
     
  );
}



export default App;
