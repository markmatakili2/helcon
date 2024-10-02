import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppointmentCard from './AppointmentCard';
import Modal from './Modal';
import BookingCard from './Booking';
import { cancelAppointment, deleteAppointment, editAppointment } from "../../features/Patient/AppointmentSlice";

const AppointmentList = () => {
  const dispatch = useDispatch();
  const appointments = useSelector((state) => state.appointments.appointments);
  const appointmentStatus = useSelector((state) => state.appointments.status); // Access appointment status
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState(''); // To distinguish between cancel, delete, and edit
  const [loading, setLoading] = useState(false); // For loading state
  const [currentAppointment, setCurrentAppointment] = useState(null); // For storing current appointment data

  const handleCancel = async (id) => {
    setLoading(true);
    setModalOpen(true);
    setModalType('cancel');
    try {
      await dispatch(cancelAppointment(id)); // Call the cancel appointment action
    } finally {
      setLoading(false);
      // Optionally close the modal after success
      setModalOpen(false);
    }
  };

  const handleDelete = async (id) => {
    setLoading(true);
    setModalOpen(true);
    setModalType('delete');
    try {
      await dispatch(deleteAppointment(id)); // Call the delete appointment action
    } finally {
      setLoading(false);
      // Optionally close the modal after success
      setModalOpen(false);
    }
  };

  const handleEdit = (appointment) => {
    setCurrentAppointment(appointment); // Set current appointment for editing
    setModalOpen(true);
    setModalType('edit');
    
    
  };

  const handleUpdate = async (updatedData) => {
    setLoading(true);
    try {
      await dispatch(editAppointment(updatedData)); // Call the edit appointment action
    } finally {
      setLoading(false);
      setModalOpen(false); // Close the modal after success
    }
  };

  return (
    <div>
      {appointments.map((appointment) => (
        <AppointmentCard
          key={appointment.id}
          appointment={appointment}
          onCancel={handleCancel}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      ))}

      {/* Modal integration */}
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        {loading ? (
          <div className="flex justify-center items-center">
            <div className="loader"> {/* Replace with your loading spinner */}
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-gray-900"></div>
            </div>
          </div>
        ) : modalType === 'edit' && currentAppointment ? (
          <BookingCard
            appointment={currentAppointment}
            handleUpdate={handleUpdate} // Pass the update function
            handleCloseModal={() => setModalOpen(false)}
          />
        ) : (
          <div>
            <h2>{modalType === 'cancel' ? 'Cancel Appointment' : 'Delete Appointment'}</h2>
            <p>Are you sure you want to {modalType} this appointment?</p>
            <button onClick={() => setModalOpen(false)}>Close</button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default AppointmentList;
