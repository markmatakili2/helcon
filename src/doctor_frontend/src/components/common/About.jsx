import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { CiPlay1 } from "react-icons/ci";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { FaDatabase } from "react-icons/fa6";
import { MdBookOnline } from "react-icons/md";
import { FaLaptopMedical } from "react-icons/fa";
import { AiFillStar } from 'react-icons/ai';
import Frame from './Frame'
import image  from '../../images/doctors.png'
const About = () => {

   const [availability, setAvailability] = useState(false);

   const handleToggle = () => {
      setAvailability(!availability);
   };


   const testimonials = [
      {
         image: '../../images/doctors.png',  // replace with actual image ../../images/doctors.pngs
         name: 'John Doe',
         role: 'Cardiologist Patient',
         comment: 'Got helped !!',
      },
      {
         image: '../../images/doctors.png',
         name: 'Jane Smith',
         role: 'Dentist Patient',
         comment: 'superb service',
      },
      {
         image: '../../images/doctors.png',
         name: 'Sam Wilson',
         role: 'Optician PAtient',
         comment: 'Offered quality services',
      }
   ];






















   return (
      <div className="z-40 relative">

         <Header />
         <div className=" w-full  absolute right-10 md:block hidden">
            <Frame />
         </div>
         <div className="flex flex-col  mx-20 pt-6  ">
            <div className="flex flex-col items-start">
               <div className="">
                  <h2 className="font-600 text-[49px] leading-[52px]">Democratizing  <br />
                     Health Systems</h2>
                  <p className=' pt-6 text-[18.47px] text-[#A7A7A7] font-500 max-w-[600px] md:text-balance'>HELCON is a pioneering healthcare platform utilizing the Internet Computer Protocol (ICP) to revolutionize healthcare communication and management.</p>
               </div>
               <div className=" flex space-x-4 items-center py-8">
                  <button className='w-[
 bg-primary_1 text-white rounded-[13px]  px-4 py-3 mr-6 text-xl'>Book an Appointment</button>

                  <div className='flex items-center space-x-4'>
                     <div className="bg-primary_1 text-white flex justify-center items-center w-6 h-6 rounded-full p-2 ring ring-[#C7C7C7] ring-offset-4">
                        <CiPlay1 className='text-white' />

                     </div>
                     <p className="font-500 text-[
18.47px] leading-[27.71px
]">Watch videos</p>
                  </div>

               </div>


               <div className="md:z-50 self-center flex flex-col rounded-md shadow-lg p-2 pb-4 ">
                  <h2 className=" font-semibold text-md mb-2">Find a Doctor</h2>

                  <div className="flex flex-col space-x-6 md:flex-row md:space-y-0 space-y-6">
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
                           className={`w-12 h-6 flex items-center bg-primary_1 rounded-full p-1 cursor-pointer 
      }`}
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
               <div className="flex flex-col items-start mt-14 mb-20 pr-10 w-full">
                  <div className="self-center flex flex-col items-center mb-6">
                     <h2 className='text-3xl font-semibold leading-[71.66px] text-center text-[#404040] px-6 md:px-40'>Solutions Offered</h2>
                     <p className='text-md leading-[27.71px] text-[#B4B4B4] w-4/5 md:w-2/5 text-center'>We are dedicated to serve you best medical services</p>
                  </div>
                  <div className="mt-4 flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 justify-between w-full">
                     <div className="text-[#404040] flex flex-col items-center bg-white rounded-lg shadow-lg flex-1 p-4">
                        <VscWorkspaceTrusted className="text-3xl my-4 mt-4" />
                        <p className="w-full md:w-2/5 text-center py-4 pb-10">Decentralization and trust</p>
                     </div>
                     <div className="flex flex-col items-center bg-primary_1 rounded-lg flex-1 shadow-lg text-white p-4">
                        <FaDatabase className='text-3xl my-4 mt-4' />
                        <p className="w-full md:w-3/5 text-center py-4 pb-1">Data management and monetization</p>
                     </div>
                     <div className="text-[#404040] flex flex-col items-center bg-white rounded-lg flex-1 shadow-lg p-4">
                        <MdBookOnline className='text-3xl my-4 mt-4' />
                        <p className="w-full md:w-2/5 text-center py-4 pb-10">Online Appointment</p>
                     </div>
                     <div className="text-[#404040] flex flex-col items-center bg-white rounded-lg flex-1 shadow-lg p-4">
                        <FaLaptopMedical className='text-3xl my-4 mt-4' />
                        <p className="w-full md:w-1/5 text-center py-4 pb-10">Remote care</p>
                     </div>
                  </div>
                  <button className="self-center text-white bg-primary_1 px-6 py-2 mt-6 text-lg rounded-lg">Learn more</button>
               </div>

               {/* testimonials */}
               <div className="flex flex-col items-start mt-8 mb-20 pr-10 w-full">
                  <div className="self-center flex flex-col items-center mb-6">
                     <h2 className='text-3xl font-semibold leading-[71.66px] text-center text-[#404040] px-40'>Testimonials</h2>
                     <p className='text-md leading-[27.71px] text-[#B4B4B4] w-3/5 text-center'>See what our happy clients say</p>
                  </div>
                  <div className="mt-4 flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 justify-between w-full">
                     {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-white text-[#404040] py-10 flex items-center rounded-lg shadow-lg flex-1 justify-center">
                           <img src={image} alt={testimonial.name} className="w-16 h-16 rounded-full mr-4 -mt-8" />
                           <div className="flex flex-col items-center">
                              <p className="font-semibold">{testimonial.name}</p>
                              <p className="text-sm text-[#B4B4B4] mb-2">{testimonial.role}</p>
                              <div className="flex space-x-1 mb-4">
                                 {[...Array(5)].map((_, i) => (
                                    <AiFillStar key={i} className="text-primary_1" />
                                 ))}
                              </div>
                              <p className="text-center">{testimonial.comment}</p>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>

            </div>



         </div>














         <Footer />









      </div>

   )
}

export default About








{/* <div className="bg-white p-6 rounded-lg shadow-lg max-w-full mx-auto">
<h2 className="text-xl font-semibold mb-4">Find a Doctor</h2>
<div className="space-y-4 md:space-y-0 md:flex md:space-x-4">
  <input
    type="text"
    placeholder="Name of doctor"
    className="flex-grow p-2 rounded bg-[#DEDEDE] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
  <input
    type="text"
    placeholder="Speciality"
    className="flex-grow p-2 rounded bg-[#DEDEDE] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
  <div className="flex items-center space-x-2">
    <label className="text-gray-700">Availability</label>
    <div
      className={`w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer ${
        availability ? 'bg-[#0A1F4B]' : ''
      }`}
      onClick={handleToggle}
    >
      <div
        className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${
          availability ? 'translate-x-6' : ''
        }`}
      ></div>
    </div>
  </div>
</div>
<button className="mt-4 w-full p-2 rounded bg-[#0A1F4B] text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
  Search
</button>
</div> */}