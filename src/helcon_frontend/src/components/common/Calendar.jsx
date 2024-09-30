import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import default styles
import { useSelector } from 'react-redux';

const MyCalendar = () => {
  const { appointments } = useSelector((state) => state.appointments); // Adjust this path as per your Redux state structure
  const [date, setDate] = useState(new Date());

  // Function to parse the appointment slot to extract the date
  const parseDateFromSlot = (slot) => {
    // Assuming the slot is formatted as "14:30 on Monday, September 2024-09-30"
    const parts = slot.split(" on "); // Split by " on "
    if (parts.length < 2) return null; // Return null if format is unexpected

    // The date is the second part after " on "
    const dateString = parts[1]; // "Monday, September 2024-09-30"
    
    // Convert it to a date object
    return new Date(dateString);
  };

  // Extracting highlight dates from appointments
  const highlightDates = appointments
    .map(appointment => parseDateFromSlot(appointment.slot))
    .filter(date => date !== null); // Filter out any null dates

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const tileClassName = ({ date }) => {
    const isHighlighted = highlightDates.some(
      (highlightDate) =>
        highlightDate.getDate() === date.getDate() &&
        highlightDate.getMonth() === date.getMonth() &&
        highlightDate.getFullYear() === date.getFullYear()
    );

    return isHighlighted ? 'highlighted-date' : null;
  };

  return (
    <div className="react-calendar-container">
      <Calendar
        onChange={handleDateChange}
        value={date}
        tileClassName={tileClassName}
      />
      {/* Optional: Add any additional UI components or Calendly widget here */}
    </div>
  );
};

export default MyCalendar;
