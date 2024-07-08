import { Link, Outlet } from "react-router-dom";
import { useState } from "react";

import Header from "../Header";
import Footer from "../Footer";
import Sidebar from "../Doctors/Sidebar";

const UserHome = () => {
  
  return (
    <div className="bg-gray w-[vw]">
    <Header/>
    <Sidebar/>
      <div className="w-full   flex   justify-center min-h-screen border-b-2 border-b-white bg-[gray] text-white">
        <Outlet />
      </div>
      <Footer/>
    </div>
  );
};
export default UserHome;





{/* <div className=" w-full bg-primary flex justify-between px-3 items-center h-20  fixed top-0 left-0 z-50">
<div className="h-20 p-2">
  <img src={logo} alt="logo" className="h-full" />
</div>

<div className="flex justify-center">
  <ul
    className={` md:mr-8 text-white fixed top-0 left-0 h-screen bg-gray-800 z-50 ${
      isMenuVisible ? "w-64" : "w-0"
    } transition-width duration-300 ease-in-out overflow-hidden md:relative md:flex md:flex-row md:items-center md:justify-start md:pt-0 md:bg-transparent md:z-auto md:w-auto md:space-x-4 ${
      isMenuVisible ? "w-0" : "hidden"
    } md:transition-none`}
  >
    <li className="p-8 md:p-1 md:pl-4">
      {" "}
      <Link to="/patient" onClick={hideMenu}>
        Home
      </Link>
    </li>
    <li className=" p-8 md:p-1 md:pl-4">
      {" "}
      <Link to="user-info" onClick={hideMenu}>
        Data
      </Link>
    </li>
    <li className="p-8 md:p-1 md:pl-4">
      {" "}
      <Link to="appointments" onClick={hideMenu}>
        Appointments
      </Link>
    </li>
    <li className="p-8 md:p-1 md:pl-4">
      {" "}
      <Link to="messages" onClick={hideMenu}>
        Message
      </Link>
    </li>
    <li className="p-8 md:p-1 md:pl-4">
      {" "}
      <Link to="events" onClick={hideMenu}>
        Events
      </Link>
    </li>
    <li className="p-8 md:p-1 md:pl-4">
      {" "}
      <Link to="reminders" onClick={hideMenu}>
        Reminders
      </Link>
    </li>
    <li className="p-8 md:p-1 md:pl-4 md:hidden">
      {" "}
      <Link to="/" onClick={hideMenu}>
        logout
      </Link>
    </li>

    <div className="h-8 w-8 rounded-full bg-[grey] hidden md:block">
      <img
        src={doctor}
        alt="a doctor"
        className="max-w-full h-full w-full object-cover rounded-full"
      />
    </div>
  </ul>
  <div className="p-2 md:hidden" onClick={toggleMenu}>
    <p className="text-3xl text-white">{icons.menu}</p>
  </div>
</div>
</div> */}
