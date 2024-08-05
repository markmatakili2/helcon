import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchDoctors } from './features/Doctors/doctorListSlice';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
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
import MyCalendar from './components/common/Calendar';
import DoctorDashboard from './components/users/Doctors/DoctorDasboard'
import DefaultPage from './components/users/Doctors/DefaultPage';
import PatientRecords from './components/users/Doctors/PatientRecords'
import Consults from './components/users/Doctors/Consults'


function App() {
  const PrivateRoute = ({ element }) => {

    const isAuthenticated = useSelector((state) => state.auth.authClient);
    const location = useLocation();

    return isAuthenticated ? (
      element
    ) : (
      <Navigate to="/" state={{ from: location }} replace />
    );
  };




  const dispatch = useDispatch()
  const { status, error } = useSelector((state) => state.doctorList)
  useEffect(() => {
    dispatch(fetchDoctors())
  }, [dispatch])
  if (status === 'loading') {
    return <div className="">loading ....</div>
  }

  if (status === 'failed') {
    return <div className="">{error}</div>
  }


  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/specialists" element={<Specialists />} />
        <Route path="/new-account" element={<PrivateRoute element={<SignupForm />} />} />

        <Route path="/home" element={<PrivateRoute element={<Dashboard />} />}>
          <Route path='' element={<MainDashboard />} />
          <Route path="profile" element={<ProfilePage />}>
            <Route path='' element={<GeneralProfile />} />
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
