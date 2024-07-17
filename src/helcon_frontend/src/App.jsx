import { useState } from 'react';
// import { helcon_backend } from 'declarations/helcon_backend';
import HomePage from './components/Homepage';
import Banner from './components/Banner';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import About from './pages/About';
import Services from './pages/Services'
import Specialists from './pages/Specialists';


function App() {
  

  return (
  <Router>
    <Routes>
    <Route path="/" element={<HomePage />}/>
    <Route path='/about-us' element={<About/>}/>
    <Route path='/services' element={<Services/>}/>
    <Route path='/specialists' element={<Specialists/>}/>
    </Routes>
  </Router>
  );
}

export default App;
