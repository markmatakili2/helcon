import { useState } from 'react';
// import { helcon_backend } from 'declarations/helcon_backend';
import HomePage from './components/Homepage';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';

function App() {
  

  return (
  <Router>
    <Routes>
    <Route path="/" element={<HomePage />} />
    </Routes>
  </Router>
  );
}

export default App;
