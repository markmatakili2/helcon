import React, { useState, useEffect } from 'react';
import { MdOutlineKeyboardArrowDown, MdMenu, MdClose } from "react-icons/md";
import { FaRobot, FaBlog, FaStethoscope, FaUsers, FaInfoCircle, FaQuestionCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getPrincipal, addIdentity, getUserData } from '../../features/auth/account';

const Header = () => {
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const [menuOpen, setMenuOpen] = useState(false);
   const [servicesOpen, setServicesOpen] = useState(false);
   const [aiServicesOpen, setAiServicesOpen] = useState(false);

   const toggleMenu = () => {
      setMenuOpen(!menuOpen);
   };

   const handleLogin = async () => {
      const result = await dispatch(getPrincipal());
    
      if (getPrincipal.fulfilled.match(result)) {
        const identifier = localStorage.getItem('identifier');
    
        if (identifier) {
          const queryId = JSON.parse(identifier);
          dispatch(getUserData({ id: queryId.toNum }));
        } else {
          const identityResult = await dispatch(addIdentity({ principal: result.payload }));
    
          if (addIdentity.fulfilled.match(identityResult)) {
            navigate('/new-account');
          } else {
            console.log('Failed to add identity', identityResult);
          }
        }
      } else {
        console.log('Error getting principal');
      }
   };

   return (
      <div className="w-full h-20 flex items-center border-b border-gray-200 bg-white/95 backdrop-blur-md px-5 relative justify-between shadow-sm sticky top-0 z-50">
         <div className="flex items-center">
            <div className="flex items-center space-x-3">
               <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center">
                  <FaStethoscope className="text-white text-xl" />
               </div>
               <h2 className="font-bold text-2xl bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  HelCon
               </h2>
            </div>
         </div>

         <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-2xl text-gray-700 hover:text-blue-600 transition-colors">
               {menuOpen ? <MdClose /> : <MdMenu />}
            </button>
         </div>

         <ul className={`md:flex gap-8 absolute md:relative top-20 md:top-auto left-0 w-full md:w-auto bg-white md:bg-transparent md:flex-row flex-col items-center shadow-lg md:shadow-none ${menuOpen ? 'flex z-50 py-4' : 'hidden'}`}>
            <li className="font-medium text-gray-700 text-lg hover:text-blue-600 transition-colors">
               <NavLink to="/" className={({ isActive }) => isActive ? 'text-blue-600 font-semibold' : 'text-gray-700'}>
                  <div className="flex items-center space-x-2">
                     <span>Home</span>
                  </div>
               </NavLink>
            </li>
            
            <li className="relative group">
               <div className="font-medium text-gray-700 text-lg flex items-center cursor-pointer hover:text-blue-600 transition-colors"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}>
                  <FaStethoscope className="text-lg mr-2" />
                  <span>Services</span>
                  <MdOutlineKeyboardArrowDown className="ml-1 text-xl" />
               </div>
               {servicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2"
                       onMouseEnter={() => setServicesOpen(true)}
                       onMouseLeave={() => setServicesOpen(false)}>
                     <NavLink to="/services/telemedicine" className="flex items-center px-4 py-3 hover:bg-blue-50 transition-colors">
                        <FaStethoscope className="text-blue-600 mr-3" />
                        <div>
                           <div className="font-medium text-gray-800">Telemedicine</div>
                           <div className="text-sm text-gray-500">Virtual consultations</div>
                        </div>
                     </NavLink>
                     <NavLink to="/services/appointments" className="flex items-center px-4 py-3 hover:bg-blue-50 transition-colors">
                        <FaUsers className="text-blue-600 mr-3" />
                        <div>
                           <div className="font-medium text-gray-800">Appointments</div>
                           <div className="text-sm text-gray-500">Book with specialists</div>
                        </div>
                     </NavLink>
                  </div>
               )}
            </li>

            <li className="relative group">
               <div className="font-medium text-gray-700 text-lg flex items-center cursor-pointer hover:text-blue-600 transition-colors"
                    onMouseEnter={() => setAiServicesOpen(true)}
                    onMouseLeave={() => setAiServicesOpen(false)}>
                  <FaRobot className="mr-2" />
                  <span>HelconAI</span>
                  <MdOutlineKeyboardArrowDown className="ml-1 text-xl" />
               </div>
               {aiServicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-100 py-2"
                       onMouseEnter={() => setAiServicesOpen(true)}
                       onMouseLeave={() => setAiServicesOpen(false)}>
                     <NavLink to="/helcon-ai/consultation" className="flex items-center px-4 py-3 hover:bg-blue-50 transition-colors">
                        <FaRobot className="text-purple-600 mr-3" />
                        <div>
                           <div className="font-medium text-gray-800">Free AI Consultation</div>
                           <div className="text-sm text-gray-500">Discover your AI needs</div>
                        </div>
                     </NavLink>
                     <NavLink to="/helcon-ai/chatbots" className="flex items-center px-4 py-3 hover:bg-blue-50 transition-colors">
                        <FaRobot className="text-purple-600 mr-3" />
                        <div>
                           <div className="font-medium text-gray-800">AI Chatbots</div>
                           <div className="text-sm text-gray-500">Intelligent customer support</div>
                        </div>
                     </NavLink>
                     <NavLink to="/helcon-ai/automation" className="flex items-center px-4 py-3 hover:bg-blue-50 transition-colors">
                        <FaRobot className="text-purple-600 mr-3" />
                        <div>
                           <div className="font-medium text-gray-800">Automation Suite</div>
                           <div className="text-sm text-gray-500">Email, SMS, Call automation</div>
                        </div>
                     </NavLink>
                     <NavLink to="/helcon-ai/training" className="flex items-center px-4 py-3 hover:bg-blue-50 transition-colors">
                        <FaRobot className="text-purple-600 mr-3" />
                        <div>
                           <div className="font-medium text-gray-800">AI Training & Education</div>
                           <div className="text-sm text-gray-500">Learn AI implementation</div>
                        </div>
                     </NavLink>
                  </div>
               )}
            </li>

            <li className="font-medium text-gray-700 text-lg hover:text-blue-600 transition-colors">
               <NavLink to="/specialists" className={({ isActive }) => isActive ? 'text-blue-600 font-semibold' : 'text-gray-700'}>
                  <div className="flex items-center space-x-2">
                     <FaUsers className="text-lg" />
                     <span>Specialists</span>
                  </div>
               </NavLink>
            </li>

            <li className="font-medium text-gray-700 text-lg hover:text-blue-600 transition-colors">
               <NavLink to="/about-us" className={({ isActive }) => isActive ? 'text-blue-600 font-semibold' : 'text-gray-700'}>
                  <div className="flex items-center space-x-2">
                     <FaInfoCircle className="text-lg" />
                     <span>About</span>
                  </div>
               </NavLink>
            </li>

            <li className="font-medium text-gray-700 text-lg hover:text-blue-600 transition-colors">
               <NavLink to="/blog" className={({ isActive }) => isActive ? 'text-blue-600 font-semibold' : 'text-gray-700'}>
                  <div className="flex items-center space-x-2">
                     <FaBlog className="text-lg" />
                     <span>Blog</span>
                  </div>
               </NavLink>
            </li>

            <li className="font-medium text-gray-700 text-lg hover:text-blue-600 transition-colors">
               <NavLink to="/faq" className={({ isActive }) => isActive ? 'text-blue-600 font-semibold' : 'text-gray-700'}>
                  <div className="flex items-center space-x-2">
                     <FaQuestionCircle className="text-lg" />
                     <span>FAQ</span>
                  </div>
               </NavLink>
            </li>

            <button className="md:hidden bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-900 transition-all transform hover:scale-105"
               onClick={handleLogin}>
               Get Started
            </button>
         </ul>

         <div className="hidden md:flex items-center">
            <button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-900 transition-all transform hover:scale-105 shadow-lg"
               onClick={handleLogin}>
               Get Started
            </button>
         </div>
      </div>
   );
};

export default Header;