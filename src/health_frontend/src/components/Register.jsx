import { useState } from "react";

const Register = () => {
  


  const [isOption, setOption] = useState("patient");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    first_name: "",
    last_name: "",
    birth_date: "",
    phone_number: "",
    licence_number: "",
    image: "",
    country: "",
    gender: "",
    id_number: "",
    cpassword: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
 
     
      
  const handleFileChange = (e)=>{

   const {files}= e.target
   if(files[0]){
      setFormData((prevData)=>({
         ...prevData,image:files[0]
      })
   )
     
   
   }
    
    }


   const handleSubmit = (e)=>{
      e.preventDefault()
      console.log(formData)
      console.log(formData.image)
    
   }



  return (
    <div className="flex justify-center items-center min-h-screen bg-primary pt-4 px-2">
      <div className="w-full bg-white p-8 rounded shadow-md md:w-2/5">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <div className="flex w-full pb-4 px-0 justify-center">
          <button
            className={` py-2 text-2xl w-32  mx-2 shadow-md ${
              isOption === "patient" ? "bg-primary text-white" : "bg-none"
            }`}
            onClick={() => setOption("patient")}
          >
            Patient
          </button>
          <button
            className={` py-2 text-2xl w-32  mx-2 shadow-md d ${
              isOption === "doctor" ? "bg-primary text-white" : "bg-none"
            }`}
            onClick={() => setOption("doctor")}
          >
            Doctor
          </button>
        </div>

        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            First Name
          </label>
          <input
            type="text"
            id="first_name"
            name="first_name"
            autoComplete="first_name"
            className="block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter your username"
            value={formData.first_name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="last_name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Last Name
          </label>
          <input
            type="text"
            id="last_name"
            name="last_name"
            autoComplete="last_name"
            className="block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter your username"
            value={formData.last_name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="last_name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Image icon
          </label>
          <input
            type="file"
            id="image"
            name="image"
            
            accept="images/*"
            className="block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter your username"
            
            onChange={handleFileChange}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="last_name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Mobile Number
          </label>
          <input
            type="text"
            id="phone_number"
            name="phone_number"
            autoComplete="phone_number"
            className="block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter your username"
            value={formData.phone_number}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4 w-full">
          <label
            htmlFor="gender"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Gender
          </label>
          <select
            id="gender"
            name="gender"
            className="block w-full max-w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm overflow-hidden"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="">Select an option</option>
            <option value="M">Male</option>
            <option value="F">Female</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="country"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Country
          </label>
          <input
            type="text"
            id="country"
            name="country"
            autoComplete="country"
            className="block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter your username"
            value={formData.country}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Identification Number
          </label>
          <input
            type="text"
            id="id_number"
            name="id_number"
            autoComplete="id_number"
            className="block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter your username"
            value={formData.id_number}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="birth_date"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Birth Date
          </label>
          <input
            type="date"
            id="birth_date"
            name="birth_date"
            autoComplete="birth_date"
            className="block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter your username"
            value={formData.birth_date}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter your username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        {isOption === "doctor" && (
          <div className="mb-4">
            <label
              htmlFor="licence_number"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Licence Number
            </label>
            <input
              type="text"
              id="licence_number"
              name="licence_number"
              className="block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your licence_number"
              value={formData.licence_number}
              onChange={handleChange}
            />
          </div>
        )}
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            New password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="new password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Confirm password
          </label>
          <input
            type="password"
            id="cpassword"
            name="cpassword"
            className="block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="confirm password"
            value={formData.cpassword}
            onChange={handleChange}
          />
        </div>
        <div className="flex bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600 items-center justify-center py-2 px-4">
        <button
              type="button"
              className="w-full text-white "
              onClick={handleSubmit}
             
            >
              Register
            </button>
         
        </div>

      </div>
    </div>
  );
};
export default Register;
