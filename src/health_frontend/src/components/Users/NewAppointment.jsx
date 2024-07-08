import  { useState } from 'react';

const NewAppointment = () => {
  const [formData, setFormData] = useState({
    doctorId: '',
    appointment: '',
    conditionDescription: '',
    file: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'file') {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: files[0]
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    // Reset form fields after submission if needed
    setFormData({
      doctorId: '',
      appointment: '',
      conditionDescription: '',
      file: null
    });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#0f0f3e]">
      <h2 className="text-3xl font-bold mb-8 text-white">New Appointment</h2>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-lg   md:mx-0">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="doctorId" className="block text-gray-700 font-bold mb-2">
              Doctor ID
            </label>
            <input
              type="text"
              id="doctorId"
              name="doctorId"
              value={formData.doctorId}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter Doctor ID"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="appointment" className="block text-gray-700 font-bold mb-2">
              Appointment
            </label>
            <input
              type="text"
              id="appointment"
              name="appointment"
              value={formData.appointment}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter Appointment Details"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="conditionDescription" className="block text-gray-700 font-bold mb-2">
              Describe Condition
            </label>
            <textarea
              id="conditionDescription"
              name="conditionDescription"
              value={formData.conditionDescription}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Describe the medical condition"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="file" className="block text-gray-700 font-bold mb-2">
              Upload File
            </label>
            <input
              type="file"
              id="file"
              name="file"
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewAppointment;
