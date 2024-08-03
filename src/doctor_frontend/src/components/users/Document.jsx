import React from 'react';
import { FaPlus, FaStar, FaEllipsisV } from 'react-icons/fa';
import profilePic from '../../images/helcon_logo.png'; // Replace with your image path

const Document = () => {
  const documents = [
    {
      name: 'Report A',
      generatedAt: 'June 2024',
      image: profilePic,
    },
    {
      name: 'Report ',
      generatedAt: 'June 2024',
      image: profilePic,
    },
    {
      name: 'Report B',
      generatedAt: 'June 2024',
      image: profilePic,
    },
    {
      name: 'Report C',
      generatedAt: 'June 2024',
      image: profilePic,
    },
    {
      name: 'Report A',
      generatedAt: 'June 2024',
      image: profilePic,
    },
    {
      name: 'Report B',
      generatedAt: 'July 2024',
      image: profilePic,
    },
    {
      name: 'Report C',
      generatedAt: 'August 2024',
      image: profilePic,
    },
    {
      name: 'Report D',
      generatedAt: 'September 2024',
      image: profilePic,
    },
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-md w-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-primary">Documents</h2>
        <button className="bg-primary_1 text-white py-2 px-3 rounded flex items-center hover:bg-primary-dark transition">
          <FaPlus className="mr-2" />
          Add Document
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {documents.map((doc, index) => (
          <div
            key={index}
            className="p-4 bg-white border rounded-lg border-rgba(229, 229, 229, 1) shadow-sm"
          >
            <div className="flex justify-between items-center mb-4">
              <FaStar className="text-yellow-400 text-lg" />
              <FaEllipsisV className="text-gray-500 text-lg" />
            </div>
            <div className="flex justify-center mb-4">
              <img
                src={doc.image}
                alt="Document"
                className="w-full h-32 object-cover border border-rgba(229, 229, 229, 1)"
              />
            </div>
            <div className="text-center">
              <h3 className="font-bold text-lg">{doc.name}</h3>
              <p className="text-gray-500 text-sm">Generated: {doc.generatedAt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Document;
