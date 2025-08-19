import React from 'react';
import { FaLinkedinIn, FaTwitter, FaTelegram, FaEnvelope, FaPhone, FaMapMarkerAlt, FaStethoscope, FaRocket } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <FaStethoscope className="text-white text-2xl" />
              </div>
              <h2 className="font-bold text-3xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                HelCon
              </h2>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Revolutionizing healthcare through blockchain technology, AI innovation, and global connectivity. 
              Your health, your data, your control.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all hover:scale-110">
                <FaLinkedinIn className="text-blue-400" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all hover:scale-110">
                <FaTwitter className="text-blue-400" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all hover:scale-110">
                <FaTelegram className="text-blue-400" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-xl mb-6 text-white">Platform</h3>
            <ul className="space-y-3">
              <li><NavLink to="/specialists" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center space-x-2">
                <FaStethoscope className="text-sm" />
                <span>Find Specialists</span>
              </NavLink></li>
              <li><NavLink to="/services" className="text-gray-300 hover:text-blue-400 transition-colors">Telemedicine</NavLink></li>
              <li><NavLink to="/home" className="text-gray-300 hover:text-blue-400 transition-colors">Patient Dashboard</NavLink></li>
              <li><NavLink to="/about-us" className="text-gray-300 hover:text-blue-400 transition-colors">About HelCon</NavLink></li>
              <li><NavLink to="/blog" className="text-gray-300 hover:text-blue-400 transition-colors">Health Blog</NavLink></li>
            </ul>
          </div>

          {/* HelconAI Links */}
          <div>
            <h3 className="font-bold text-xl mb-6 text-white flex items-center">
              <FaRocket className="mr-2 text-purple-400" />
              HelconAI
            </h3>
            <ul className="space-y-3">
              <li><NavLink to="/helcon-ai/consultation" className="text-gray-300 hover:text-purple-400 transition-colors">Free AI Consultation</NavLink></li>
              <li><NavLink to="/helcon-ai/chatbots" className="text-gray-300 hover:text-purple-400 transition-colors">AI Chatbots</NavLink></li>
              <li><NavLink to="/helcon-ai/automation" className="text-gray-300 hover:text-purple-400 transition-colors">Automation Suite</NavLink></li>
              <li><NavLink to="/helcon-ai/training" className="text-gray-300 hover:text-purple-400 transition-colors">AI Training</NavLink></li>
              <li><NavLink to="/helcon-ai/custom" className="text-gray-300 hover:text-purple-400 transition-colors">Custom AI Agents</NavLink></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-xl mb-6 text-white">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-300">
                <FaEnvelope className="text-blue-400" />
                <span>info.helcon@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <FaPhone className="text-green-400" />
                <span>+254 720 113 559</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <FaMapMarkerAlt className="text-red-400" />
                <span>Global Network</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-8">
              <h4 className="font-semibold text-lg mb-4 text-white">Stay Updated</h4>
              <div className="flex flex-col space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-300 text-sm">
              © {currentYear} HelCon. All rights reserved. Powered by Internet Computer Protocol.
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <NavLink to="/privacy" className="text-gray-300 hover:text-blue-400 transition-colors">Privacy Policy</NavLink>
              <NavLink to="/terms" className="text-gray-300 hover:text-blue-400 transition-colors">Terms of Service</NavLink>
              <NavLink to="/security" className="text-gray-300 hover:text-blue-400 transition-colors">Security</NavLink>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-8 pt-8 border-t border-white/20">
          <div className="flex flex-wrap justify-center items-center space-x-8 opacity-60">
            <div className="text-white font-medium">🔒 HIPAA Compliant</div>
            <div className="text-white font-medium">🌍 Global Network</div>
            <div className="text-white font-medium">⚡ 99.9% Uptime</div>
            <div className="text-white font-medium">🛡️ Blockchain Secured</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;