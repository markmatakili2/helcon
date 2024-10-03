import React, { useEffect } from 'react';
import { HiMagnifyingGlass } from "react-icons/hi2";
import { CiLocationOn } from "react-icons/ci";
import image from '../../images/doctors.png';
import { useLocation } from 'react-router-dom';

const Banner = () => {
   const location = useLocation();

   useEffect(() => {
      // Perform any actions based on location change if necessary
   }, [location]);

   return (
      <div className={`${location.pathname === '/' ? 'mx-4 md:mx-[60px]' : ''} relative`}>
         <div className="flex flex-col items-center">
            {/* Main banner content */}
            <div className="rounded-[16px] bg-gradient-to-r from-[#225364] to-[#002457] h-auto md:h-[262px] w-full pl-4 py-6 md:py-10 flex flex-col items-start relative">
               <div className="text-white gap-[12px] mb-6 md:mb-6"> {/* Adjusted margin-bottom for mobile */}
                  <h2 className="font-600 text-[24px] md:text-[30px] leading-[35px] md:leading-[45px]">
                     No need to visit local hospitals<br />
                     Get your consultation online
                  </h2>
                  <p className="font-500 text-[16px] md:text-[20px] leading-[24px] md:leading-[30px] mt-2 md:mt-4">
                     Audio/text/video/in-person
                  </p>
               </div>

               {/* Spacing added for mobile screens */}
               <div className="flex gap-[14px] h-[30px] w-auto md:w-[269px] justify-between items-center absolute bottom-6 left-4 md:bottom-8 md:left-6 z-10">
                  <div className="flex items-center h-[24px]">
                     <img src={image} alt="Doctor Icon" className="h-[24px] w-[24px] ring ring-white ring-offset-0 rounded-full" />
                     <img src={image} alt="Doctor Icon" className="h-[24px] w-[24px] ring ring-white ring-offset-0 rounded-full -mx-1" />
                     <img src={image} alt="Doctor Icon" className="h-[24px] w-[24px] ring ring-white ring-offset-0 rounded-full" />
                  </div>
                  <p className="text-md leading-[24px] font-500 h-[24px] text-white">+180 doctors are online</p>
               </div>
            </div>

            {/* Search bar responsiveness on mobile */}
            <div className={`${location.pathname === '/home' ? 'hidden' : 'block'} w-full md:w-[610px] rounded-[16px] bg-white py-3 px-4 md:py-3 md:px-5 flex flex-col md:flex-row justify-between shadow-md items-center text-[#7A7D84] lg:-mt-8 md:-mt-7 relative z-20`}>
               <div className="flex items-center w-full mb-3 md:mb-0">
                  <HiMagnifyingGlass className="text-xl mr-2" />
                  <input
                     type="text"
                     className="w-full md:w-auto bg-transparent outline-none text-[14px] py-2 px-2 border border-gray-300 rounded-lg"
                     placeholder="Find doctors"
                  />
               </div>
               <div className="flex items-center flex-col md:flex-row gap-3 mt-3 md:mt-0 w-full md:w-auto">
                  <div className="flex items-center w-full md:w-auto">
                     <CiLocationOn className="text-xl mr-2" />
                     <input
                        type="text"
                        className="w-full md:w-auto bg-transparent outline-none text-[14px] py-2 px-2 border border-gray-300 rounded-lg"
                        placeholder="Location"
                     />
                  </div>
                  <button className="bg-primary_1 text-white h-full rounded-lg px-4 py-2 w-full md:w-[113px] font-500 text-[14px]">Search</button>
               </div>
            </div>

            {/* Dots navigation */}
            <div className="flex items-center gap-1 py-8 justify-center">
               <div className="bg-primary_1 w-[6px] h-[6px] rounded-full"></div>
               <div className="bg-[#01BC8F] w-[6px] h-[6px] rounded-full"></div>
               <div className="bg-[#01BC8F] w-[6px] h-[6px] rounded-full"></div>
            </div>

            {/* Image on large screens only */}
            <div className={`absolute ${location.pathname === '/' ? 'lg:-top-6 md:right-2 right-6 bg-none hidden md:block' : 'top-2 -right-2'} w-64 h-3/5 hidden md:block`}>
               <img src={image} alt="Doctor" className="h-full w-full object-cover" />
            </div>
         </div>
      </div>
   );
};

export default Banner;
