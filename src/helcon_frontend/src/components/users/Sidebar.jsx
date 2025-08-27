import React, { useEffect } from 'react';
import { FaTachometerAlt, FaCalendarAlt, FaUser, FaQuestionCircle, FaSignOutAlt, FaBrain, FaCreditCard } from 'react-icons/fa';
import logo from '../../images/helcon_logo.png';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { logout } from '../../features/auth/authSlice';
import { useDispatch, useSelector, } from 'react-redux';
import {hideSidebar} from "../../features/SidebarBarSlice"

const Sidebar = () => {
  const isOpen = useSelector((state)=>state.sidebar.isOpen)
  const navigate = useNavigate()
  const location = useLocation()
  useEffect(() => {
  }, [location])

 


  const dispatch = useDispatch()
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate("/")

  }
  const closeSidebar = ()=>{
    dispatch(hideSidebar())
  }

 

  const links = [
    { name: 'Dashboard', icon: <FaTachometerAlt />, path: '/home' },
    { name: 'Profile', icon: <FaUser />, path: '/home/profile' },
    { name: 'Calendar', icon: <FaCalendarAlt />, path: '/home/calendar' },
    { name: 'Help', icon: <FaQuestionCircle />, path: '/home/help' },


  ];


  return (
    <div className="fixed top-0 left-0 h-full w-64 text-white border-r-2 border-primary flex flex-col">
      <div className="flex items-center justify-center p-4 relative h-[38px] py-10 w-full">
        <img src={logo} alt="Helcon Logo" className="h-32 w-32 absolute -left-2 -top-4 ml-6 object-fit" />
        <span className="ml-6 text-2xl font-bold -mt-1 text-primary">HelCon</span>
      </div>
      <nav className="flex-1 pl-4 mb-20">
        <ul>

          {location.pathname.startsWith('/d') ? (<> <li className="my-2 rounded-md mr-2 text-primary flex items-center cursor-pointer" 
          onClick={closeSidebar}>
            <NavLink className={({ isActive }) =>
              `flex items-center p-4 rounded-md w-full ${isActive ? 'bg-[#0A1F4B] text-white' : (isOpen ? 'text-white':'text-primary')   }`
            } to="/doctors" end> <span className="mr-3"><FaTachometerAlt /></span>Dashboard</NavLink>

          </li>
            <li className="my-2 rounded-md mr-2 text-primary flex items-center cursor-pointer"
            onClick={closeSidebar}><NavLink className={({ isActive }) =>
              `flex items-center p-4 rounded-md w-full ${isActive ? 'bg-[#0A1F4B] text-white' : (isOpen ? 'text-white':'text-primary')   }`
            } to="/doctors/patient-records"> <span className="mr-3"><FaTachometerAlt /></span>Patient Records</NavLink></li>
            <NavLink className={({ isActive }) =>
              `flex items-center p-4 rounded-md w-full ${isActive ? 'bg-[#0A1F4B] text-white' : (isOpen ? 'text-white':'text-primary')   }`
            } to="/doctors/availability"> <span className="mr-3"><FaTachometerAlt /></span>My availablity</NavLink>
            <li className="my-2 rounded-md mr-2 text-primary flex items-center cursor-pointer" 
            onClick={closeSidebar}> <NavLink className={({ isActive }) =>
              `flex items-center p-4 rounded-md w-full ${isActive ? 'bg-[#0A1F4B] text-white' : (isOpen ? 'text-white':'text-primary')   }`
            } to="/doctors/consults"> <span className="mr-3"><FaTachometerAlt /></span>My consults</NavLink></li>
            <li className="my-2 rounded-md mr-2 text-primary flex items-center cursor-pointer" 
            onClick={closeSidebar}>
                <NavLink className={({ isActive }) =>
                  `flex items-center p-4 rounded-md w-full ${isActive ? 'bg-[#0A1F4B] text-white' : (isOpen ? 'text-white':'text-primary')
                  }`
                } to="/doctors/my-account"> <span className="mr-3"> <FaUser /></span>Profile</NavLink>
              </li>
            <li className="my-2 rounded-md mr-2 text-primary flex items-center cursor-pointer"
            onClick={closeSidebar}>            <NavLink className={({ isActive }) =>
              `flex items-center p-4 rounded-md w-full ${isActive ? 'bg-[#0A1F4B] text-white' : (isOpen ? 'text-white':'text-primary')   }`
            } to="/doctors/chats"> <span className="mr-3"><FaTachometerAlt /></span>Chats</NavLink></li></>) : (
            <>
              <li className="my-2 rounded-md mr-2 text-primary flex items-center cursor-pointer" 
              onClick={closeSidebar}>
                <NavLink className={({ isActive }) =>
                  `flex items-center p-4 rounded-md w-full ${isActive ? 'bg-[#0A1F4B] text-white' : (isOpen ? 'text-white':'text-primary')
                  }`
                } to="/home"> <span className="mr-3"><FaTachometerAlt /></span>Dashboard</NavLink>
              </li>
              <li className="my-2 rounded-md mr-2 text-primary flex items-center cursor-pointer" 
              onClick={closeSidebar}>
                <NavLink className={({ isActive }) =>
                  `flex items-center p-4 rounded-md w-full ${isActive ? 'bg-[#0A1F4B] text-white' : (isOpen ? 'text-white':'text-primary')
                  }`
                } to="/home/profile"> <span className="mr-3"> <FaUser /></span>Profile</NavLink>
              </li>
              <li className="my-2 rounded-md mr-2 text-primary flex items-center cursor-pointer" 
              onClick={closeSidebar}>
                <NavLink className={({ isActive }) =>
                  `flex items-center p-4 rounded-md w-full ${isActive ? 'bg-[#0A1F4B] text-white' : (isOpen ? 'text-white':'text-primary')
                  }`
                } to="/home/calendar"><span className="mr-3"><FaCalendarAlt /></span> Calendar</NavLink>
              </li>
              <li className="my-2 rounded-md mr-2 text-primary flex items-center cursor-pointer" 
              onClick={closeSidebar}>
                <NavLink className={({ isActive }) =>
                  `flex items-center p-4 rounded-md w-full ${isActive ? 'bg-[#0A1F4B] text-white' : (isOpen ? 'text-white':'text-primary')
                  }`
                } to="/home/ai-insights"><span className="mr-3"><FaBrain /></span> AI Insights</NavLink>
              </li>
              <li className="my-2 rounded-md mr-2 text-primary flex items-center cursor-pointer" 
              onClick={closeSidebar}>
                <NavLink className={({ isActive }) =>
                  `flex items-center p-4 rounded-md w-full ${isActive ? 'bg-[#0A1F4B] text-white' : (isOpen ? 'text-white':'text-primary')
                  }`
                } to="/home/payments"><span className="mr-3"><FaCreditCard /></span> Payments</NavLink>
              </li>
            </>)}
          <li className="my-2 rounded-md mr-2 text-primary flex items-center cursor-pointer"
          onClick={closeSidebar}>
            <NavLink className={({ isActive }) =>
              `flex items-center p-4 rounded-md w-full ${isActive ? 'bg-[#0A1F4B] text-white' : (isOpen ? 'text-white':'text-primary')   }`
            } to="/home/help"><span className="mr-3"><FaQuestionCircle /></span> Help</NavLink>
          </li>
          <button className={`p-4 my-2 rounded-md mr-2  flex items-center cursor-pointer ${isOpen ?'text-white':'text-primary'}`}
            onClick={handleLogout}> <span className="mr-3"><FaSignOutAlt /></span>logout</button>
        </ul>
      </nav>
      <div className="self-center mt-auto p-4 flex items-center justify-center text-center text-md text-white rounded-tr-full rounded-tl-full h-64 w-64 bg-[#2E2E2E]  pt-10 ">
        <p>
          Getter Faster and <br /> Better Healthcare
        </p>
      </div>
    </div>
  );
};

export default Sidebar;