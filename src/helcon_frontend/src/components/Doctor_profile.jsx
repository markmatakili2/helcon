import React from 'react';
import { useSelector } from 'react-redux';
import { FaClock, FaDollarSign, FaGreaterThan } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaLocationDot } from 'react-icons/fa6';

import image from '../images/doctors.png';

const ProfileCard = () => {
  const profile = useSelector((state) => state.profile.profile);

  return (
    <div className="mx-4 md:mx-[60px] flex flex-col px-2">
      <div className="flex justify-between items-center py-2 mb-4">
        <h2 className='text-2xl font-bold text-primary'>Recommended Doctors</h2>
        <Link to="/view-all" className='font-semibold flex items-center text-xl relative px-6'>
          <button className='flex items-center relative bg-primary_1 text-white px-4 py-2 rounded-lg'>
            View All <FaGreaterThan className='ml-2 text-sm' />
          </button>
        </Link>
      </div>

      <div className='flex flex-wrap gap-4 md:gap-[16px] mb-4'>
        {[1, 2, 3].map((_, index) => (
          <div key={index} className="border-2 rounded-[16px] p-5 pl-[30px] border-slate-300 text-primary flex-1 min-w-[300px]">
            <div className="flex">
              <img src={image} alt="Doctor" className="w-16 h-16 rounded-full bg-primary" />
              <div className="ml-4">
                <div className="font-bold text-lg">{profile.name}</div>
                <div className="text-primary-300">
                  {profile.username} <span className="mx-2">|</span> {profile.experience} years experience
                </div>
                <div className="mt-1 px-2 py-1 bg-blue-100 text-blue-600 rounded inline-block">
                  {profile.specialist}
                </div>
              </div>
            </div>
            <hr className="my-4" />
            <div className='flex gap-6'>
              <div className="flex text-primary">
                <FaClock className="mr-2 text-xl mt-1" />
                <div>
                  <p className='font-500 text-primary'>{profile.availability.days}</p>
                  <p className='font-400 text-[#7A7D84]'>{profile.availability.hours}</p>
                </div>
              </div>
              <div className="flex text-primary">
                <FaDollarSign className="mr-2 text-xl mt-1" />
                <div>
                  <p className='font-500'>{profile.amount}</p>
                  <p className="font-400 text-[#7A7D84]">{profile.level}</p>
                </div>
              </div>
            </div>
            <button className="mt-4 w-full py-2 bg-primary_1 text-white rounded">
              Book Appointment
            </button>
          </div>
        ))}
      </div>

      <div className="space-y-4 w-full">
        <h2 className='text-2xl font-bold text-primary'>Nearby Doctors</h2>
        <div className="flex flex-col items-center border rounded-[16px] border-gray py-8">
        <FaLocationDot className='text-3xl text-primary mb-4' />
          <p className='text-2xl text-center'>Please enable your location, so we can find nearby doctors</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
