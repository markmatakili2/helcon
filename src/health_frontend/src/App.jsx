import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./components/HomePage";
import UserHome from "./components/Users/Home";
import UserDashboard from "./components/Users/Dashboard";
import UserData from "./components/Users/UserData";
import UserAppointments from "./components/Users/Appointments";
import UserEvents from "./components/Users/Events";
import UserMessages from "./components/Users/Message";
import UserReminders from "./components/Users/Reminders";
import NewAppointment from "./components/Users/NewAppointment";
import NewEvent from "./components/Users/NewEvent";
import LoginForm from "./components/LoginForm";
import DoctorHomePage from "./components/Doctors/Home";
import ScheduledAppointments from "./components/Doctors/ScheduledRequests";
import CreateReportForm from "./components/Doctors/CreateReport";
import BasicDataForm from "./components/Doctors/BasicData";
import QueryDataForm from "./components/Doctors/QueryData";
import UserProfile from "./components/Doctors/UserProfile";
import Requests from "./components/Doctors/Requests";
import myProfile from "./components/Users/UserProfile";
import Register from "./components/Register";
// import { isAuthenticated } from "./components/Auth/auth";
// import { useState } from "react";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<Register />} />

        <Route path="/patient/" element={<UserHome />}>
          <Route index element={<UserDashboard />} />
          <Route path="/patient/user-info" element={<UserData />} />
          <Route path="/patient/appointments" element={<UserAppointments />} />
          <Route path="/patient/events" element={<UserEvents />} />
          <Route path="/patient/messages" element={<UserMessages />} />
          <Route path="/patient/reminders" element={<UserReminders />} />
          <Route path="/patient/profile" element={<myProfile />} />
        </Route>
        <Route path="/doctor/" element={<DoctorHomePage />}>
          <Route index element={<Requests />} />
          <Route path="scheduled-requests" element={<ScheduledAppointments />} />
          <Route path="create-report" element={<CreateReportForm />} />
          <Route path="basic-data" element={<BasicDataForm />} />
          <Route path="query-data" element={<QueryDataForm />} />
          <Route path="profile" element={<UserProfile />} />
        </Route>
        <Route path="/new-appointment" element={<NewAppointment />} />
        <Route path="/create-event" element={<NewEvent />} />
      </Routes>
    </Router>
  );
}

export default App;
