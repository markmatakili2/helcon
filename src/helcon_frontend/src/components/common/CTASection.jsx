import React from 'react';
import { FaArrowRight, FaRocket, FaShieldAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const CTASection = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/specialists');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-32 h-32 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-2000"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Main Heading */}
          <div className="space-y-6">
            <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Ready to Transform
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Your Healthcare?
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Join the healthcare revolution today. Experience secure, decentralized, and accessible medical care powered by blockchain technology.
            </p>
          </div>

          {/* Feature Highlights */}
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mt-12">
            <div className="flex items-center space-x-3 text-white">
              <FaRocket className="text-2xl text-blue-400" />
              <span className="text-lg font-medium">Instant Setup</span>
            </div>
            <div className="flex items-center space-x-3 text-white">
              <FaShieldAlt className="text-2xl text-purple-400" />
              <span className="text-lg font-medium">100% Secure</span>
            </div>
            <div className="flex items-center space-x-3 text-white">
              <span className="text-2xl">🌍</span>
              <span className="text-lg font-medium">Global Access</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-16">
            <button 
              onClick={handleGetStarted}
              className="group bg-white text-blue-900 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-blue-50 transition-all transform hover:scale-105 shadow-2xl flex items-center space-x-3"
            >
              <span>Start Your Journey</span>
              <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
            
            <button className="group border-2 border-white text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white hover:text-blue-900 transition-all transform hover:scale-105">
              <span>Learn More</span>
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-white/20">
            <p className="text-blue-200 mb-6">Trusted by healthcare providers worldwide</p>
            <div className="flex flex-wrap justify-center items-center space-x-8 opacity-60">
              <div className="text-white font-bold text-lg">🏥 Global Hospitals</div>
              <div className="text-white font-bold text-lg">🔬 Research Centers</div>
              <div className="text-white font-bold text-lg">👨‍⚕️ Medical Professionals</div>
              <div className="text-white font-bold text-lg">🏛️ Health Organizations</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;