import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";

const DoctorHomePage = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full ">
      {/* Header */}
      <Header />

      <div className="md:flex w-full"> {/* Flex container for Sidebar and Outlet */}
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className=" p-6  flex-grow pt-14 bg-[gray] text-white">
          <Outlet />
        </div>
      </div>

      {/* Footer */}
    </div>
  );
};

export default DoctorHomePage;
