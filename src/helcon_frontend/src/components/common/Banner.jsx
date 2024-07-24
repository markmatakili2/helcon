import React,{useEffect} from 'react';
import { HiMagnifyingGlass } from "react-icons/hi2";
import { CiLocationOn } from "react-icons/ci";
import image from '../../images/doctors.png';
import { useLocation } from 'react-router-dom';


const Banner = () => {
   const location = useLocation()
   useEffect(()=>{
      console.log(location.pathname)


   },[location])
   
   return (
      <div className={`${location.pathname==='/' ? 'mx-4 md:mx-[60px] ': ''} relative`}>
         <div className="flex flex-col items-center">
            <div className="rounded-[16px] bg-gradient-to-r from-[#225364] to-[#002457] h-[262px] w-full pl-4 py-6 flex flex-col items-start md:items-start relative">
               <div className="text-white gap-[12px] mb-4 md:mb-4">
                  <h2 className="font-600 text-[24px] md:text-[30px] leading-[35px] md:leading-[45px]">
                     No need to visit local hospitals<br />
                     Get your consultation online
                  </h2>
                  <p className="font-500 text-[16px] md:text-[20px] leading-[24px] md:leading-[30px] mt-2 md:mt-4">Audio/text/video/in-person</p>
               </div>
               <div className="flex gap-[14px] h-[30px] w-auto md:w-[269px] justify-between items-center absolute bottom-6 left-4 md:bottom-8 md:left-6 z-10">
                  <div className="flex items-center h-[24px]">
                     <img src={image} alt="Doctor Icon" className="h-[24px] w-[24px] ring ring-white ring-offset-0 rounded-full" />
                     <img src={image} alt="Doctor Icon" className="h-[24px] w-[24px] ring ring-white ring-offset-0 rounded-full -mx-1" />
                     <img src={image} alt="Doctor Icon" className="h-[24px] w-[24px] ring ring-white ring-offset-0 rounded-full" />
                  </div>
                  <p className="text-md leading-[24px] font-500 h-[24px] text-white">+180 doctors are online</p>
               </div>
            </div>

            <div className={`${location.pathname ==='/home'?'hidden':'block'} w-full md:w-[610px] rounded-[16px] bg-white py-3 px-5 flex flex-col md:flex-row justify-between shadow-md items-center text-[#7A7D84] -mt-8 relative z-20`}>
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

            <div className="flex items-center gap-1 py-8 justify-center">
               <div className="bg-primary_1 w-[6px] h-[6px] rounded-full"></div>
               <div className="bg-[#01BC8F] w-[6px] h-[6px] rounded-full"></div>
               <div className="bg-[#01BC8F] w-[6px] h-[6px] rounded-full"></div>
            </div>
            <div className={`absolute ${location.pathname==='/'?'  -top-6 right-6 bg-none':'top-2 -right-2'} w-64 h-3/5`}>
               <img src={image} alt="" className="h-full w-full object-cover" />
            </div>
         </div> 
      </div>
   )
}

export default Banner;
