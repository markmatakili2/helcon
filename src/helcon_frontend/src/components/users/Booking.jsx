import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Loading from "../common/Loading";

const BookingCard = ({ handleCloseModal }) => {
  const { availabilityData, status } = useSelector((state) => state.availability);
  
  const [selectedDay, setSelectedDay] = useState(new Date());
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const groupAvailabilityByTimeSlot = () => {
    const timeSlots = { morning: [], afternoon: [], evening: [] };

    availabilityData.forEach(slot => {
      const [time, monthYear] = slot.start_time.split(' on '); // Split to get time and date
      const [hours, minutes] = time.split(':');
      
      // Create a date object for local time
      const slotTime = new Date(selectedDay);
      slotTime.setHours(parseInt(hours), parseInt(minutes), 0, 0); // Set time

      // Local time for AM/PM formatting
      const localHours = slotTime.getHours();
      const formattedTime = `${localHours % 12 || 12}:${minutes} ${localHours < 12 ? 'AM' : 'PM'}`; // Format to AM/PM

      // Group the time slots by morning, afternoon, evening
      if (slot.is_available) {
        if (localHours < 12) { // Morning
          timeSlots.morning.push({ ...slot, formattedTime, date: monthYear });
        } else if (localHours < 17) { // Afternoon
          timeSlots.afternoon.push({ ...slot, formattedTime, date: monthYear });
        } else { // Evening
          timeSlots.evening.push({ ...slot, formattedTime, date: monthYear });
        }
      }
    });

    return timeSlots;
  };

  const timeSlots = groupAvailabilityByTimeSlot();

  const handleTimeSlotClick = (time) => {
    setSelectedTimeSlot(time);
    setShowForm(true); // Show the booking form
  };

  //  patient_id: u64,
  //   doctor_id: u64,
  //   appointment_date: u64,
  //   time: String,
  //   phone_no: String,

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    alert('Booking submitted!');
  };

  return (
    <div className="relative bg-white shadow-md rounded-lg p-4 max-w-md mx-auto">
      <button className="mb-4 absolute top-2 right-2 text-gray-400 hover:text-red-500 font-bold text-xl" onClick={handleCloseModal}>
        X
      </button>

      {status === 'loading' && <Loading />}
      {status === 'succeeded' && (
        <>
          {!showForm ? (
            <>
              <div>
                <h3 className="text-lg font-semibold mb-2">Morning</h3>
                <div className="flex flex-wrap mb-4">
                  {timeSlots.morning.map((slot, idx) => (
                    <button
                      key={idx}
                      className="border rounded-lg border-green-500 text-green-500 py-1 px-3 mr-2 mb-2 hover:bg-green-100"
                      onClick={() => handleTimeSlotClick(slot.formattedTime)}
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
                      onClick={() => handleTimeSlotClick(slot.formattedTime)}
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
                      onClick={() => handleTimeSlotClick(slot.formattedTime)}
                    >
                      {slot.formattedTime} 
                    </button>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div>
              <h2 className="text-xl font-bold mb-4">Appointment</h2>
              <p className="text-gray-700 mb-2">You selected: {selectedTimeSlot}</p>
              <form onSubmit={handleBookingSubmit}>
                <div className="mb-3">
                  <label className="block text-gray-700">Name</label>
                  <input
                    type="text"
                    className="w-full border rounded-lg p-2"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="block text-gray-700">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full border rounded-lg p-2"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary_1 text-white py-2 rounded-lg hover:bg-green-700"
                >
                  Book Appointment
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
