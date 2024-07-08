import React from 'react';
import { Link } from 'react-router-dom';

const appointments = [
  {
    date: '23/02/2024',
    username: '@solp',
    details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis quia soluta rerum.',
    message: 'Chat'
  },
  {
    date: '19/02/2024',
    username: '@ken_yeah',
    details: 'Lorem ipsum dolor sit amet consectetur.',
    message: 'Chat'
  },
  {
    date: '10/02/2024',
    username: '@grace',
    details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quae quasi tempora!',
    message: 'Chat'
  }
];

const ScheduledAppointments = () => {
  return (
    <div className="p-4 w-full">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="w-full bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Date</th>
              <th className="py-3 px-6 text-left">Username</th>
              <th className="py-3 px-6 text-left">Details</th>
              <th className="py-3 px-6 text-left">Message</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {appointments.map((appointment, index) => (
              <tr key={index} className="border-b border-gray-300 hover:bg-gray-100">
                <td className="py-3 px-6 text-left whitespace-nowrap">{appointment.date}</td>
                <td className="py-3 px-6 text-left">{appointment.username}</td>
                <td className="py-3 px-6 text-left">{appointment.details}</td>
                <td className="py-3 px-6 text-left">
                  <Link
                    to="#"
                    className="bg-[blue] text-white px-3 py-1 rounded hover:bg-blue-700"
                  >
                    {appointment.message}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ScheduledAppointments;
