import React, { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useDispatch, useSelector } from "react-redux";
import { updateDoctorAvailability } from "../../../features/Doctors/DoctorAvailability"; // Redux action

const localizer = momentLocalizer(moment);

const DoctorAvailability = () => {
  const { availabilities } = useSelector((state) => state.availability);
  const [events, setEvents] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const formattedEvents = availabilities
      .filter(availability => {
        // Create a date object for each availability's start_time
        const startDate = moment(availability.start_time, 'HH:mm on MMMM YYYY');
        return startDate.isValid(); // Ensure the date is valid
      })
      .map(availability => {
        const startDate = moment(availability.start_time, 'HH:mm on MMMM YYYY').toDate();
        const endDate = moment(availability.end_time, 'HH:mm on MMMM YYYY').toDate();

        return {
          start: startDate,
          end: endDate,
          title: "Available",
        };
      });

    setEvents(formattedEvents);
  }, [availabilities]); // Update events whenever availabilities change

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
      const startDayOfWeek = moment(selectedSlot.start).isoWeekday();
      const startDate = moment(selectedSlot.start).format('YYYY');
      const monthName = moment(selectedSlot.start).format('MMMM');
      const startTime = moment(selectedSlot.start).format('HH:mm');

      const startTimeWithMonthYear = `${startTime} on ${monthName} ${startDate}`;
      const endTime = moment(selectedSlot.end).format('HH:mm');

      const identifier = localStorage.getItem('identifier');
      if (identifier) {
        const queryId = JSON.parse(identifier);
        try {
          const result = await dispatch(updateDoctorAvailability({
            doctor_id: Number(queryId.id),
            day_of_week: startDayOfWeek,
            start_time: startTimeWithMonthYear,
            end_time: endTime,
            is_available: true
          })).unwrap();

          console.log("Availability updated successfully:", result);
        } catch (error) {
          console.error("Failed to update availability:", error);
        }
      } else {
        alert("the doctor id is not there");
      }

      setSelectedSlot(null);
    }
     alert("Availability added successfully!");
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
        min={new Date(1970, 1, 1, 8, 0, 0)}
        max={new Date(1970, 1, 1, 18, 0, 0)}
        step={30}
        timeslots={1}
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
