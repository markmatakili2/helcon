// src/components/DoctorAvailability.js
import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useDispatch } from "react-redux";
import { updateDoctorAvailability } from "../../../features/Doctors/DoctorAvailability"; // Redux action

const localizer = momentLocalizer(moment);

const DoctorAvailability = () => {
  const [events, setEvents] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const dispatch = useDispatch(); // Access Redux dispatch

  const handleSelectSlot = (slotInfo) => {
    const date = new Date();
    const now = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    if (slotInfo.start < now) {
      alert('Please select from today onwards');
      return;
    }
    setSelectedSlot(slotInfo);
  };

  const handleAddAvailability = async () => {
    if (selectedSlot) {
      const newEvent = {
        start: selectedSlot.start,
        end: selectedSlot.end,
        title: "Available",
      };
      setEvents([...events, newEvent]);

      // Prepare data for Redux/Backend
      const startDayOfWeek = moment(selectedSlot.start).isoWeekday(); // Day of week
      const startDate = moment(selectedSlot.start).format('YYYY'); // Year
      const monthName = moment(selectedSlot.start).format('MMMM'); // Full month name
      const startTime = moment(selectedSlot.start).format('HH:mm'); // Time

      // Concatenate start time with month and year
      const startTimeWithMonthYear = `${startTime} on ${monthName} ${startDate}`; // Example: "14:00 on September 2024"

      const endTime = moment(selectedSlot.end).format('HH:mm');

      const identifier = localStorage.getItem('identifier');
      if (identifier) {
        const queryId = JSON.parse(identifier);

        try {
          const result = await dispatch(updateDoctorAvailability({
            doctor_id: Number(queryId.id),
            day_of_week: startDayOfWeek, // Original day of week preserved
            start_time: startTimeWithMonthYear, // Updated start time with month and year
            end_time: endTime,
            is_available: true
          })).unwrap();

          console.log("Availability updated successfully:", result);

        } catch (error) {
          // Handle any errors
          console.error("Failed to update availability:", error);
        }
      } else {
        alert("the doctor id is not there");
      }

      setSelectedSlot(null);
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
        min={new Date(1970, 1, 1, 8, 0, 0)} // 8:00 AM
        max={new Date(1970, 1, 1, 18, 0, 0)} // 6:00 PM
        step={30} // 30-minute intervals
        timeslots={1} // 1 timeslot per step
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
