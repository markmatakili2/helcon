import img from '../../images/doctors.png'
import Header from './Header'
import { FaMicroscope } from 'react-icons/fa';
import { FaAmbulance } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdBookOnline } from "react-icons/md";
import Footer from './Footer'
const Services = () => {
   return (
      <>
         <Header />
         <div className="mx-20 ">
            <div className="rounded-[16px] bg-gradient-to-r from-[#225364] to-[#002457] h-[262px] w-full pl-4 py-6 flex flex-col items-start md:items-start relative">
               <div className="text-white gap-[12px] mb-4 md:mb-4 pl-3 pt-3">
                  <h2 className="font-600 text-[24px] md:text-[30px] leading-[35px] md:leading-[45px]">
                     Decentralization in <br />Healthcare<br />More Control
                  </h2>

               </div>

            </div>
            <div className="flex flex-col items-start mt-14 mb-20 pr-10 w-full">
               <div className="self-center flex flex-col items-center mb-6">
                  <h2 className='text-3xl font-semibold leading-[71.66px] text-center text-[#404040] px-6 md:px-40'>Our Services</h2>
                  <p className='text-md leading-[27.71px] text-[#B4B4B4] w-4/5 md:w-3/5 text-center'>We are dedicated to serve you best medical services</p>
               </div>
               <div className="mt-4 flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 justify-between w-full">
                  <div className="text-[#404040] flex flex-col items-center bg-white rounded-lg shadow-lg flex-1 p-4">
                     <FaMicroscope className="text-3xl my-4 mt-4" />
                     <p className="w-full md:w-2/5 text-center py-4 pb-10">Well equipped lab </p>
                  </div>
                  <div className="flex flex-col items-center bg-primary_1 rounded-lg flex-1 shadow-lg text-white p-4">
                     <FaAmbulance className='text-3xl my-4 mt-4' />
                     <p className="w-full md:w-3/5 text-center py-4 pb-1">Emergency Ambulance</p>
                  </div>
                  <div className="text-[#404040] flex flex-col items-center bg-white rounded-lg flex-1 shadow-lg p-4">
                     <MdBookOnline className='text-3xl my-4 mt-4' />
                     <p className="w-full md:w-2/5 text-center py-4 pb-10">Online Appointment</p>
                  </div>
                  <div className="text-[#404040] flex flex-col items-center bg-white rounded-lg flex-1 shadow-lg p-4">
                     <FaPhoneAlt className='text-3xl my-4 mt-4' />
                     <p className="w-full md:w-1/5 text-center py-4 pb-10">Call center</p>
                  </div>
               </div>

            </div>

            <div className="mb-16 px-auto md:px-24 flex flex-col text-center">
               <div className="mb-4 flex flex-col items-center">
                  <h2 className="text-xl sm:text-3xl font-semibold leading-[30px] sm:leading-[71.66px] text-center text-[#404040] px-2 sm:px-40">
                     Subscribe To Our Newsletter
                  </h2>
                  <p className="text-sm sm:text-md leading-[20px] sm:leading-[27.71px] text-[#B4B4B4] w-full sm:w-3/5 text-center md:-mt-4">
                     Get latest news of our hospital
                  </p>
               </div>
               <div className="bg-[#CBCBCB] rounded-md flex flex-col items-start px-6 sm:px-10 py-10 sm:py-16">
                  <h2 className="font-semibold text-sm sm:text-md mb-2">For Newsletter</h2>
                  <div className="rounded-[15.07px] flex flex-col sm:flex-row justify-between w-full border border-white p-2 sm:pl-10 space-y-4 sm:space-y-0">
                     <input
                        type="text"
                        className="flex-1 bg-[#CBCBCB] text-start md:text-center border-none outline-none py-2 rounded-md"
                        placeholder="Enter your email here"
                     />
                     <button className="bg-primary_1 text-md text-white px-6 py-2 rounded-md w-full sm:w-auto">
                        Subscribe
                     </button>
                  </div>
               </div>
            </div>




         </div>
         <Footer />
      </>
   )
}

export default Services