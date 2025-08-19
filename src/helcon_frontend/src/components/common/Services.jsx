import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { FaStethoscope, FaVideo, FaCalendarAlt, FaShieldAlt, FaGlobe, FaRobot, FaChartLine, FaUsers } from 'react-icons/fa';

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: <FaVideo className="text-5xl text-blue-600" />,
      title: "Telemedicine Consultations",
      description: "Connect with certified healthcare providers through secure video consultations from anywhere in the world.",
      features: ["HD Video Calls", "Secure Messaging", "Digital Prescriptions", "Follow-up Care"],
      gradient: "from-blue-500 to-blue-700"
    },
    {
      icon: <FaCalendarAlt className="text-5xl text-green-600" />,
      title: "Smart Appointment Booking",
      description: "AI-powered scheduling system that matches you with the right specialists based on your needs and availability.",
      features: ["Intelligent Matching", "Real-time Availability", "Automated Reminders", "Flexible Rescheduling"],
      gradient: "from-green-500 to-green-700"
    },
    {
      icon: <FaShieldAlt className="text-5xl text-purple-600" />,
      title: "Blockchain Health Records",
      description: "Your medical history stored securely on the blockchain, giving you complete control over your health data.",
      features: ["Immutable Records", "Patient-Controlled Access", "Global Portability", "Privacy Protection"],
      gradient: "from-purple-500 to-purple-700"
    },
    {
      icon: <FaChartLine className="text-5xl text-orange-600" />,
      title: "Health Data Monetization",
      description: "Opt-in to share anonymized health data with research institutions and earn rewards while advancing medical science.",
      features: ["Voluntary Participation", "Anonymized Data", "Research Contributions", "Reward System"],
      gradient: "from-orange-500 to-orange-700"
    }
  ];

  const additionalServices = [
    {
      icon: <FaRobot className="text-3xl text-blue-600" />,
      title: "AI Health Assistant",
      description: "24/7 AI-powered health guidance and symptom checking"
    },
    {
      icon: <FaUsers className="text-3xl text-green-600" />,
      title: "Community Health",
      description: "Connect with health communities and support groups"
    },
    {
      icon: <FaGlobe className="text-3xl text-purple-600" />,
      title: "Global Health Network",
      description: "Access to international medical expertise and second opinions"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            Healthcare <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
            <br />
            <span className="text-3xl md:text-4xl">Reimagined for the Digital Age</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Experience comprehensive healthcare services powered by blockchain technology, 
            artificial intelligence, and a global network of certified medical professionals.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Core Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive healthcare solutions designed for the modern world.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Service Cards */}
            <div className="space-y-6">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className={`group cursor-pointer rounded-2xl p-6 transition-all duration-300 border-2 ${
                    activeService === index 
                      ? 'border-blue-500 bg-blue-50 shadow-xl' 
                      : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-lg'
                  }`}
                  onClick={() => setActiveService(index)}
                >
                  <div className="flex items-start space-x-6">
                    <div className={`flex-shrink-0 group-hover:scale-110 transition-transform duration-300 ${
                      activeService === index ? 'scale-110' : ''
                    }`}>
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Active Service Details */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <div className="mb-8">
                <div className={`w-20 h-20 bg-gradient-to-r ${services[activeService].gradient} rounded-2xl flex items-center justify-center mb-6`}>
                  {services[activeService].icon}
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {services[activeService].title}
                </h3>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  {services[activeService].description}
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Key Features:</h4>
                {services[activeService].features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg w-full">
                Get Started with This Service
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Additional <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Healthcare Solutions</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="text-center">
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to Experience the Future of Healthcare?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-12">
            Join thousands of patients and healthcare providers who have already transformed their healthcare experience with HelCon.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-blue-600 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-blue-50 transition-all transform hover:scale-105 shadow-2xl">
              Book Your First Consultation
            </button>
            <button className="border-2 border-white text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white hover:text-blue-600 transition-all transform hover:scale-105">
              Explore All Services
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;