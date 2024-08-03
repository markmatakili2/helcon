import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import default styles

const MyCalendar = () => {
  const highlightDates = [
    new Date(2024, 6, 22),
  
  ];

  const [date, setDate] = useState(new Date());

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
       {/* <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/info-helcon/30min"
        style={{ minWidth: '320px', height: '630px' }}
      ></div> */}
    </div>
  );
};

export default MyCalendar;
