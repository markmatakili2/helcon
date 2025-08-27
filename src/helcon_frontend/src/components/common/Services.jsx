import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { FaStethoscope, FaVideo, FaCalendarAlt, FaShieldAlt, FaGlobe, FaRobot, FaChartLine, FaUsers, FaArrowRight, FaCheck, FaTimes } from 'react-icons/fa';

const Services = () => {
  const [activeService, setActiveService] = useState(0);
  const [selectedServiceDetail, setSelectedServiceDetail] = useState(null);

  const services = [
    {
      icon: <FaVideo className="text-5xl text-blue-600" />,
      title: "Telemedicine Consultations",
      description: "Connect with certified healthcare providers through secure video consultations from anywhere in the world.",
      features: ["HD Video Calls", "Secure Messaging", "Digital Prescriptions", "Follow-up Care"],
      gradient: "from-blue-500 to-blue-700",
      detailedContent: {
        overview: "Our telemedicine platform revolutionizes healthcare delivery by connecting patients with qualified medical professionals through secure, high-definition video consultations. Built on blockchain technology, every consultation is encrypted and stored securely.",
        howItWorks: [
          "Schedule an appointment with your preferred specialist",
          "Receive a secure meeting link via email or SMS",
          "Join the consultation at your scheduled time",
          "Receive digital prescriptions and follow-up instructions"
        ],
        benefits: [
          "Access to global healthcare expertise",
          "Reduced travel time and costs",
          "Secure and private consultations",
          "Digital health records management",
          "24/7 availability for urgent consultations"
        ],
        pricing: {
          basic: "$50 per consultation",
          premium: "$75 per consultation with specialist",
          emergency: "$100 for urgent consultations"
        }
      }
    },
    {
      icon: <FaCalendarAlt className="text-5xl text-green-600" />,
      title: "Smart Appointment Booking",
      description: "AI-powered scheduling system that matches you with the right specialists based on your needs and availability.",
      features: ["Intelligent Matching", "Real-time Availability", "Automated Reminders", "Flexible Rescheduling"],
      gradient: "from-green-500 to-green-700",
      detailedContent: {
        overview: "Our intelligent appointment booking system uses advanced AI algorithms to match patients with the most suitable healthcare providers based on symptoms, medical history, location, and availability preferences.",
        howItWorks: [
          "Input your symptoms and preferences",
          "AI analyzes and suggests best-matched specialists",
          "View real-time availability and book instantly",
          "Receive automated reminders and updates"
        ],
        benefits: [
          "Reduced waiting times",
          "Better doctor-patient matching",
          "Automated scheduling optimization",
          "Smart reminder system",
          "Easy rescheduling options"
        ],
        pricing: {
          basic: "Free for basic bookings",
          premium: "$10/month for priority scheduling",
          enterprise: "Custom pricing for healthcare facilities"
        }
      }
    },
    {
      icon: <FaShieldAlt className="text-5xl text-purple-600" />,
      title: "Blockchain Health Records",
      description: "Your medical history stored securely on the blockchain, giving you complete control over your health data.",
      features: ["Immutable Records", "Patient-Controlled Access", "Global Portability", "Privacy Protection"],
      gradient: "from-purple-500 to-purple-700",
      detailedContent: {
        overview: "Revolutionary blockchain-based health record system that puts patients in complete control of their medical data. Every record is immutable, secure, and accessible only with your explicit permission.",
        howItWorks: [
          "Medical data is encrypted and stored on blockchain",
          "You control who can access your records",
          "Healthcare providers request access for consultations",
          "All access is logged and transparent"
        ],
        benefits: [
          "Complete data ownership and control",
          "Immutable and tamper-proof records",
          "Global accessibility for emergencies",
          "Enhanced privacy and security",
          "Reduced medical errors through complete history"
        ],
        pricing: {
          basic: "Free for basic storage (up to 100MB)",
          premium: "$15/month for unlimited storage",
          family: "$25/month for family plans (up to 5 members)"
        }
      }
    },
    {
      icon: <FaChartLine className="text-5xl text-orange-600" />,
      title: "Health Data Monetization",
      description: "Opt-in to share anonymized health data with research institutions and earn rewards while advancing medical science.",
      features: ["Voluntary Participation", "Anonymized Data", "Research Contributions", "Reward System"],
      gradient: "from-orange-500 to-orange-700",
      detailedContent: {
        overview: "Participate in advancing medical research while earning rewards. Our platform allows you to voluntarily share anonymized health data with approved research institutions, contributing to medical breakthroughs while maintaining complete privacy.",
        howItWorks: [
          "Opt-in to data sharing programs",
          "Your data is anonymized and aggregated",
          "Research institutions access anonymized datasets",
          "Earn tokens based on data contribution value"
        ],
        benefits: [
          "Contribute to medical research advancement",
          "Earn cryptocurrency rewards",
          "Complete anonymity and privacy protection",
          "Support development of new treatments",
          "Transparent reward distribution"
        ],
        pricing: {
          earnings: "Earn $5-50 per month based on data contribution",
          bonuses: "Special bonuses for rare condition data",
          referrals: "20% bonus for successful referrals"
        }
      }
    }
  ];

  const ServiceDetailModal = ({ service, onClose }) => {
    if (!service) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center rounded-t-3xl">
            <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
            <button 
              onClick={onClose}
              className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
            >
              <FaTimes className="text-gray-600" />
            </button>
          </div>

          <div className="p-6 space-y-8">
            {/* Overview */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Overview</h3>
              <p className="text-gray-600 leading-relaxed text-lg">{service.detailedContent.overview}</p>
            </div>

            {/* How It Works */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h3>
              <div className="space-y-3">
                {service.detailedContent.howItWorks.map((step, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 pt-1">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Benefits</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.detailedContent.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Pricing</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {Object.entries(service.detailedContent.pricing).map(([tier, price], index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-4 text-center">
                    <h4 className="font-bold text-lg text-gray-900 capitalize mb-2">{tier}</h4>
                    <p className="text-blue-600 font-semibold">{price}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
              <p className="text-gray-600 mb-6">Join thousands of satisfied patients who trust HelCon for their healthcare needs.</p>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg">
                Start Using This Service
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 cursor-pointer"
                onClick={() => setSelectedServiceDetail(service)}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="space-y-3 mb-6">
                  <h4 className="font-bold text-gray-900">Key Features:</h4>
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <FaCheck className="text-green-500 text-sm" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <button className="group flex items-center space-x-2 text-blue-600 font-medium hover:text-blue-800 transition-colors">
                    <span>Learn More</span>
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105">
                    Get Started
                  </button>
                </div>
              </div>
            ))}
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
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="text-center">
                <FaRobot className="text-5xl text-blue-600 mb-6 mx-auto group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  AI Health Assistant
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  24/7 AI-powered health guidance, symptom checking, and preliminary health assessments
                </p>
              </div>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="text-center">
                <FaUsers className="text-5xl text-green-600 mb-6 mx-auto group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                  Community Health
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Connect with health communities, support groups, and wellness programs
                </p>
              </div>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="text-center">
                <FaGlobe className="text-5xl text-purple-600 mb-6 mx-auto group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                  Global Health Network
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Access to international medical expertise and second opinions from global specialists
                </p>
              </div>
            </div>
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

      {/* Service Detail Modal */}
      <ServiceDetailModal 
        service={selectedServiceDetail} 
        onClose={() => setSelectedServiceDetail(null)} 
      />

      <Footer />
    </div>
  );
};

export default Services;