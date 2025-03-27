import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FaBell, } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";

const DoctorHeader = () => {
   const location = useLocation()

   useEffect(() => { }, [location])

   return (
      <div className="p-4 flex flex-col space-y-4 w-full">
         <div className="flex justify-between items-center mb-5">
            <div>
               <p>Hi, Kevin</p>
               <h1 className="text-2xl font-bold text-black">Profile</h1>
            </div>
            <div className="flex items-center space-x-4">
               <select className="p-2 rounded-m">
                  <option>En</option>
                  {/* Add more languages as needed */}
               </select>
               <FaBell className="text-xl" />
               <FaUserCircle className='text-2xl' />
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

               {location.pathname.includes('consults') && (
                  <button className=" py-2 bg-primary_1 text-white rounded mr-2 px-3"
                  >
                     New ppointment
                  </button>
               )}

            </div>
         </div>
      </div>
   )
}
export default DoctorHeader