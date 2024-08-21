import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Specialists from './components/common/Specialists';
import SignupForm from './components/common/SignupForm';
import DoctorDashboard from './components/users/Doctors/DoctorDasboard';
import DefaultPage from './components/users/Doctors/DefaultPage';
import PatientRecords from './components/users/Doctors/PatientRecords';
import Consults from './components/users/Doctors/Consults';
import { useFetchUserData } from './components/common/custom'
import GeneralProfile from './components/users/GeneralProfile'

function App() {
  const PrivateRoute = ({ element }) => {
    useFetchUserData()
    const { isRegistered, loading } = useSelector((state) => state.account.userData);
    return isRegistered ? (element) : (
      <Navigate to='/' replace />
    )

  }



  // if (loading) {
  //   return <div>Loading...</div>;
  // }


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Specialists />} />
        <Route path="/new-account" element={<SignupForm />} />
        <Route
          path="/doctors"
          element={<PrivateRoute element={<DoctorDashboard />} />}
        >
          <Route path="" element={<DefaultPage />} />
          <Route path="patient-records" element={<PatientRecords />} />
          <Route path="consults" element={<Consults />} />
          <Route path='my-account' element={<GeneralProfile />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
