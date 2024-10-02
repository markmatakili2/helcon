import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createAppointment, editAppointment } from "../../features/Patient/AppointmentSlice"; 
import Loading from "../common/Loading";

const BookingCard = ({ handleCloseModal, appointment }) => {
  const dispatch = useDispatch();
  const { availabilityData, status } = useSelector((state) => state.availability);
  const { toNum } = useSelector((state) => state.account.userData.data);
  const [selectedDay, setSelectedDay] = useState(new Date());
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone_no: '',
    reason: '',
    symptoms: '',
    appointment_type: 'in-person',
  });

  useEffect(() => {
    if (appointment) {
      console.log('Editing Appointment:', appointment);
      setFormData({
        name: appointment.phone_no.split(',')[1] || '',
        phone_no: appointment.phone_no.split(',')[0] || '',
        reason: appointment.reason,
        symptoms: appointment.symtoms,
        appointment_type: appointment.appointment_type,
      });
      
      const parsedTimeSlot = parseTimeSlot(appointment.slot);
      
      
      setSelectedTimeSlot({
        start_time:parsedTimeSlot.start_time,
        date: parsedTimeSlot.date,
        doctor_id: appointment.doctor_id,
        formattedTime:parsedTimeSlot.formattedTime,
      });
      setShowForm(true); // Show the booking form for editing
    } else {
      setFormData({
        name: '',
        phone_no: '',
        reason: '',
        symptoms: '',
        appointment_type: 'in-person',
      });
      setSelectedTimeSlot(null);
      setShowForm(false); // Hide the form if no appointment to edit
    }
  }, [appointment]);

  // Utility function to parse time slot
  const parseTimeSlot = (slot) => {
    const [time, monthYear] = slot.split(' on ');
    const [hours, minutes] = time.split(':');

    const slotTime = new Date();
    slotTime.setHours(parseInt(hours), parseInt(minutes), 0, 0);
    
    // Format time to 12-hour format
    const localHours = slotTime.getHours();
    const formattedTime = `${localHours % 12 || 12}:${minutes} ${localHours < 12 ? 'AM' : 'PM'}`;
    
    return { start_time: slot, formattedTime, date: monthYear };
  };

  const groupAvailabilityByTimeSlot = () => {
    const timeSlots = { morning: [], afternoon: [], evening: [] };

    availabilityData.forEach(slot => {
      const [time, monthYear] = slot.start_time.split(' on ');
      const [hours, minutes] = time.split(':');

      const slotTime = new Date(selectedDay);
      slotTime.setHours(parseInt(hours), parseInt(minutes), 0, 0);
      const localHours = slotTime.getHours();
      const formattedTime = `${localHours % 12 || 12}:${minutes} ${localHours < 12 ? 'AM' : 'PM'}`;

      if (slot.is_available) {
        if (localHours < 12) {
          timeSlots.morning.push({ ...slot, formattedTime, date: monthYear });
        } else if (localHours < 17) {
          timeSlots.afternoon.push({ ...slot, formattedTime, date: monthYear });
        } else {
          timeSlots.evening.push({ ...slot, formattedTime, date: monthYear });
        }
      }
    });

    return timeSlots;
  };

  const timeSlots = groupAvailabilityByTimeSlot();

  const handleTimeSlotClick = (slot) => {
    setSelectedTimeSlot(slot);
    
    setShowForm(true); // Show the booking form
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    const { name, phone_no, reason, symptoms, appointment_type } = formData;

    const appointmentData = {
      patient_id: toNum,
      doctor_id: selectedTimeSlot.doctor_id,
      phone_no: `${phone_no},${name}`,
      slot: selectedTimeSlot.start_time,
      reason,
      symptoms,
      status: 'pending',
      appointment_type
    };

    if (appointment) {
      // Update the existing appointment
      // dispatch(editAppointment({ id: appointment.id, data: appointmentData }));
      alert("coming soon")
      console.log({...appointmentData,id:appointment.id})
    } else {
      // Create a new appointment
      dispatch(createAppointment(appointmentData));
    }

    // Reset state after submission
    setShowForm(false);
    handleCloseModal();
  };

  return (
    <div className="relative bg-white shadow-md rounded-lg p-4 max-w-md mx-auto">
      <button className="mb-4 absolute top-2 right-2 text-gray-400 hover:text-red-500 font-bold text-xl" onClick={handleCloseModal}>
        X
      </button>

      {status === 'loading' && <Loading />}
      {(status === 'succeeded' || appointment) && (
        <>
          {!showForm ? (
            <div>
              <h3 className="text-lg font-semibold mb-2">Morning</h3>
              <div className="flex flex-wrap mb-4">
                {timeSlots.morning.map((slot, idx) => (
                  <button
                    key={idx}
                    className="border rounded-lg border-green-500 text-green-500 py-1 px-3 mr-2 mb-2 hover:bg-green-100"
                    onClick={() => handleTimeSlotClick(slot)}
                  >
                    {slot.formattedTime}
                  </button>
                ))}
              </div>

              <h3 className="text-lg font-semibold mb-2">Afternoon</h3>
              <div className="flex flex-wrap mb-4">
                {timeSlots.afternoon.map((slot, idx) => (
                  <button
                    key={idx}
                    className="border rounded-lg border-green-500 text-green-500 py-1 px-3 mr-2 mb-2 hover:bg-green-100"
                    onClick={() => handleTimeSlotClick(slot)}
                  >
                    {slot.formattedTime}
                  </button>
                ))}
              </div>

              <h3 className="text-lg font-semibold mb-2">Evening</h3>
              <div className="flex flex-wrap">
                {timeSlots.evening.map((slot, idx) => (
                  <button
                    key={idx}
                    className="border rounded-lg border-green-500 text-green-500 py-1 px-3 mr-2 mb-2 hover:bg-green-100"
                    onClick={() => handleTimeSlotClick(slot)}
                  >
                    {slot.formattedTime}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div>
              <h2 className="text-xl font-bold mb-4">{appointment ? 'Edit Appointment' : 'New Appointment'}</h2>
              {selectedTimeSlot && (
                 <p className="text-gray-700 mb-2">You selected: {selectedTimeSlot.formattedTime} on {selectedTimeSlot.date}</p>
              )}
              <form onSubmit={handleBookingSubmit}>
                <div className="mb-3">
                  <label className="block text-gray-700">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full border rounded-lg p-2"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="block text-gray-700">Phone Number</label>
                  <input
                    type="tel"
                    name="phone_no"
                    value={formData.phone_no}
                    onChange={handleInputChange}
                    className="w-full border rounded-lg p-2"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="block text-gray-700">Reason for Appointment</label>
                  <input
                    type="text"
                    name="reason"
                    value={formData.reason}
                    onChange={handleInputChange}
                    className="w-full border rounded-lg p-2"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="block text-gray-700">Symptoms</label>
                  <input
                    type="text"
                    name="symptoms"
                    value={formData.symptoms}
                    onChange={handleInputChange}
                    className="w-full border rounded-lg p-2"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Appointment Type</label>
                  <select
                    name="appointment_type"
                    value={formData.appointment_type}
                    onChange={handleInputChange}
                    className="w-full border rounded-lg p-2"
                    required
                  >
                    <option value="in-person">In Person</option>
                    <option value="virtual">Virtual</option>
                  </select>
                </div>
                <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
                  {appointment ? 'Update Appointment' : 'Book Appointment'}
                </button>
              </form>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default BookingCard;
