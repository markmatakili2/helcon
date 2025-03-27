import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAvailability } from "../../../features/Doctors/DoctorAvailability";
import { fetchPatientAppointments, confirmAppointment, deleteAppointment } from "../../../features/Doctors/Appointments";

const DefaultPage = () => {
  const dispatch = useDispatch();
  const { id } = useSelector((state) => state.account.userData.data);

  // Fetch appointments from Redux state
  const { appointments } = useSelector((state) => state.appointment);

  // Local state to track loading status for each appointment
  const [loadingStatus, setLoadingStatus] = useState({});
  const [deleteLoadingStatus, setDeleteLoadingStatus] = useState({});

  // Local state to track whether to show all appointments
  const [showAllAppointments, setShowAllAppointments] = useState(false);

  const pendingAppointments = appointments.filter(app => app.status === 'pending');
  const completedAppointments = appointments.filter(app => app.status === 'confirmed');

  useEffect(() => {
    if (id) {
      dispatch(fetchAvailability(id));
      dispatch(fetchPatientAppointments(id));
    }
  }, [dispatch, id]);

  // Function to handle confirming an appointment
  const handleConfirmAppointment = async (appointmentId) => {
    setLoadingStatus((prevState) => ({ ...prevState, [appointmentId]: true }));
    try {
      await dispatch(confirmAppointment(appointmentId)).unwrap();
    } finally {
      setLoadingStatus((prevState) => ({ ...prevState, [appointmentId]: false }));
    }
  };

  // Function to handle deleting an appointment
  const handleDeleteAppointment = async (appointmentId) => {
    setDeleteLoadingStatus((prevState) => ({ ...prevState, [appointmentId]: true }));
    try {
      await dispatch(deleteAppointment(appointmentId)).unwrap();
    } finally {
      setDeleteLoadingStatus((prevState) => ({ ...prevState, [appointmentId]: false }));
    }
  };

  // Function to render appointment cards
  const renderAppointmentCards = () => {
    if (!appointments || appointments.length === 0) {
      return <p className="text-gray-500">No upcoming appointments</p>;
    }

    // Determine which appointments to display
    const appointmentsToShow = showAllAppointments ? appointments : appointments.slice(-3)
     const newestAppointments = [...appointmentsToShow].reverse()

    return newestAppointments.map((appointment) => {
      let cardColor = '';
      if (appointment.status === 'cancelled') {
        cardColor = 'bg-red-100';
      } else if (appointment.status === 'pending') {
        cardColor = 'bg-yellow-100';
      } else if (appointment.status === 'confirmed') {
        cardColor = 'bg-green-100';
      }

      return (
        <div key={appointment.id} className={`${cardColor} p-4 rounded-md shadow-md mb-4`}>
          <p className="font-bold text-black mb-2">Appointment with {appointment.phone_no.split(",")[1]}</p>
          <div className="text-gray-700">
            <p>Status: {appointment.status}</p>
            <p>Symptoms: {appointment.symtoms}</p>
            <p>Type: {appointment.appointment_type}</p>
            <p>Time: {appointment.slot}</p>
            <p>Reason: {appointment.reason}</p>
          </div>
          {appointment.status === 'pending' && (
            <button
              className="mt-2 mr-4 bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 transition"
              onClick={() => handleConfirmAppointment(appointment.id)}
              disabled={loadingStatus[appointment.id]} // Disable only this button
            >
              {loadingStatus[appointment.id] ? 'Confirming...' : 'Confirm Appointment'}
            </button>
          )}
          <button
            className="mt-2 bg-red-500 text-white py-1 px-3 rounded hover:bg-blue-600 transition"
            onClick={() => handleDeleteAppointment(appointment.id)}
            disabled={deleteLoadingStatus[appointment.id]} // Disable only this button
          >
            {deleteLoadingStatus[appointment.id] ? 'Deleting...' : 'Delete'}
          </button>
        </div>
      );
    });
  };

  return (
    <div className="w-full p-4 lg:flex lg:space-x-6">
      <div className="lg:w-2/3 space-y-6">
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-blue-100 p-4 rounded-md shadow-md text-center">
            <h3 className="font-bold text-xl">Total Appointments</h3>
            <p className="text-2xl font-semibold">{appointments.length}</p>
          </div>
          <div className="bg-yellow-100 p-4 rounded-md shadow-md text-center">
            <h3 className="font-bold text-xl">Pending Appointments</h3>
            <p className="text-2xl font-semibold">{pendingAppointments.length}</p>
          </div>
          <div className="bg-green-100 p-4 rounded-md shadow-md text-center">
            <h3 className="font-bold text-xl">Completed Appointments</h3>
            <p className="text-2xl font-semibold">{completedAppointments.length}</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-md shadow-md">
          <h2 className="font-bold text-lg mb-4">Upcoming Appointments</h2>
          {renderAppointmentCards()}
          {appointments.length > 3 && (
            <button
              className="bg-primary_1 text-white py-1 px-3 rounded hover:bg-primary-dark transition"
              onClick={() => setShowAllAppointments(!showAllAppointments)} // Toggle the view
            >
              {showAllAppointments ? 'View Less Appointments' : 'View All Appointments'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default DefaultPage;
