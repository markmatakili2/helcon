import { IoMdSend } from "react-icons/io";
import { CgFacebook } from "react-icons/cg";
import { BsTwitter } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from '../../images/helcon_logo.png';

const Footer = () => {
  return (
    <div className="bg-primary_1 text-white rounded-t-[32px] mt-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 md:mb-16 space-y-8 md:space-y-0">
          <div className="flex items-center">
            <img src={logo} alt="HelCon Logo" className="w-24 h-auto mr-4 relative left-12 -mt-3 " />
            <div>
              <h2 className="font-semibold text-2xl">HelCon</h2>
              <p className="mt-2 text-base">Your health is our priority</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full md:w-2/3">
            <div>
              <h2 className="font-semibold text-xl mb-4">Important links</h2>
              <ul className="text-sm space-y-2">
                <li className="text-gray-600"><NavLink to="">Appointment</NavLink></li>
                <li className="text-gray-600"><NavLink to="">Specialists</NavLink></li>
                <li className="text-gray-600"><NavLink to="">Services</NavLink></li>
                <li className="text-gray-600"><NavLink to="">About us</NavLink></li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-xl mb-4">Contact</h2>
              <ul className="text-sm space-y-2">
                <li className="text-gray-600">Call: (+254)720113559</li>
                <li className="text-gray-600">Email: example@gmail.com</li>
                <li className="text-gray-600">Address: Mombasa 200, Kenya</li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-xl mb-4">Newsletter</h2>
              <div className="relative">
                <input
                  type="email"
                  className="w-full py-2 px-4 rounded-lg border-none bg-gray-200 text-gray-800"
                  placeholder="Enter your email"
                />
                <IoMdSend className="absolute top-1/2 transform -translate-y-1/2 right-3 text-primary h-6 w-6" />
              </div>
            </div>
          </div>
        </div>

        <hr className="border-gray-300 mb-12" />

        <div className="flex justify-between items-center flex-col md:flex-row">
          <p className="text-sm text-gray-600 mb-4 md:mb-0">&copy; 2024 HealthConnect. All Rights Reserved by HelCon</p>
          <ul className="flex space-x-4">
            <li><CgFacebook className="w-8 h-8 text-primary_1 bg-white rounded-full p-2" /></li>
            <li><BsTwitter className="w-8 h-8 text-primary_1 bg-white rounded-full p-2" /></li>
            <li><FaInstagram className="w-8 h-8 text-primary_1 bg-white rounded-full p-2" /></li>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default Footer;
