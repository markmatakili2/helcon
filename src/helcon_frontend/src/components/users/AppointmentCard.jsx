import React from 'react';

const AppointmentCard = ({ appointment }) => {
  const { status, symtoms, appointment_type, slot, phone_no, reason } = appointment;

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <p className={`text-sm font-semibold ${status === 'pending' ? 'text-yellow-500' : 'text-green-500'}`}>
        Status: {status.charAt(0).toUpperCase() + status.slice(1)}
      </p>
      <p className="text-sm text-gray-600 mb-1">Symptoms: {symtoms}</p>
      <p className="text-sm text-gray-600 mb-1">Type: {appointment_type}</p>
      <p className="text-sm text-gray-600 mb-1">Slot: {slot}</p>
      <p className="text-sm text-gray-600 mb-1">Phone: {phone_no}</p>
      <p className="text-sm text-gray-600 mb-1">Reason: {reason}</p>
    </div>
  );
};

export default AppointmentCard;
