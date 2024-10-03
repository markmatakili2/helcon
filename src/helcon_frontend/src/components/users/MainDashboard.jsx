import React, { useState } from 'react';
import { FaBell } from 'react-icons/fa';
import { FaUserCircle } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux';
import Banner from '../common/Banner';
import MyCalendar from '../common/Calendar';
import Modal from './Modal';
import ProfileCard from '../common/Doctor_profile';
import AppointmentList from './AppointmentList';  
import { fetchPatientAppointments } from "../../features/Patient/AppointmentSlice";
import BookingCard from "./Booking"

const MainDashboard = () => {
  const dispatch = useDispatch();
  const {toNum,username } = useSelector((state) => state.account.userData.data);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  // Dispatching action to fetch appointments when component mounts
  React.useEffect(() => {
    dispatch(fetchPatientAppointments(toNum)); // Fetch appointments
  }, [dispatch]);

  return (
    <div className="min-h-screen p-4 flex flex-col space-y-4 w-full">
      <div className="flex justify-between items-center mb-8 mt-4">
        <div>
          <p className="text-gray-600">Hi, {username}</p>
          <h1 className="text-2xl font-bold text-black">Welcome Back</h1>
        </div>
        <div className="flex items-center space-x-4  ">
          <FaBell className="text-xl text-gray-700" />
          <FaUserCircle className="text-2xl ml-4" />
          <p className="-mr-10">Kevin</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-1 w-full gap-3 lg:grid-cols-3">
        <div className="lg:col-span-2 w-full">
          <Banner />
        </div>
        <div className="lg:col-span-1 bg-white rounded-lg border border-gray-300 shadow-lg">
          <div className="flex justify-between items-center mb-4 md:p-4 lg:p-auto">
            <h2 className="text-md font-bold text-primary">Upcoming Appointments</h2>
            <button className="bg-primary_1 text-white py-1 px-3 rounded hover:bg-primary-dark transition">
              View All
            </button>
          </div>
          <div className="md:w-4/5 lg:w-auto md:ml-20 lg:ml-0 md:p-4 lg:p-auto">
            <MyCalendar />
          </div>
        </div>
      </div>

      {/* Appointment Cards */}
      <AppointmentList />

      {/* Profile Card */}
      <div className="w-full">
        <ProfileCard handleOpenModal={handleOpenModal} />
      </div>

      {/* Modal integration */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <BookingCard handleCloseModal={handleCloseModal} />
      </Modal>
    </div>
  );
};

export default MainDashboard;
