import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FaBell, } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";
import {useSelector,useDispatch} from 'react-redux'
import { FiMenu,FiX} from 'react-icons/fi';
import { toggleSidebar } from "../../../features/SidebarBarSlice"


const DoctorHeader = () => {
   const isOpen = useSelector((state) => state.sidebar.isOpen);
  const dispatch = useDispatch()
   const closeSidebar = ()=>{
dispatch(toggleSidebar())
// alert("hello world")
   }


   const {data}  = useSelector((state)=>state.account.userData)
   const location = useLocation()

   return (
      <div className="p-4 flex flex-col space-y-4 w-full">
         <div className="flex justify-between items-center mb-5">
            <div>
               <p>Hi, {data?.fname}</p>
               <h1 className="text-2xl font-bold text-black">Profile</h1>
            </div>
            <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-4 ">
  {/* Select dropdown, visible from md screens onwards */}
  <select className="p-2 rounded-md hidden md:block">
    <option>En</option>
    {/* Add more languages as needed */}
  </select>

  {/* Notification bell, visible from md screens onwards */}
  <FaBell className="text-xl hidden md:block  mx-10 " />

  {/* User icon, visible from md screens onwards */}
  <FaUserCircle className="text-2xl hidden md:block  " />

  {/* Menu button, visible only below md screens */}
  <button 
    className="text-primary_1 text-3xl md:hidden" // Hidden on md and up, visible on small screens
    onClick={closeSidebar}
  >
   {isOpen ? (<FiX/>):(<FiMenu />)} 
  </button>
</div>

            </div>
         </div>
         <div className="flex justify-between w-full">

            {location.pathname.includes('records') && (
                <div className="flex space-x-4"> <NavLink
                to="patient-records"
                end
                className={({ isActive }) =>
                   isActive
                      ? 'bg-white text-[#232323] rounded border p-2'
                      : 'bg-[#F4F4F4] text-[#7A7D84] rounded border p-2'
                }
             >
                Yesterday
             </NavLink>
                <NavLink
                   to="patient-records/today"
                   className={({ isActive }) =>
                      isActive
                         ? 'bg-white text-[#232323] rounded border p-2'
                         : 'bg-[#F4F4F4] text-[#7A7D84] rounded border p-2'
                   }
                >
                   Today
                </NavLink>
                <NavLink
                   to="patient-records/past"
                   className={({ isActive }) =>
                      isActive
                         ? 'bg-white text-[#232323] rounded border p-2'
                         : 'bg-[#F4F4F4] text-[#7A7D84] rounded border p-2 px-4'
                   }
                >
                   Past
                </NavLink>
             </div>
            )}
            {location.pathname.includes('consults') && (
               <div className="flex space-x-4"> <NavLink
                  to=""
                  end
                  className={({ isActive }) =>
                     isActive
                        ? 'bg-white text-[#232323] rounded border p-2'
                        : 'bg-[#F4F4F4] text-[#7A7D84] rounded border p-2'
                  }
               >
                  Upcoming
               </NavLink>
                  <NavLink
                     to="consults/past"
                     className={({ isActive }) =>
                        isActive
                           ? 'bg-white text-[#232323] rounded border p-2'
                           : 'bg-[#F4F4F4] text-[#7A7D84] rounded border p-2'
                     }
                  >
                     Past
                  </NavLink>
                  <NavLink
                     to="records/past"
                     className={({ isActive }) =>
                        isActive
                           ? 'bg-white text-[#232323] rounded border p-2'
                           : 'bg-[#F4F4F4] text-[#7A7D84] rounded border p-2 px-4'
                     }
                  >
                     Canceled
                  </NavLink>
               </div>

            )}
            <div className="flex space-x-2">
               {(location.pathname.includes('consults') || location.pathname.includes('records')) && (<select className="bg-white border border-gray-300 rounded-md p-2">
                  <option value="may23">May 23</option>
               </select>)}

               
                  <button className=" py-2 bg-primary_1 text-white rounded mr-2 px-3"
                  >
                     Add Report
                  </button>
               

            </div>
         </div>
      </div>
   )
}
export default DoctorHeader