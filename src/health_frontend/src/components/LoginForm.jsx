import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    role: "",
    username: "",
    password: "",
  });

  const [isloading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      if (formData.role.toLowerCase() === "patient") {
        navigate("/patient");
      } else if (formData.role.toLowerCase() === "doctor") {
        navigate("/doctor");
      }
      setLoading(false);
      setFormData({
        username: "",
        password: "",
      });
    }, 2000);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-primary">
      <div className="bg-white p-8 rounded shadow-md w-80">
        <h2 className="text-2xl font-bold mb-6 text-center">Login Form</h2>
        
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
            autoComplete="username"
            className="block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter your username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            autoComplete="current-password"
            className="block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="flex bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600 items-center justify-center py-2 px-4">
          {isloading ? (
            <>
              <div className=" animate-spin h-6 w-6 rounded-full border-l-2 border-b-2  border-gray"></div>{" "}
              <span className="pl-3 text-white">loading ...</span>
            </>
          ) : (
            <button
              type="button"
              className="w-full text-white "
              onClick={handleSubmit}
            >
              Login
            </button>
          )}
        </div>

        <div className="mt-4 text-center text-sm">
          <p className="text-gray-600">
            Not registered?{" "}
            <Link to="/signup" className="text-indigo-600 hover:underline">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
