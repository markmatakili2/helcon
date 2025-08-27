import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import ChatBot from './ChatBot';
import { FaRobot, FaComments, FaEnvelope, FaPhone, FaGraduationCap, FaCog, FaUsers, FaChartLine, FaArrowRight, FaCheck } from 'react-icons/fa';

const HelconAI = () => {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      icon: <FaComments className="text-4xl text-blue-600" />,
      title: "Free AI Consultation",
      description: "Discover your AI needs with our complimentary consultation service. Our experts analyze your requirements and provide tailored recommendations.",
      features: ["Needs Assessment", "Custom Recommendations", "Implementation Roadmap", "ROI Analysis"],
      price: "Free",
      gradient: "from-blue-500 to-blue-700"
    },
    {
      icon: <FaRobot className="text-4xl text-purple-600" />,
      title: "Intelligent Chatbots",
      description: "Deploy sophisticated AI chatbots that understand context, provide accurate responses, and learn from every interaction.",
      features: ["Natural Language Processing", "Multi-language Support", "24/7 Availability", "Learning Capabilities"],
      price: "From $299/month",
      gradient: "from-purple-500 to-purple-700"
    },
    {
      icon: <FaCog className="text-4xl text-green-600" />,
      title: "Automation Suite",
      description: "Streamline your operations with AI-powered automation for emails, SMS, calls, and workflow management.",
      features: ["Email Automation", "SMS Campaigns", "Voice Automation", "Workflow Integration"],
      price: "From $199/month",
      gradient: "from-green-500 to-green-700"
    },
    {
      icon: <FaGraduationCap className="text-4xl text-orange-600" />,
      title: "AI Training & Education",
      description: "Comprehensive training programs to help your team understand and implement AI solutions effectively.",
      features: ["Custom Training Programs", "Hands-on Workshops", "Certification Courses", "Ongoing Support"],
      price: "From $499/course",
      gradient: "from-orange-500 to-orange-700"
    },
    {
      icon: <FaUsers className="text-4xl text-pink-600" />,
      title: "CRM Integration",
      description: "Seamlessly integrate AI capabilities into your existing CRM systems to enhance customer relationships.",
      features: ["CRM Enhancement", "Customer Insights", "Predictive Analytics", "Automated Follow-ups"],
      price: "From $399/month",
      gradient: "from-pink-500 to-pink-700"
    },
    {
      icon: <FaChartLine className="text-4xl text-indigo-600" />,
      title: "Custom AI Agents",
      description: "Develop specialized AI agents tailored to your specific business needs and industry requirements.",
      features: ["Custom Development", "Industry-Specific Solutions", "Scalable Architecture", "Ongoing Maintenance"],
      price: "Custom Pricing",
      gradient: "from-indigo-500 to-indigo-700"
    }
  ];

  const industries = [
    { name: "Healthcare", icon: "🏥", description: "AI-powered patient care and medical automation" },
    { name: "Finance", icon: "💰", description: "Intelligent financial services and risk assessment" },
    { name: "E-commerce", icon: "🛒", description: "Personalized shopping experiences and inventory management" },
    { name: "Education", icon: "📚", description: "Adaptive learning systems and educational automation" },
    { name: "Real Estate", icon: "🏠", description: "Property valuation and customer service automation" },
    { name: "Manufacturing", icon: "🏭", description: "Predictive maintenance and quality control systems" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-purple-50 via-white to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center">
              <FaRobot className="text-white text-4xl" />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              HelconAI
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
            Empowering businesses, organizations, and individuals with cutting-edge AI solutions. 
            From intelligent automation to custom AI agents, we're your partner in the AI revolution.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105 shadow-xl flex items-center space-x-2">
              <span>Get Free Consultation</span>
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-purple-600 hover:text-white transition-all transform hover:scale-105">
              Explore AI Services
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              AI Solutions for <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Every Need</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From startups to enterprises, we have AI solutions that scale with your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <FaCheck className="text-green-500 text-sm" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <div className="text-2xl font-bold text-purple-600 mb-4">{service.price}</div>
                  <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              AI Solutions Across <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Industries</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We serve diverse industries with specialized AI solutions tailored to unique business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div 
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="text-center">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {industry.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                    {industry.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {industry.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">AI Implementation Process</span>
            </h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              A proven methodology that ensures successful AI integration for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "We analyze your business needs and identify AI opportunities" },
              { step: "02", title: "Strategy", description: "Develop a comprehensive AI implementation strategy" },
              { step: "03", title: "Development", description: "Build and customize AI solutions for your specific requirements" },
              { step: "04", title: "Deployment", description: "Launch your AI solutions with full support and training" }
            ].map((phase, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform">
                  {phase.step}
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-purple-400 transition-colors">
                  {phase.title}
                </h3>
                <p className="text-purple-100 leading-relaxed">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-12 border border-gray-100">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Ready to Harness the Power of <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">AI?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Start your AI journey today with a free consultation. Let's explore how artificial intelligence can transform your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="group bg-gradient-to-r from-purple-600 to-blue-600 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105 shadow-2xl flex items-center justify-center space-x-3">
                <FaRobot />
                <span>Get Free AI Consultation</span>
                <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>
              
              <button className="border-2 border-purple-600 text-purple-600 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-purple-600 hover:text-white transition-all transform hover:scale-105">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ChatBot />
    </div>
  );
};

export default HelconAI;