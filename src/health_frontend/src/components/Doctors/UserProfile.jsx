import React from 'react';
import maleIcon from '../../images/maledoc.png'

const UserProfile = () => {
   
  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">User Profile</h2>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={() => {
            // Handle logout logic here
            console.log('Logging out...');
          }}
        >
          Log out
        </button>
      </div>
      <div className="flex items-center mb-4 h-32 ">
        <img
          src={maleIcon}
          alt="User Icon"
          className="rounded-full h-full  mr-2"
        />
        <span className="text-lg font-bold">JohnDoe123</span>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-bold mb-2">User ID</h3>
        <p className="text-gray-700">123456789</p>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-bold mb-2">Verify</h3>
        <div className="flex items-center">
          <p className="mr-2">User Details</p>
          <span className="bg-gray-300 text-gray-700 py-1 px-2 rounded-full text-xs">Verified</span>
        </div>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-bold mb-2">User Details</h3>
        <div className="mb-2">
          <p><span className="font-bold">Age:</span> 27</p>
        </div>
        <div className="mb-2">
          <p><span className="font-bold">Sex:</span> Female</p>
        </div>
      </div>
      <div>
        <h3 className="text-lg font-bold mb-2">Settings</h3>
        <ul>
          <li className="flex items-center mb-2">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded mr-2 focus:outline-none focus:shadow-outline"
              onClick={() => {
                // Handle change username logic here
                console.log('Changing username...');
              }}
            >
              Change Username
            </button>
          </li>
          <li className="flex items-center mb-2">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded mr-2 focus:outline-none focus:shadow-outline"
              onClick={() => {
                // Handle change password logic here
                console.log('Changing password...');
              }}
            >
              Change Password
            </button>
          </li>
          <li className="flex items-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded mr-2 focus:outline-none focus:shadow-outline"
              onClick={() => {
                // Handle privacy settings logic here
                console.log('Privacy settings...');
              }}
            >
              Privacy Settings
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserProfile;
