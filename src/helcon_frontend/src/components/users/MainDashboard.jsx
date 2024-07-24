import React from 'react';
import image from '../../images/doc4.png';
import { FaBell } from 'react-icons/fa';
import Banner from '../common/Banner';
import { FaLocationDot } from 'react-icons/fa6';
import ProfileCard from '../common/Doctor_profile';
import MyCalendar from '../common/Calendar';
import { MdEventBusy } from 'react-icons/md';
import { HiMagnifyingGlass } from "react-icons/hi2";
import { CiLocationOn } from "react-icons/ci";

const MainDashboard = () => {
  return (
    <div className="min-h-screen p-4 flex flex-col space-y-4 w-full">
      <div className="flex justify-between items-center mb-8 mt-4">
        <div>
          <p className="text-gray-600">Hi, Kevin</p>
          <h1 className="text-2xl font-bold text-black">Welcome Back</h1>
        </div>
        <div className={` md:w-[610px] rounded-[16px] bg-white py-3 px-5 flex flex-col md:flex-row justify-between shadow-md items-center text-[#7A7D84]  relative z-20`}>
          <div className="flex gap-[4px] items-center w-full md:w-auto mb-2 md:mb-0 z-20">
            <HiMagnifyingGlass className="text-xl" />
            <input type="text" className="bg-none text-[14px] outline-none w-full md:w-auto" placeholder="Find doctors" />
          </div>
          <div className="flex flex-col md:flex-row gap-2 md:gap-x-[20px] border-t-2 md:border-t-0 md:border-l-2 border-[#7A7D84] w-full md:w-auto h-[37px] pt-2 md:pt-0 md:pl-2 z-20">
            <div className="flex gap-[4px] items-center w-full md:w-auto">
              <CiLocationOn className="text-xl ml-2 md:ml-0" />
              <input type="text" className="bg-none text-sm outline-none w-full md:w-auto" placeholder="Location" />
            </div>
            <button className="bg-primary_1 text-white h-full rounded-[6px] px-4 py-2 w-full md:w-[113px] flex items-center justify-center font-500 text-[14px] z-20">Search</button>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <select className="p-2 rounded-md border border-gray-300">
            <option>En</option>
            {/* Add more languages as needed */}
          </select>
          <FaBell className="text-xl text-gray-700" />
          <div className="rounded-full w-10 h-10  flex items-center">
          <img src={image} alt="Profile" className="w-full h-full object-fit" />
          </div>
          <p className=''>Kevlin</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-3">
        <div className="col-span-2 w-full">
          <Banner />
          <div className="space-y-4 mt-4">
            <h2 className="text-2xl font-bold text-primary">Nearby Doctors</h2>
            <div className="flex flex-col items-center border rounded-lg border-gray-300 py-8 px-4">
              <FaLocationDot className="text-3xl text-primary mb-4" />
              <p className="text-xl text-center">
                Please enable your location, so we can find nearby doctors
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-white rounded-lg border border-gray-300 p-6 shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-md font-bold text-primary">Upcoming Appointments</h2>
            <button className="bg-primary_1 text-white py-1 px-3 rounded hover:bg-primary-dark transition">
              View All
            </button>
          </div>
          <MyCalendar />
          <div className="flex flex-col items-center mt-6">
            <MdEventBusy size={50} color="#ccc" />
            <p className="text-gray-500 mt-2">No upcoming events</p>
          </div>
        </div>
      </div>
      <div className="w-full">
        <ProfileCard />
      </div>
    </div>
  );
};

export default MainDashboard;
