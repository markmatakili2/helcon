import React, { useState, useEffect } from 'react'
import Header from './Header';
import Footer from './Footer';
import imageBackground from '../../images/doctor-laptop.webp'
import Frame from './Frame'
import doctorImage from '../../images/doctorImage.webp'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, } from 'react-router-dom';
import { getUserData } from '../../features/auth/account'
import Loading from './loading';

const Specialists = () => {
   const { principalData, identityData } = useSelector((state) => state.account)

   const { isRegistered, data, loading } = useSelector((state) => state.account.userData)

   const navigate = useNavigate()
   const dispatch = useDispatch()
   useEffect(() => {
      const isLoggedIn = localStorage.getItem('isLoggedIn'); 
      const identifier = localStorage.getItem('identifier')
      if (identifier) {
         const queryId = JSON.parse(identifier)
         dispatch(getUserData({ id: queryId.id }))
      }
   }, [dispatch])
   useEffect(() => {
      const isLoggedIn = localStorage.getItem('isLoggedIn'); 
      if (isLoggedIn && !loading && isRegistered && data) {
         navigate('/doctors')
      }
   }, [navigate, isRegistered, data])

   const [availability, setAvailability] = useState(false);

   const handleToggle = () => {
      setAvailability(!availability);
   };

   if (loading && !isRegistered) {
      return <Loading />
   }

   if (principalData.loading || identityData.loading) {
      return <Loading />
   }

   return (
      <div className="z-40 relative">
 
  <div className="fixed top-0 left-0 w-full bg-white z-50">
    <Header />
  </div>

  
  <div className="h-screen relative mt-16">
    <img
      src={imageBackground}
      alt="background"
      className="absolute inset-0 w-full h-full object-cover"
    />
      <div className="absolute inset-0 bg-black opacity-30" />
    <div className="absolute inset-0 flex flex-col items-center space-y-6 md:space-y-8 p-6 md:p-8 mb-6">
      <h2 className="text-primary_1 font-bold text-4xl md:text-[49px] leading-tight md:leading-[52px]  text-center tracking-wide">
        We care <br />about your health
      </h2>
      <p className="pt-4 md:pt-6 text-lg md:text-[18.47px] text-[#A7A7A7] font-medium max-w-full md:max-w-[600px] text-center text-primary_1">
        Become one of our HealthConnect Specialists and get to help even more patients.
      </p>
      <button
        className="bg-primary_1 text-white px-10 py-4 rounded-[13.03px] text-lg md:text-base shadow-lg hover:bg-primary_2 transition duration-300"
        type="button"
      >
        Get Started
      </button>
    </div>
  </div>

  {/* Content Section */}
  <section className="py-20 bg-[#F4F4F4]">
    <div className="container mx-auto flex flex-col md:flex-row items-center space-y-6 md:space-y-0">
      
      {/* Doctor Image */}
      <div className="flex-1">
        <img
          src={doctorImage} 
          alt="Doctor"
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </div>
      
     
      <div className="flex-1 text-center md:text-left px-6 md:px-12">
        <h2 className="text-3xl font-bold text-primary_1">Seamlessly Integrate, Enhance Efficiency, and Attract New Patients</h2>
        <p className="text-[#A7A7A7] text-lg mt-4">
        Step into a realm where seamless integration, enhanced efficiency, and a steady influx of new patients become your everyday reality.
        With healthcare digitization transforming the way medicine is practiced, Helcon is here to be your trusted partner in embracing this shift.
        </p>
        <p className="text-[#A7A7A7] text-lg mt-4">
          Our platform is engineered to effortlessly intertwine with your existing practice, while our telehealth and e-health applications drive operational efficiency to a new peak. The ripple effect? A noticeable influx of new patients, made possible by our tailored business model accompanied by robust marketing and training support.
        </p>
        <p className="text-[#A7A7A7] text-lg mt-4">
          Embrace Helcon, where transitioning to digital healthcare is synonymous with advancing your practice.
        </p>
      </div>
    </div>
  </section>

  {/* Telemedicine Section */}
  <section className="py-20">
    <div className="container mx-auto flex flex-col md:flex-row items-center space-y-6 md:space-y-0">
      
      {/* Bold Section */}
      <div className="flex-1 font-bold text-2xl text-primary_1">
        <h2>Telemedicine: Revolutionizing Healthcare</h2>
        <p className="mt-4 text-[#A7A7A7]">
          Telemedicine is transforming the way we deliver healthcare, making it more accessible and efficient for everyone.
        </p>
      </div>
      
      {/* Additional Content Section */}
      <div className="flex-1 space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-primary_1">Telehealth Solutions</h3>
          <p className="text-[#A7A7A7]">
            With our innovative solutions, healthcare providers can easily connect with patients remotely, improving access to care and reducing the need for in-person visits.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-primary_1">Patient Engagement</h3>
          <p className="text-[#A7A7A7]">
            Engage your patients like never before with personalized digital experiences that encourage active participation in their health journey.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-primary_1">Data-Driven Insights</h3>
          <p className="text-[#A7A7A7]">
            Harness the power of data to improve patient outcomes and optimize your practice’s operations, all while adhering to industry standards and regulations.
          </p>
        </div>
      </div>
    </div>
  </section>

  <Footer />
</div>

   )
}

export default Specialists;
