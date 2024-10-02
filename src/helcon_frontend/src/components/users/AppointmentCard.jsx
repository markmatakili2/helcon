import React from 'react';

const AppointmentCard = ({ appointment, onCancel, onDelete, onEdit }) => {
  const { status, symtoms, appointment_type, slot, phone_no, reason } = appointment;

  const [first, last] = phone_no.split(",");

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <p className={`text-sm font-semibold 
        ${status === 'pending' ? 'text-yellow-500' :
          status === 'confirmed' ? 'text-green-500' :
            status === 'cancelled' ? 'text-red-500' :
              'text-gray-500'}`}>
        Status: {status.charAt(0).toUpperCase() + status.slice(1)}
      </p>
      <p className="text-sm text-gray-600 mb-1">Name: {last}</p>
      <p className="text-sm text-gray-600 mb-1">Symptoms: {symtoms}</p>
      <p className="text-sm text-gray-600 mb-1">Type: {appointment_type}</p>
      <p className="text-sm text-gray-600 mb-1">Time: {slot}</p>
      <p className="text-sm text-gray-600 mb-1">Phone: {first}</p>
      <p className="text-sm text-gray-600 mb-1">Reason: {reason}</p>

     
      <div className="flex justify-between mt-4">
       {status==="pending" &&
        (<>
          <button
        className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 transition-all"
        onClick={() => onCancel(appointment.id)} // Pass appointment ID
      >
        Cancel
      </button>
      <button
          className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 transition-all"
          onClick={() => onEdit(appointment)} // Pass appointment details
        >
          Edit
        </button>
      </>
        )}
       
        {/* <button
          className="bg-gray-500 text-white py-1 px-3 rounded hover:bg-gray-600 transition-all"
          onClick={() => onDelete(appointment.id)} // Pass appointment ID
        >
          Delete
        </button> */}
      </div>
    </div>
  );
};

export default AppointmentCard;
