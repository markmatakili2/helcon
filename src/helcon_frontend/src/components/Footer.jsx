import { IoMdSend } from "react-icons/io";
import { CgFacebook } from "react-icons/cg";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = ()=>{
return (
   <div className="flex flex-col  items-center w-full h-[427px] bg-primary_1 text-white rounded-t-[30px] relative pt-20 mt-14">

  <div className="flex w-full justify-between px-20">
<div className="w-[232.5px] h-[83px] flex flex-col">
   <div className="w-[148px] h-[38px] flex">
      <img src="" alt="" className="w-[35px] h-full"/>
      <h2 className="w-[112px] h-full font-[600] leading-[38.6px] text-center">Helcon</h2>
   </div>
   <p className="w-[225px] h-[25px] font-normal text-[18px] leading-[25.2px]">Your health is our priority</p>

</div>
<div className="w-[142px] h-[169px] flex flex-col mb-6">
   <h2 className="w-full h-[21px] leading-[21px] text-[18px]  mb-6">Important links</h2>
   <ul className="flex flex-col w-[102px] h-[109px] text-[#F6F6F6] space-y-2">
      <li className=" leading-[22px] h-[22px] text-[16px]  text-[#7A7D84]">
         <NavLink to="">Appointment</NavLink>
      </li>
      <li className=" leading-[22px] h-[22px] text-[16px] text-[#7A7D84]">
         <NavLink to="">Specialists</NavLink>
      </li>
      <li className=" leading-[22px] h-[22px] text-[16px] text-[#7A7D84]">
         <NavLink to="">Services</NavLink>
      </li>
      <li className=" leading-[22px] h-[22px] text-[16px] text-[#7A7D84]">
         <NavLink to="">About us</NavLink>
      </li>
   </ul>
</div>
<div className="w-[215px] h-[169px]">
   <h2 className="w-full h-[21px] leading-[21px] text-[18px] mb-6 ">Contact</h2>
   <ul className="text-[#F6F6F6] w-full h-[109px] space-y-2">
      <li className="text-[16px] text-[#7A7D84]">Call:(+254)720113559</li>
      <li className="text-[16px] text-[#7A7D84]">Emailexample@gmail.com</li>
      <li className="text-[16px] text-[#7A7D84]">Address: Mombasa 200</li>
      <li className="text-[16px] text-[#7A7D84]">Kenya</li>
   </ul>
</div>
<div className="w-[272px] h-[110px] flex flex-col relative">
   <h2 className="w-full h-[21px] leading-[21px] text-[18px] mb-6">Newsletter</h2>
    <div className="relative  p-0 w-full h-[50px] flex bg-[#F6F6F6] text-primary_1 rounded-2xl ">
      <input type="email" name="" id="" className="pl-2 rounded-2xl w-full h-full border-none outline-none bg-none"
      placeholder="Enter your email"/>
      <IoMdSend  className="h-[19px] w-[22px] absolute top-4 right-2"/>
    </div>
</div>
  </div>
  <hr  className="text-[#BFD2F8] w-[95%] mb-6"/>
  <div className="flex justify-between  w-full px-20 mt-10">
   <p className=" text-[16px] leading-[18px] text-start self-start">&copy;2024 HealthConnect All Rights Reserved by HelCon</p>
   <ul className="flex items-center space-x-6">
      <li className=" w-[24px] h-[24px] text-center rounded-full bg-white text-primary flex items-center justify-center"><CgFacebook /></li>
      <li className=" w-[24px] h-[24px] text-center rounded-full bg-white text-primary flex items-center justify-center"><BsTwitterX /></li>
      <li className=" w-[24px] h-[24px] text-center rounded-full bg-white text-primary flex items-center justify-center"><FaInstagram /></li>
   </ul>
  </div>

   </div>
)
}


export default Footer