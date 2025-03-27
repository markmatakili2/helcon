import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { FiX } from 'react-icons/fi'; // Close icon
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../../features/SidebarBarSlice"; // Your Redux slice

const Dashboard = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.sidebar.isOpen);
  console.log(isOpen) // Get sidebar open state

  return (
    <div className="flex relative w-full min-h-screen">
      {/* Sidebar with sliding animation */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Close button inside sidebar */}
        <button
          onClick={() => dispatch(toggleSidebar())} // Close sidebar
          className="p-4 text-2xl bg-red-500"
        >
          <FiX />
        </button>

        {/* Sidebar content */}
        <Sidebar />
      </div>

      {/* Main content */}
      {/* <div className="flex-1 w-full md:ml-64">
        <Outlet />
      </div> */}
    </div>
  );
};

export default Dashboard;
