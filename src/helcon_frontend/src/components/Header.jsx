import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import { NavLink } from "react-router-dom"
const Header = () => {
   return (
      <div className="w-full h-20  flex items-center gap-x-[236px] border-b-[1px] border-[#E3E3E3] mb-10">
         <div className="
             w-[147px] h-[38px]">
            <h2 className="w-[112px] h-[38px] font-bold text-2xl text-center leading-[38.36px] text-primary_1">HelCon</h2>
         </div>
         <ul className="w-[483.37px] h-[22px] flex gap-[30px]">
            <li className="font-medium w-[53px] h-[22px] text-[#404040] text-[18px] leading-[22px]"><NavLink
               to=""
               className={({ isActive }) => isActive ? 'text-primary_1' : ''}>Home</NavLink></li>
            <li className=" font-medium w-[97.37px] h-[22px] text-[#404040] text-[18px] leading-[22px] flex relative">
               <NavLink
               to=""
               className={({ isActive }) => isActive ? 'text-primary_1' : ''}>Services </NavLink><MdOutlineKeyboardArrowDown className=" text-primary absolute right-2  text-2xl" /></li>








            <li className="w-[96px] font-medium h-[22px] text-[#404040] text-[18px] leading-[22px]"><NavLink
               to=""
               className={({ isActive }) => isActive ? 'text-primary_1' : ''}>Specialists</NavLink></li>
            <li className="w-[80px] h-[22px] font-medium text-[#404040] text-[18px] leading-[22px]"><NavLink
               to=""
               className={({ isActive }) => isActive ? 'text-primary_1' : ''}>About us</NavLink></li>
            <li className="w-[36px] h-[22px]  font-medium text-[#404040] text-[18px] leading-[22px]"> <NavLink
               to=""
               className={({ isActive }) => isActive ? 'text-primary_1' : ''}>FAQ
            </NavLink></li>
         </ul>
         <div className="w-[215px] h-[46px] flex gap-[10px] items-center">
            <button className="bg-primary_1 h-full w-full rounded-[6px] text-white  py-[12px] px-[12px]">Get Started</button>
         </div>

      </div>
   )
}


export default Header