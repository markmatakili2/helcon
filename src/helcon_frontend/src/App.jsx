import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/common/Homepage';
import About from './components/common/About';
import Services from './components/common/Services';
import Specialists from './components/common/Specialists';
// import PrivateRoute from './components/routes/PrivateRoutes';
import Dashboard from './components/users/Dashboard';
import ProfilePage from './components/users/Profile';
import MainDashboard from './components/users/MainDashboard';
import Consultation from './components/users/Consultation';
import GeneralProfile from './components/users/GeneralProfile'
import Document from './components/users/Document'
import SignupForm from './components/common/SignupForm'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/specialists" element={<Specialists />} />
        <Route path="/new-account" element={<SignupForm/>}/>
        <Route path="/home" element={<Dashboard />}>
          <Route path=''  element={<MainDashboard />} />
          <Route path="profile" element={<ProfilePage />}>
          <Route path='' element={<GeneralProfile/>}/>
          <Route path="consultation-history" element={<Consultation />} />
          <Route path="my-documents" element={<Document />} />
          </Route>
          {/* Uncomment and adjust the following routes as needed */}
          {/* <Route path="calendar" element={<CalendarPage />} />
          <Route path="help" element={<HelpPage />} /> */}
        </Route>
        {/* Uncomment and adjust the following route as needed */}
        {/* <Route path="/dashboard" element={<PrivateRoute element={Dashboard} />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
