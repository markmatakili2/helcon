import React, { useState, useEffect } from 'react';
import { FaPlay, FaStethoscope, FaShieldAlt, FaGlobe, FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();
  const [currentText, setCurrentText] = useState(0);
  
  const heroTexts = [
    "Revolutionizing Healthcare with Blockchain",
    "Secure, Decentralized Medical Records",
    "Connecting Patients with Global Specialists"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % heroTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleGetStarted = () => {
    navigate('/specialists');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 overflow-hidden">
        <FaStethoscope className="absolute top-1/4 left-1/4 text-blue-300 text-4xl animate-float" />
        <FaShieldAlt className="absolute top-1/3 right-1/4 text-purple-300 text-3xl animate-float-delayed" />
        <FaGlobe className="absolute bottom-1/3 left-1/3 text-pink-300 text-5xl animate-float" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Main Heading with Typing Animation */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                HelCon
              </span>
            </h1>
            <div className="h-20 flex items-center justify-center">
              <h2 className="text-2xl md:text-4xl font-semibold text-gray-700 transition-all duration-1000 ease-in-out">
                {heroTexts[currentText]}
              </h2>
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Experience the future of healthcare with our blockchain-powered platform. 
            Secure, transparent, and accessible medical services for everyone, everywhere.
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <div className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-blue-200 shadow-lg">
              <span className="text-blue-700 font-medium">🔒 Blockchain Security</span>
            </div>
            <div className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-purple-200 shadow-lg">
              <span className="text-purple-700 font-medium">🌍 Global Access</span>
            </div>
            <div className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-pink-200 shadow-lg">
              <span className="text-pink-700 font-medium">⚡ Instant Consultations</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
            <button 
              onClick={handleGetStarted}
              className="group bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-blue-900 transition-all transform hover:scale-105 shadow-xl flex items-center space-x-2">
              <span>Start Your Health Journey</span>
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="group flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                <FaPlay className="text-blue-600 ml-1" />
              </div>
              <span className="font-medium text-lg">Watch Demo</span>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">10K+</div>
              <div className="text-gray-600">Active Patients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">500+</div>
              <div className="text-gray-600">Certified Doctors</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-600 mb-2">50+</div>
              <div className="text-gray-600">Countries Served</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;