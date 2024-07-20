import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/Homepage';
import About from './pages/About';
import Services from './pages/Services';
import Specialists from './pages/Specialists';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './components/PrivateRoutes';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/specialists" element={<Specialists />} />     
        <Route path="/dashboard" element={<PrivateRoute element={Dashboard} />} />
      </Routes>
    </Router>
  );
}

export default App;
