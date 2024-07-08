import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import icons from "../../utils/icons.jsx";
import logo from "../images/helconlogo.png";
// import doctor from "../images/doctor.jpg";
import { useLocation,useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../Slice/sidebarSlice.jsx";
import { useSelector } from "react-redux";

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);

  const dispatch = useDispatch();
  const location = useLocation();
  const isHomePage = location.pathname;
  const navigate = useNavigate()

  const handleToggle = () => {
    dispatch(toggleSidebar());
  };

  const sidebar = useSelector((state) => state.sidebar.isSidebarOpen);

  useEffect(() => {
    console.log(sidebar);
  }, [sidebar]);




  const handleLogout = ()=>{
    navigate('/')
  }

  return (
    <div
      className={` flex items-center justify-between p-4 bg-gray-900 text-white ${
        location.pathname.includes("/doctor") ? "md:hidden" : ""
      }`}
    >
      <div className="h-16 p-2  text-3xl relative">
        <img
          src={logo}
          alt="logo"
          className="h-[220px] w-auto -mt-20 pt-4 md:-ml-4 -ml-10"
        />
      </div>

      <div className="hidden md:flex space-x-6 mr-8">
        {isHomePage === "/" && (
          <>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "text-blue-500" : "")}
            >
              Home
            </NavLink>
            <NavLink
              to=""
              className={({ isActive }) => (isActive ? "text-blue-500" : "")}
            >
              About
            </NavLink>
            <NavLink
              to=""
              className={({ isActive }) => (isActive ? "text-blue-500" : "")}
            >
              Contact
            </NavLink>
            <NavLink
              to="/doctor"
              className={({ isActive }) => (isActive ? "text-blue-500" : "")}
            >
              Doctor
            </NavLink>
            <NavLink
              to="/signup"
              className={({ isActive }) => (isActive ? "text-blue-500" : "")}
            >
              Register
            </NavLink>
          </>
        )}
        {isHomePage.startsWith("/p") && (
          <div className="  space-x-4 flex items-center pl-6">
            <NavLink
              to=""
              className={({ isActive }) => (isActive ? "text-blue-500" : "")}
            >
              Home
            </NavLink>
            <NavLink
              to="user-info"
              className={({ isActive }) => (isActive ? "text-blue-500" : "")}
            >
              Data
            </NavLink>
            <NavLink
              to="appointments"
              className={({ isActive }) => (isActive ? "text-blue-500" : "")}
            >
              Appointments
            </NavLink>
            <NavLink
              to="messages"
              className={({ isActive }) => (isActive ? "text-blue-500" : "")}
            >
              Message
            </NavLink>
            <NavLink
              to="events"
              className={({ isActive }) => (isActive ? "text-blue-500" : "")}
            >
              Events
            </NavLink>
            <NavLink
              to="reminders"
              className={({ isActive }) => (isActive ? "text-blue-500" : "")}
            >
              Reminders
            </NavLink>
            <div
              className="relative flex justify-end pl-2"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <p className="text-2xl">{icons.user}</p>
              {isHovered && (
                <div className="absolute top-10 right-0 bg-white border border-gray-300 rounded shadow-lg p-2">
                  <button className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left">
                    Profile
                  </button >
                  <button className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
                  onClick={handleLogout}>
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      <div className="p-2 md:hidden" onClick={handleToggle}>
        <div className="text-3xl text-white">{icons.menu}</div>
      </div>
    </div>
  );
};
export default Header;
