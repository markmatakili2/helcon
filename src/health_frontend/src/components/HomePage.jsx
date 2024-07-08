// import logo from "../images/helconlogo.png";
import bg from "../images/bio.jpg";
// import icons from "../../utils/icons";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Doctors/Sidebar";
import { Link } from "react-router-dom";
import { health_backend } from "../../../declarations/health_backend";
import { internet_identity } from "../../../declarations/internet_identity"
import { useEffect } from 'react'


const Home = () => {


  useEffect(() => {
    async function fetchdata() {
      
      try {

        const data = await health_backend.list_patients()

      console.log(data)

      } catch (error) {
        console.log(error)


      }
    }

    fetchdata()



      async function auth(){

        const  d = await internet_identity
      }


  }, [])



  return (
    <div className="">
      <Header />

      <div
        className="relative flex flex-col min-h-screen  bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="z-50"><Sidebar /></div>
        <div className=" absolute inset-0  bg-black opacity-50 min-h-full "></div>
        <div className="z-30 flex flex-col pt-20">
          <div className="flex flex-col items-center justify-center  h-auto">
            <div className="text-white text-center flex flex-col p-4 px-2 md:w-2/5">
              <h2 className="text-4xl text-[#F2F2FEB3] flex  py-2">
                Welcome to
              </h2>
              <h2 className="text-[#F2F2FE] text-5xl flex py-1">
                Health Connect
              </h2>
            </div>
            <p className=" px-4 md:px-0 md:w-2/5 md:text-balance text-white text-balance">
              Your health is our priority, and we&apos;re here to provide
              seamless communication between you and your healthcare providers.
              Stay connected with your doctors from the comfort of your home
            </p>
            <div className="flex justify-start  md:w-2/5 py-4">
              <button className="bg-[#0f0f3e] p-2 text-green rounded-lg px-6 text-[18px]">
                <Link to="/patient">Get started</Link>
              </button>
            </div>
          </div>
          <div>
            <div className="p-5 pb-0 pt-2">
              <div className="flex flex-col items-center">
                <h2 className="text-4xl text-[#F2F2FEB3] flex  py-2 text-center">
                  About Us
                </h2>
                <p className="p-4 text-white">
                  Welcome to the Doctor-Patient Application, where it is
                  dedicated to revolutionizing healthcare through innovative
                  technology. The mission is to provide a seamless and
                  accessible platform for both doctors and patients, enhancing
                  the healthcare experience for everyone involved.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <h2 className="text-4xl text-[#F2F2FEB3] flex  py-2 text-center">
                  Our Mission
                </h2>
                <p className="p-4 text-white">
                  We are on a mission to bridge the gap between doctors and
                  patients, making healthcare more convenient, efficient, and
                  patient-centric. We believe that technology can play a crucial
                  role in improving the overall healthcare experience.
                </p>
              </div>
              {/* <div className="flex flex-col items-center" 
              >
                <h2 className="text-4xl text-[#F2F2FEB3] flex  py-2 text-center">
                  Key Features
                </h2>
                <p className="p-4 text-white">
                  Secure Messaging: Communicate with your healthcare provider in
                  a secure and convenient environment. Virtual Appointments:
                  Schedule and attend virtual consultations from the comfort of
                  your home. Medical Records Access: View and manage your
                  medical records with ease. Appointment Scheduling: Easily
                  schedule and manage appointments at your convenience.
                  Reminders: Get reminded through notifications as the
                  application keenly monitors your health progress
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;

//  <div className="z-40 flex flex-col">
// <div className="flex flex-col items-center justify-center h-screen">
// <div className="text-white text-center flex flex-col p-4 px-2 md:w-2/5">
//    <h2 className="text-4xl text-[#F2F2FEB3] flex  py-2">Welcome to</h2>
//    <h2 className="text-[#F2F2FE] text-5xl flex py-1">
//      Health Connect
//    </h2>
//  </div>
//  <p className="md:w-2/5 md:text-balance text-white text-balance">
//    Your health is our priority, and we&apos;re here to provide seamless
//    communication between you and your healthcare providers. Stay
//    connected with your doctors from the comfort of your home
//  </p>
//  <div className="flex justify-start  md:w-2/5 py-4">
//    <button className="bg-[#0f0f3e] p-2 text-green rounded-lg px-6 text-[18px]">
//      Get started
//    </button>
//  </div>
// </div>
//  <div>
//    <div className="p-5 pb-4">
//  <div className="flex flex-col items-center">
//    <h2 className="text-4xl text-[#F2F2FEB3] flex  py-2 text-center">About Us</h2>
//    <p className="p-4 text-white">
//      Welcome to the Doctor-Patient Application, where it is dedicated
//      to revolutionizing healthcare through innovative technology. The
//      mission is to provide a seamless and accessible platform for both
//      doctors and patients, enhancing the healthcare experience for
//      everyone involved.
//    </p>
//  </div>
//  <div  className="flex flex-col items-center">
//    <h2 className="text-4xl text-[#F2F2FEB3] flex  py-2 text-center">
//      Our Mission
//    </h2>
//    <p className="p-4 text-white">
//      We are on a mission to bridge the gap between doctors and
//      patients, making healthcare more convenient, efficient, and
//      patient-centric. We believe that technology can play a crucial
//      role in improving the overall healthcare experience.
//    </p>
//  </div>
//  <div className="flex flex-col items-center">
//    <h2 className="text-4xl text-[#F2F2FEB3] flex  py-2 text-center">Key Features</h2>
//    <p className="p-4 text-white">
//      Secure Messaging: Communicate with your healthcare provider in a
//      secure and convenient environment. Virtual Appointments: Schedule
//      and attend virtual consultations from the comfort of your home.
//      Medical Records Access: View and manage your medical records with
//      ease. Appointment Scheduling: Easily schedule and manage
//      appointments at your convenience. Reminders: Get reminded through
//      notifications as the application keenly monitors your health
//      progress
//    </p>
//  </div>
// </div>
// </div>
// </div>

{
  /* <div className=" w-full bg-primary flex justify-between px-3 items-center h-20  fixed top-0 left-0 z-50">
<div className="h-20 p-2">
  <img src={logo} alt="logo" className="h-full" />
</div>

<div className="flex justify-center">
  <ul className="md:flex p-2 mr-8 text-white hidden space-x-6">
    <li className="pl-4">Home</li>
    <li className="pl-4">About</li>
    <li className="pl-4">Services</li>
    <li className="pl-4">Sign In</li>
  </ul>
  <div className="p-2 md:hidden">
    <p className="text-3xl text-white">{icons.menu}</p>
  </div>
</div>
</div> */
}
