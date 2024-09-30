import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import AppointmentCard from './AppointmentCard';

const AppointmentList = () => {
  const {appointments} = useSelector((state) => state.appointments); // Fetch appointments from Redux state
  const [showAll, setShowAll] = useState(false); // State to manage "View All" button

  
  const visibleAppointments = showAll ? appointments : appointments.slice(0, 3);

  return (
    <div className="space-y-4">
      {visibleAppointments.map((appointment) => (
        <AppointmentCard key={appointment.id} appointment={appointment} />
      ))}

      {appointments.length > 3 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="bg-primary_1 text-white py-2 px-4 rounded hover:bg-primary-dark transition"
        >
          {showAll ? 'Show Less' : 'View All'}
        </button>
      )}
    </div>
  );
};

export default AppointmentList;
