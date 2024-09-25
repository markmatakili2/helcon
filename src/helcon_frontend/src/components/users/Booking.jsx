import React, { useState } from 'react';

const BookingCard = ({handleCloseModal}) => {
  const [selectedDay, setSelectedDay] = useState(new Date()); // Start with today
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null); // No time selected initially
  const [showForm, setShowForm] = useState(false); 
  const getNextDays = () => {
    const days = [];
    for (let i = 0; i < 3; i++) {
      const day = new Date();
      day.setDate(selectedDay.getDate() + i);
      days.push(day);
    }
    return days;
  };

  // Dummy data for time slots
  const timeSlots = {
    morning: ['10:00 AM', '11:00 AM'],
    afternoon: ['12:00 PM', '1:00 PM', '2:00 PM'],
    evening: ['4:00 PM', '5:00 PM', '6:00 PM']
  };

  // Handler for when a time slot is clicked
  const handleTimeSlotClick = (time) => {
    setSelectedTimeSlot(time);
    setShowForm(true); // Show the booking form
  };

  // Function to handle booking form submission
  const handleBookingSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to backend)
    alert('Booking submitted!');
  };

  return (
    <div className="relative bg-white shadow-md rounded-lg p-4 max-w-md mx-auto">
      {/* Cancel (X) button */}
      <button className="mb-4 absolute top-2 right-2 text-gray-400 hover:text-red-500 font-bold text-xl" onClick={ handleCloseModal}>
        X
      </button>

      {/* Show either the time slots or the booking form */}
      {!showForm ? (
        <>
          {/* Display three days (Today and next two days) */}
          <div className="flex justify-between items-center mt-8 mb-4">
            {getNextDays().map((day, index) => (
              <div key={index} className={`text-center cursor-pointer ${index === 0 ? 'text-red-600 underline' : 'text-gray-700'} `}>
                {day.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
              </div>
            ))}
            {/* Arrow to navigate more days */}
            <button className="ml-4 text-gray-500 hover:text-gray-700">&gt;</button>
          </div>

          {/* Time slots (Morning, Afternoon, Evening) */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Morning</h3>
            <div className="flex flex-wrap mb-4">
              {timeSlots.morning.map((time, idx) => (
                <button
                  key={idx}
                  className="border rounded-lg border-green-500 text-green-500 py-1 px-3 mr-2 mb-2 hover:bg-green-100"
                  onClick={() => handleTimeSlotClick(time)}
                >
                  {time}
                </button>
              ))}
            </div>

            <h3 className="text-lg font-semibold mb-2">Afternoon</h3>
            <div className="flex flex-wrap mb-4">
              {timeSlots.afternoon.map((time, idx) => (
                <button
                  key={idx}
                  className="border rounded-lg border-green-500 text-green-500 py-1 px-3 mr-2 mb-2 hover:bg-green-100"
                  onClick={() => handleTimeSlotClick(time)}
                >
                  {time}
                </button>
              ))}
            </div>

            <h3 className="text-lg font-semibold mb-2">Evening</h3>
            <div className="flex flex-wrap">
              {timeSlots.evening.map((time, idx) => (
                <button
                  key={idx}
                  className="border rounded-lg border-green-500 text-green-500 py-1 px-3 mr-2 mb-2 hover:bg-green-100"
                  onClick={() => handleTimeSlotClick(time)}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        </>
      ) : (
        // Booking form after selecting a time slot
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
    </div>
  );
};

export default BookingCard;
