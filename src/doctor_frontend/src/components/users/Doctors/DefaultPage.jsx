import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAvailability } from "../../../features/Doctors/DoctorAvailability";
import { fetchPatientAppointments } from "../../../features/Doctors/Appointments";

const DefaultPage = () => {
  const dispatch = useDispatch();
  const { id } = useSelector((state) => state.account.userData.data);

  // Fetch appointments from Redux state
  const {appointments} = useSelector((state) => state.appointment);
  
  // Filtered appointments based on status
  const pendingAppointments = appointments.filter(app => app.status === 'pending');
  const completedAppointments = appointments.filter(app => app.status === 'completed');

  useEffect(() => {
    if (id) {
      dispatch(fetchAvailability(id));
      dispatch(fetchPatientAppointments(id));
    }
  }, [dispatch, id]);

  // Function to render appointment cards
  const renderAppointmentCards = () => {
    if (!appointments || appointments.length === 0) {
      return <p className="text-gray-500">No upcoming appointments</p>;
    }

    return appointments.slice(0, 3).map((appointment, index) => (
      <div key={index} className="bg-gray-100 p-4 rounded-md shadow-md mb-4">
        <p className="font-bold text-black mb-2">Appointment with {appointment.patient_name}</p>
        <div className="text-gray-700">
          <p>Status: {appointment.status}</p>
          <p>Symptoms: {appointment.symtoms}</p>
          <p>Type: {appointment.appointment_type}</p>
          <p>Slot: {appointment.slot}</p>
          <p>Reason: {appointment.reason}</p>
        </div>
      </div>
    ));
  };

  return (
    <div className="p-4 lg:flex lg:space-x-6">
      
      {/* Summary Section */}
      <div className="lg:w-2/3 space-y-6">
        <div className="grid grid-cols-3 gap-4">
          {/* Total Appointments */}
          <div className="bg-blue-100 p-4 rounded-md shadow-md text-center">
            <h3 className="font-bold text-xl">Total Appointments</h3>
            <p className="text-2xl font-semibold">{appointments.length}</p>
          </div>
          {/* Pending Appointments */}
          <div className="bg-yellow-100 p-4 rounded-md shadow-md text-center">
            <h3 className="font-bold text-xl">Pending Appointments</h3>
            <p className="text-2xl font-semibold">{pendingAppointments.length}</p>
          </div>
          {/* Completed Appointments */}
          <div className="bg-green-100 p-4 rounded-md shadow-md text-center">
            <h3 className="font-bold text-xl">Completed Appointments</h3>
            <p className="text-2xl font-semibold">{completedAppointments.length}</p>
          </div>
        </div>

        {/* Upcoming Appointments */}
        <div className="bg-white p-6 rounded-md shadow-md">
          <h2 className="font-bold text-lg mb-4">Upcoming Appointments</h2>
          {renderAppointmentCards()}

          {/* Button to view all appointments */}
          {appointments.length > 3 && (
            <button className="bg-primary_1 text-white py-1 px-3 rounded hover:bg-primary-dark transition">
              View All Appointments
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default DefaultPage;
