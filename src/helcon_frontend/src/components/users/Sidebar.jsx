import React from 'react';
import { FaTachometerAlt, FaCalendarAlt, FaUser, FaQuestionCircle, FaSignOutAlt } from 'react-icons/fa';
import logo from '../../images/helcon_logo.png';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const links = [
    { name: 'Dashboard', icon: <FaTachometerAlt />, path: '/home' },
    { name: 'Profile', icon: <FaUser />, path: '/home/profile' },
    { name: 'Calendar', icon: <FaCalendarAlt />, path: '/home/calendar' },
    { name: 'Help', icon: <FaQuestionCircle />, path: '/home/help' },
    { name: 'Logout', icon: <FaSignOutAlt />, path: '/home/logout' }
  ];

  return (
    <div className="fixed top-0 left-0 h-full w-64 text-white border-r-2 border-primary flex flex-col">
      <div className="flex items-center justify-center p-4 relative h-[38px] py-10 w-full">
        <img src={logo} alt="Helcon Logo" className="h-32 w-32 absolute -left-2 -top-4 ml-6 object-fit" />
        <span className="ml-6 text-2xl font-bold -mt-1 text-primary">HelCon</span>
      </div>
      <nav className="flex-1 pl-4 mb-20">
        <ul>
          {links.map((link, index) => (
            <li key={index} className="my-2 rounded-md mr-2 text-primary flex items-center cursor-pointer">
              <NavLink
                to={link.path}
                end
                className={({ isActive }) =>
                  `flex items-center p-4 rounded-md w-full ${isActive ? 'bg-[#0A1F4B] text-white' : 'text-primary'
                  }`
                }
              >
                <span className="mr-3">{link.icon}</span>
                {link.name}
              </NavLink>
            </li>
          ))}
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
