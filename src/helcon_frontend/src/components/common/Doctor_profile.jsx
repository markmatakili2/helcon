import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { FaClock, FaDollarSign, FaGreaterThan } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaLocationDot } from 'react-icons/fa6';
import { useLocation, useNavigate } from 'react-router-dom';
import image from '../../images/doctors.png';
import { FaUserCircle } from "react-icons/fa";


const ProfileCard = () => {
  const navigate = useNavigate()
  const location = useLocation()
  useEffect(() => { }, [location])
  const profile = useSelector((state) => state.profile.profile);
  const auth = useSelector((state) => state.auth.authClient)

  const [availableDoctors, setAvailableDoctors] = useState(null)

  const { doctors, status } = useSelector((state) => state.doctorList)
  if (doctors && status === 'succeeded') {
    // console.log('here are the doctors',doctors)
    //  const threeDoctors = doctors?.slice(0,3)
    //  setAvailableDoctors(threeDoctors)

  }
  const markCalendar = () => {
    if (auth) {

      window.location.href = 'https://calendly.com/info-helcon/30min';
    }
    else {
      alert('log in first to book an appointment')
    }
  }


  return (
    <div className={`flex flex-col ${location.pathname === '/' ? 'mx-4 md:mx-[60px]  px-2' : ' '}`}>
      <div className="flex justify-between items-center py-2 mb-4">
        <h2 className='text-2xl font-bold text-primary'>Recommended Doctors</h2>
        <Link to="/view-all" className='font-semibold flex items-center text-xl relative px-6'>
          <button className='flex items-center relative bg-primary_1 text-white px-4 py-2 rounded-lg'
          >
            View All <FaGreaterThan className='ml-2 text-sm' />
          </button>
        </Link>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {doctors?.map((doctor, index) => (
          <div key={index} className="border-2 rounded-[16px] p-5 pl-[30px] border-slate-300 text-primary flex-1 min-w-[300px]">
            <div className="flex">
              {/* <img src={image} alt="Doctor" className="w-16 h-16 rounded-full bg-primary" /> */}<FaUserCircle className='text-4xl mt-1' />
              <div className="ml-4">
                <div className="font-bold text-lg normal-case ">{doctor.name}</div>
                <div className="text-primary-300 normal-case ">
                  {doctor.country} <span className="mx-2">|</span> {Number(doctor.age)} years experience
                </div>
                <div className=" normal-case mt-1 px-2 py-1 bg-blue-100 text-blue-600 rounded inline-block">
                  {doctor.specialism}
                </div>
              </div>
            </div>
            <hr className="my-4" />
            {/* <div className='flex gap-6'>
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
            </div> */}
            <button className="mt-4 w-full py-2 bg-primary_1 text-white rounded"
            onClick={markCalendar}>
              Book Appointment
            </button>
          </div>
        ))}
      </div>
      <div className={`${location.pathname === '/' ? 'space-y-4 w-full' : 'hidden'}`}>
        <h2 className='text-2xl font-bold text-primary py-4'>Nearby Doctors</h2>
        <div className="flex flex-col items-center border rounded-[16px] border-gray py-8">
          <FaLocationDot className='text-3xl text-primary mb-4' />
          <p className='text-2xl text-center'>Please enable your location, so we can find nearby doctors</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
