import { useState } from "react";

const NewEvent = ()=>{
   const [formData, setFormData] = useState({
      eventName: '',
      date: '',
      descrption: '',
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
         eventName: '',
         date: '',
         description: '',
         file: null
        
      });
    };

return (

<div className="flex flex-col items-center justify-center h-screen bg-[#0f0f3e]">
      <h2 className="text-3xl font-bold mb-8 text-white">Create event</h2>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-lg w-full">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="eventName" className="block text-gray-700 font-bold mb-2">
              Event
            </label>
            <input
              type="text"
              id="eventName"
              name="eventName"
              value={formData.eventName}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="title of event"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="date" className="block text-gray-700 font-bold mb-2">
              End date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter Appointment Details"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
              Describe Condition
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.descrption}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Describe the medical condition"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="file" className="block text-gray-700 font-bold mb-2">
              Upload image if necessary
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
              create
            </button>
          </div>
        </form>
      </div>
    </div>

)
}

export default NewEvent