import { FaBell, } from 'react-icons/fa';
import image from '../../images/doc3.png'
import { NavLink } from 'react-router-dom';

const ProfileHeader = () => {

   return (
      <div className="p-4 flex flex-col space-y-4 w-full">
         <div className="flex justify-between items-center">
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
               <img src={image} alt="Profile" className="rounded-full w-8 h-8" />
            </div>
         </div>
         <div className="flex space-x-4">
            <NavLink
               to=""
               end
               className={({ isActive }) =>
                  isActive
                     ? 'bg-white text-[#232323] rounded border p-2'
                     : 'bg-[#F4F4F4] text-[#7A7D84] rounded border p-2'
               }
            >
               General
            </NavLink>
            <NavLink
               to="consultation-history"
               className={({ isActive }) =>
                  isActive
                     ? 'bg-white text-[#232323] rounded border p-2'
                     : 'bg-[#F4F4F4] text-[#7A7D84] rounded border p-2'
               }
            >
               Consultation History
            </NavLink>
            <NavLink
               to="my-documents"
               className={({ isActive }) =>
                  isActive
                     ? 'bg-white text-[#232323] rounded border p-2'
                     : 'bg-[#F4F4F4] text-[#7A7D84] rounded border p-2'
               }
            >
               Patient Documents
            </NavLink>
         </div>
      </div>
   )
}
export default ProfileHeader