// src/components/DoctorAvailability.js
import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const DoctorAvailability = () => {
  const [events, setEvents] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);

  const handleSelectSlot = (slotInfo) => {
   const date = new Date()
   const now = new Date(date.getFullYear(),date.getMonth(),date.getDate())
   if(slotInfo.start < now){
     alert('Please select from today onwards')
   }
   setSelectedSlot(slotInfo);

   };

  const handleAddAvailability = () => {
    if (selectedSlot) {
      const newEvent = {
        start: selectedSlot.start,
        end: selectedSlot.end,
        title: "Available",
      };
      setEvents([...events, newEvent]);
      setSelectedSlot(null);
   console.log(newEvent)
    }
  };

  return (
    <div className="container mx-auto my-4 p-4">
      <h1 className="text-2xl font-bold mb-4">Set Your Availability</h1>
      <Calendar
        localizer={localizer}
        events={events}
        selectable
        onSelectSlot={handleSelectSlot}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        className="shadow-lg"
        min={new Date(1970, 1, 1, 9, 0, 0)} // 9:00 AM
        max={new Date(1970, 1, 1, 18, 0, 0)}
        step={120}
        timeslots={1}
        
         // 5:00 PM
      />
      {selectedSlot && (
        <div className="mt-4 p-4 border rounded-lg shadow-md bg-white">
          <h2 className="text-xl mb-2">Selected Time Slot</h2>
          <p>
            <strong>Start:</strong> {moment(selectedSlot.start).format("LLLL")}
          </p>
          <p>
            <strong>End:</strong> {moment(selectedSlot.end).format("LLLL")}
          </p>
          <button
            onClick={handleAddAvailability}
            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add Availability
          </button>
        </div>
      )}
    </div>
  );
};

export default DoctorAvailability;
