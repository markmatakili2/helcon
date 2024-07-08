import React, { useState } from 'react';

const CreateReportForm = () => {
  const [formData, setFormData] = useState({
    userId: '',
    username: '',
    symptoms: '',
    diagnostic: '',
    prescription: '',
    recommendations: '',
    otherDocument: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'otherDocument') {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: files[0], // Assuming you want to handle file input
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., send data to backend or perform client-side validation
    console.log(formData);
    // Reset form after submission if needed
    setFormData({
      userId: '',
      username: '',
      symptoms: '',
      diagnostic: '',
      prescription: '',
      recommendations: '',
      otherDocument: null,
    });
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="userId">
            User ID
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="userId"
            type="text"
            placeholder="Enter User ID"
            name="userId"
            value={formData.userId}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Enter Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="symptoms">
            Symptoms
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="symptoms"
            placeholder="Enter Symptoms"
            name="symptoms"
            value={formData.symptoms}
            onChange={handleChange}
            rows="3"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="diagnostic">
            Diagnostic
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="diagnostic"
            placeholder="Enter Diagnostic"
            name="diagnostic"
            value={formData.diagnostic}
            onChange={handleChange}
            rows="3"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="prescription">
            Prescription
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="prescription"
            placeholder="Enter Prescription"
            name="prescription"
            value={formData.prescription}
            onChange={handleChange}
            rows="3"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="recommendations">
            Recommendations
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="recommendations"
            placeholder="Enter Recommendations"
            name="recommendations"
            value={formData.recommendations}
            onChange={handleChange}
            rows="3"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="otherDocument">
            Any other relevant document
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="otherDocument"
            type="file"
            accept=".pdf,.doc,.docx,.jpg,.png"
            name="otherDocument"
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-[blue] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateReportForm;
