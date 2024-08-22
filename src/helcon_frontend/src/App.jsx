import { useDispatch, useSelector } from 'react-redux';
import { useFetchUserData } from './features/custom'
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import HomePage from './components/common/Homepage';
import About from './components/common/About';
import Services from './components/common/Services';
import Specialists from './components/common/Specialists';
import Dashboard from './components/users/Dashboard';
import ProfilePage from './components/users/Profile';
import MainDashboard from './components/users/MainDashboard';
import Consultation from './components/users/Consultation';
import GeneralProfile from './components/users/GeneralProfile';
import Document from './components/users/Document';
import SignupForm from './components/common/SignupForm';
import MyCalendar from './components/common/Calendar';
import ProtectedRoute from './components/routes/PrivateRoutes';

function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/specialists" element={<Specialists />} />
        <Route path="/new-account" element={<SignupForm />} />
         <Route path="/home" element={ <ProtectedRoute element={<Dashboard  />}/>}>
          <Route path="" element={<MainDashboard />} />
          <Route path="profile" element={<ProfilePage />} >
            <Route index element={<GeneralProfile />} />
            <Route path="consultation-history" element={<Consultation />} />
            <Route path="my-documents" element={<Document />} />
          </Route>
          <Route path="calendar" element={<MyCalendar />} />
        </Route> 
      </Routes>
    </Router>
  );
}

export default App;
