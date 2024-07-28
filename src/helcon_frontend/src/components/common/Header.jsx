import React, { useState, useEffect } from 'react';
import logo from '../../images/helcon_logo.png';
import { MdOutlineKeyboardArrowDown, MdMenu, MdClose } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { login } from '../../features/auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';



const Header = () => {

   const dispatch = useDispatch();
   const authClient = useSelector((state) => state.auth.authClient);


   const [menuOpen, setMenuOpen] = useState(false);

   const toggleMenu = () => {
      setMenuOpen(!menuOpen);
   };
   const handleLogin = () => {
      try {
         dispatch(login())

      } catch (error) {
         console.error('Login failed:', error);
      }

   }
   if (authClient) {
      return <Navigate to='/home' replace />
   }


   return (
      <div className="w-full h-20 flex items-center border-b-[1px] border-[#E3E3E3] mb-10 px-5 relative justify-between">
         <div className="flex items-center relative">
            <div className="absolute md:-left-5 w-32 h-24 flex items-center -left-16">
               <img src={logo} alt="HelCon Logo" className="w-full h-full object-fit mt-2 ml-2" />
            </div>
            <h2 className="font-bold text-2xl leading-[38.36px] text-primary_1 ml-6 sm:ml-20 md:ml-16 ">HelCon</h2>
         </div>
         <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-2xl">
               {menuOpen ? <MdClose /> : <MdMenu />}
            </button>
         </div>
         <ul className={`md:flex gap-5 lg:gap-10 absolute md:relative top-20 md:top-auto left-0 w-full md:w-auto bg-white md:bg-transparent md:flex-row flex-col items-center ${menuOpen ? 'flex z-50' : 'hidden'}`}>
            <li className="font-medium text-[#404040] text-[18px] leading-[22px]">
               <NavLink to="/" className={({ isActive }) => isActive ? 'text-primary_1' : 'text-[#404040]'}>Home</NavLink>
            </li>
            <li className="font-medium text-[#404040] text-[18px] leading-[22px] flex relative">
               <NavLink to="/services" className={({ isActive }) => isActive ? 'text-primary_1' : 'text-[#404040]'}>Services</NavLink>
               <MdOutlineKeyboardArrowDown className="text-primary text-2xl" />
            </li>
            <li className="font-medium text-[#404040] text-[18px] leading-[22px]">
               <NavLink to="/specialists" className={({ isActive }) => isActive ? 'text-primary_1' : 'text-[#404040]'}>Specialists</NavLink>
            </li>
            <li className="font-medium text-[#404040] text-[18px] leading-[22px]">
               <NavLink to="/about-us" className={({ isActive }) => isActive ? 'text-primary_1' : 'text-[#404040]'}>About us</NavLink>
            </li>
            <li className="font-medium text-[#404040] text-[18px] leading-[22px]">
               <NavLink to="" className={({ isActive }) => isActive ? 'text-primary_1' : 'text-[#404040]'}>FAQ</NavLink>
            </li>
         </ul>
         <div className="hidden md:flex items-center">
            <button className="bg-primary_1 h-10 w-32 sm:w-36 lg:w-40 rounded-[6px] text-white py-2 px-4"
               onClick={handleLogin}>Get Started</button>
         </div>
      </div>
   );
};

export default Header;
