import React, { useState } from 'react'
import Header from './Header';
import Footer from './Footer';
import ChatBot from './ChatBot';
import image from '../../images/image_2.png'
import Frame from './Frame'
import doc from '../../images/doc5.png'
import { useNavigate, NavLink } from 'react-router-dom';

const Specialists = () => {
   const navigate = useNavigate()

   const handleLogin = () => {
      navigate('/doctors')
   }

   const [availability, setAvailability] = useState(false);

   const handleToggle = () => {
      setAvailability(!availability);
   };

   return (
      <div className='z-40 relative'>
         <Header />

         <div className="w-full absolute right-10 md:block hidden">
            <Frame />
         </div>

         <div className="mx-4 md:mx-20 pt-6 flex flex-col">
            <div className="flex flex-col items-start space-y-8 p-4 md:p-8 mb-6">
               <h2 className="font-600 text-3xl sm:text-4xl md:text-5xl leading-tight text-primary_1">
                  We care <br />about your health
               </h2>

               <p className="pt-4 md:pt-6 text-base md:text-lg text-[#A7A7A7] font-500 max-w-full md:max-w-[600px]">
                  Become one of our HealthConnect Specialists and get to help even more patients.
               </p>

               <button className="bg-primary_1 text-white px-8 py-3 md:px-10 md:py-4 rounded-lg text-lg md:text-base shadow-lg hover:bg-primary_2 transition duration-300"
                  onClick={handleLogin}
                  type="button">
                  <NavLink to="/doctors"> Get Started</NavLink>
               </button>
            </div>

            {/* Search bar section */}
            <div className="md:z-50 self-center flex flex-col rounded-md shadow-lg p-2 pb-4">
               <h2 className="font-semibold text-md mb-2">Find a Doctor</h2>

               <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-6">
                  <input
                     type="text"
                     placeholder="Name of doctor"
                     className="text-center flex-grow p-2 rounded bg-[#DEDEDE] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                     type="text"
                     placeholder="Speciality"
                     className="text-center flex-grow p-2 rounded bg-[#DEDEDE] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />

                  <div className="flex items-center space-x-2">
                     <label className="text-gray-700">Availability</label>
                     <div
                        className="w-12 h-6 flex items-center bg-primary_1 rounded-full p-1 cursor-pointer"
                        onClick={handleToggle}
                     >
                        <div
                           className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${availability ? 'translate-x-6' : ''
                              }`}
                        ></div>
                     </div>
                  </div>

                  <button className="text-xl px-6 md:w-full p-2 rounded bg-[#0A1F4B] text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                     Search
                  </button>
               </div>
            </div>

            {/* Doctors grid */}
            <div className="mt-16 mb-16 px-4 md:px-24 flex flex-col text-center">
               <div className="mb-8">
                  <h2 className="text-2xl md:text-3xl font-semibold leading-tight text-[#404040]">
                     Meet Our Doctors
                  </h2>
                  <p className="text-md text-[#B4B4B4] mt-2">
                     Well qualified doctors are ready to serve you
                  </p>
               </div>

               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[1, 2, 3, 4].map((_, index) => (
                     <div key={index} className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center">
                        <span className="self-start bg-gray-300 text-gray-700 rounded-full px-3 py-1 text-sm mb-2 ml-16">
                           Available
                        </span>
                        <div className="overflow-hidden bg-primary_1 w-full h-64 mb-2 rounded-lg relative">
                           <img src={doc} alt="Doctor" className="object-cover absolute md:-top-6 md:-left-2 -left-2 -top-12" />
                        </div>
                        <p className="text-lg font-semibold">Dr. John Doe</p>
                        <p className="text-sm text-gray-500 mb-2">Cardiologist</p>
                        <div className="flex items-center mb-4">
                           <span className="text-primary_1">★★★★☆</span>
                           <span className="text-sm text-gray-500 ml-2">(120)</span>
                        </div>
                        <button className="bg-primary_1 text-white rounded-full px-4 py-2">
                           Book an Appointment
                        </button>
                     </div>
                  ))}
               </div>

               <div className="mt-8">
                  <button className="bg-primary_1 text-white rounded-full px-6 py-2">
                     See More
                  </button>
               </div>
            </div>
         </div>

         <Footer />
         <ChatBot />
      </div>
   )
}

export default Specialists;
