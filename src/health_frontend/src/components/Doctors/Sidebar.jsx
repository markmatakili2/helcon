import React, { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

import icons from "../../../utils/icons";
import { useSelector } from "react-redux";  // Adjust the path as per your project structure
import { toggleSidebar } from "../../Slice/sidebarSlice";
import { useDispatch } from "react-redux";
const Sidebar = () => {

  const dispatch = useDispatch()
  const location = useLocation();
  const slicedLocation = location.pathname.substring(1);
  
  const sidebar = useSelector((state)=>state.sidebar.isSidebarOpen)
  
  const handleLinkclick = ()=>{
    dispatch(toggleSidebar())
  }

  

  return (
    <div
    className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white flex flex-col justify-between transition-transform  transform md:translate-x-0  ${
      sidebar ? "translate-x-0" : "-translate-x-full "
    } ${slicedLocation.includes('doctor') ? 'md:block md:relative': 'md:hidden'}`}
  >
      <nav className="flex-grow p-4">
        <ul>

          {location.pathname === '/' &&(
<>
<li className="mt-10 mb-12" onClick={handleLinkclick} >
            <NavLink
              to=""
              className={({ isActive }) =>
                `flex items-center p-2 rounded ${isActive ? "bg-[blue]" : ""}`
              }
            >
              <span className="mr-3">{icons.home}</span>
              Home
            </NavLink>
          </li>
          <li className="mb-8" onClick={handleLinkclick} >
            <NavLink
              to=""
              className={({ isActive }) =>
                `flex items-center p-2 rounded ${isActive ? "bg-[blue]" : ""}`
              }
            >
              <span className="mr-3">{icons.user}</span>
              About
            </NavLink>
          </li>
          <li className="mb-8" onClick={handleLinkclick} >
            <NavLink
              to=""
              className={({ isActive }) =>
                `flex items-center p-2 rounded ${isActive ? "bg-[blue]" : ""}`
              }
            >
              <span className="mr-3">{icons.user}</span>
              Services
            </NavLink>
          </li>
          <li className="mb-8" onClick={handleLinkclick} >
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `flex items-center p-2 rounded ${isActive ? "bg-[blue]" : ""}`
              }
            >
              <span className="mr-3">{icons.user}</span>
              sign in
            </NavLink>
          </li>

</>

            
          )}
         {slicedLocation.includes('doctor') && (
          <>
           <li className="mb-4" onClick={handleLinkclick} >
            <NavLink
              to="profile"
              className={({ isActive }) =>
                `flex items-center p-2 rounded ${isActive ? "bg-[blue]" : ""}`
              }
            >
              <span className="mr-3">{icons.user}</span>
              My Profile
            </NavLink>
          </li>
          <li className="mb-4" onClick={handleLinkclick}>
            <NavLink
              to=""
              className={({ isActive }) =>
                `flex items-center p-2 rounded ${
                  isActive && slicedLocation === "doctor" ? "bg-[blue]" : ""
                }`
              }
            >
              <span className="mr-3">{icons.tasks}</span>
              Requests
            </NavLink>
          </li>
          <li className="mb-4" onClick={handleLinkclick}>
            <NavLink
              to="scheduled-requests"
              className={({ isActive }) =>
                `flex items-center p-2 rounded ${isActive ? "bg-[blue]" : ""}`
              }
            >
              <span className="mr-3">{icons.calendarAlt}</span>
              Scheduled Requests
            </NavLink>
          </li>
          <li className="mb-4" onClick={handleLinkclick}>
            <NavLink
              to="create-report"
              className={({ isActive }) =>
                `flex items-center p-2 rounded ${isActive ? "bg-[blue]" : ""}`
              }
            >
              <span className="mr-3">{icons.chart}</span>
              Create Report
            </NavLink>
          </li>
          <li className="mb-4" onClick={handleLinkclick}>
            <NavLink
              to="basic-data"
              className={({ isActive }) =>
                `flex items-center p-2 rounded ${isActive ? "bg-[blue]" : ""}`
              }
            >
              <span className="mr-3">{icons.db}</span>
              Basic Data
            </NavLink>
          </li>
          <li className="mb-4" onClick={handleLinkclick}>
            <NavLink
              to="query-data"
              className={({ isActive }) =>
                `flex items-center p-2 rounded ${isActive ? "bg-[blue]" : ""}`
              }
            >
              <span className="mr-3">{icons.search}</span>
              Query Data
            </NavLink>
          </li>
          </>
         )}
          
          {/* Conditional rendering for 'patient' location */}
          {slicedLocation.includes('patient')  && (
            <>
              <li className="mb-4" onClick={handleLinkclick}>
                <NavLink
                  to=""
                  className={({ isActive }) =>
                    `flex items-center p-2 rounded ${isActive &&  slicedLocation==='patient'? "bg-[blue]" : ""}`
                  }
                >
                  <span className="mr-3">{icons.home}</span>
                  Home
                </NavLink>
              </li>
              <li className="mb-4" onClick={handleLinkclick}>
                <NavLink
                  to="user-info"
                  className={({ isActive }) =>
                    `flex items-center p-2 rounded ${isActive ? "bg-[blue]" : ""}`
                  }
                >
                  <span className="mr-3">{icons.db}</span>
                  Data
                </NavLink>
              </li>
              <li className="mb-4" onClick={handleLinkclick}>
                <NavLink
                  to="appointments"
                  className={({ isActive }) =>
                    `flex items-center p-2 rounded ${isActive ? "bg-[blue]" : ""}`
                  }
                >
                  <span className="mr-3">{icons.calendarAlt}</span>
                  Appointments
                </NavLink>
              </li>
              <li className="mb-4" onClick={handleLinkclick}>
                <NavLink
                  to="messages"
                  className={({ isActive }) =>
                    `flex items-center p-2 rounded ${isActive ? "bg-[blue]" : ""}`
                  }
                >
                  <span className="mr-3">{icons.message}</span>
                  Messages
                </NavLink>
              </li>
              <li className="mb-4" onClick={handleLinkclick}>
                <NavLink
                  to="events"
                  className={({ isActive }) =>
                    `flex items-center p-2 rounded ${isActive ? "bg-[blue]" : ""}`
                  }
                >
                  <span className="mr-3">{icons.calendarAlt}</span>
                  Events
                </NavLink>
              </li>
              <li  onClick={handleLinkclick}>
                <NavLink
                  to="reminders"
                  className={({ isActive }) =>
                    `flex items-center p-2 rounded ${isActive ? "bg-[blue]" : ""}`
                  }
                >
                  <span className="mr-3">{icons.db}</span>
                  Reminders
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
