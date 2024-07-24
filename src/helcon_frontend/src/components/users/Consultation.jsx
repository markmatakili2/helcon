import React from 'react';
import { FaPlus, FaFileAlt } from 'react-icons/fa';
import profilePic from '../../images/helcon_logo.png'; // replace with your image path

const Consultation = () => {
  const consultations = [
    {
      timezone: 'Today',
      name: 'John Doe',
      time: '10:00 AM - 1:00 PM',
      image: profilePic,
    },
    {
      timezone: 'Yesterday',
      name: 'Jane Smith',
      time: '2:00 PM - 5:00 PM',
      image: profilePic,
    },
    {
      timezone: 'Last Week',
      name: 'Alice Johnson',
      time: '9:00 AM - 12:00 PM',
      image: profilePic,
    },
    {
      timezone: 'Last Month',
      name: 'Michael Brown',
      time: '3:00 PM - 6:00 PM',
      image: profilePic,
    },
  ];

  // Group consultations by timezone
  const groupedConsultations = consultations.reduce((groups, consultation) => {
    if (!groups[consultation.timezone]) {
      groups[consultation.timezone] = [];
    }
    groups[consultation.timezone].push(consultation);
    return groups;
  }, {});

  return (
    <div className="p-6 bg-white rounded-lg shadow-md w-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-primary">History</h2>
        <div className="flex items-center space-x-4">
          <select className="p-2 rounded-md border border-gray-300">
            <option>May 2023</option>
            {/* Add more date options as needed */}
          </select>
          <button className="bg-primary_1 text-white py-2 px-3 rounded flex items-center hover:bg-primary-dark transition">
            <FaPlus className="mr-2" />
            New Appointment
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {Object.keys(groupedConsultations).map((timezone) => (
          <div key={timezone}>
            <h3 className="text-lg font-semibold mb-4">{timezone}</h3>
            <div className="space-y-4">
              {groupedConsultations[timezone].map((consultation, index) => (
                <div key={index} className="p-4 border-2 border-gray-100 rounded-lg flex   flex-col ">
                  <div className="flex items-center">
                  <div className="rounded-full w-10 h-10 md:w-26 md:h-26 lg:w-16 lg:h-16  flex items-center">
                  <img
                      src={consultation.image}
                      alt="Profile"
                      className="w-full h-full  object-cover"
                    />
                  </div>
                    <div className='-mt-4'>
                      <span className="font-bold text-lg ">{consultation.name}</span>
                    </div>
                   
                  </div>
                  <div className="bg-gray-100 text-gray-700 text-lg rounded px-2">{consultation.time}</div>
                  
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Consultation;
