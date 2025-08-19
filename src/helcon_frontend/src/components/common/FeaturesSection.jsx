import React from 'react';
import { FaShieldAlt, FaGlobe, FaRobot, FaChartLine, FaUsers, FaLock } from 'react-icons/fa';

const FeaturesSection = () => {
  const features = [
    {
      icon: <FaShieldAlt className="text-4xl text-blue-600" />,
      title: "Blockchain Security",
      description: "Your medical data is secured with cutting-edge blockchain technology, ensuring complete privacy and immutable records.",
      gradient: "from-blue-500 to-blue-700"
    },
    {
      icon: <FaGlobe className="text-4xl text-green-600" />,
      title: "Global Healthcare Access",
      description: "Connect with healthcare providers worldwide, breaking down geographical barriers to quality medical care.",
      gradient: "from-green-500 to-green-700"
    },
    {
      icon: <FaRobot className="text-4xl text-purple-600" />,
      title: "AI-Powered Diagnostics",
      description: "Leverage artificial intelligence for preliminary diagnostics and personalized health recommendations.",
      gradient: "from-purple-500 to-purple-700"
    },
    {
      icon: <FaChartLine className="text-4xl text-orange-600" />,
      title: "Data Monetization",
      description: "Opt-in to share anonymized health data with research institutions and earn rewards while contributing to medical advancement.",
      gradient: "from-orange-500 to-orange-700"
    },
    {
      icon: <FaUsers className="text-4xl text-pink-600" />,
      title: "Community Health",
      description: "Join a thriving community of health-conscious individuals and healthcare professionals working together.",
      gradient: "from-pink-500 to-pink-700"
    },
    {
      icon: <FaLock className="text-4xl text-indigo-600" />,
      title: "Decentralized Trust",
      description: "Experience healthcare without intermediaries, where trust is built into the system through smart contracts.",
      gradient: "from-indigo-500 to-indigo-700"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">HelCon?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're revolutionizing healthcare through innovative technology, ensuring secure, accessible, and personalized medical care for everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              <div className="mt-6 flex items-center text-blue-600 font-medium group-hover:translate-x-2 transition-transform">
                <span>Learn more</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;