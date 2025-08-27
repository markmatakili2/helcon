import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ChatBot from './ChatBot';
import { FaRocket, FaShieldAlt, FaGlobe, FaUsers, FaChartLine, FaBrain, FaHeart, FaLightbulb } from 'react-icons/fa';

const About = () => {
  const values = [
    {
      icon: <FaHeart className="text-4xl text-red-500" />,
      title: "Patient-Centric Care",
      description: "Every decision we make puts patient welfare and experience at the forefront of healthcare innovation."
    },
    {
      icon: <FaShieldAlt className="text-4xl text-blue-500" />,
      title: "Uncompromising Security",
      description: "We leverage blockchain technology to ensure your medical data remains private, secure, and under your control."
    },
    {
      icon: <FaGlobe className="text-4xl text-green-500" />,
      title: "Global Accessibility",
      description: "Breaking down geographical barriers to connect patients with the best healthcare providers worldwide."
    },
    {
      icon: <FaLightbulb className="text-4xl text-yellow-500" />,
      title: "Continuous Innovation",
      description: "We're constantly evolving, integrating cutting-edge technologies to improve healthcare delivery."
    }
  ];

  const milestones = [
    {
      year: "2023",
      title: "HelCon Founded",
      description: "Started with a vision to democratize healthcare through blockchain technology"
    },
    {
      year: "2024",
      title: "Global Expansion",
      description: "Launched in 50+ countries with 500+ certified healthcare providers"
    },
    {
      year: "2024",
      title: "AI Integration",
      description: "Introduced HelconAI for enhanced diagnostics and automation services"
    },
    {
      year: "2025",
      title: "Future Vision",
      description: "Expanding to serve 1M+ patients with revolutionary healthcare solutions"
    }
  ];

  const team = [
    {
      name: "Dr. Alex Thompson",
      role: "Chief Medical Officer",
      expertise: "Digital Health Innovation",
      avatar: "AT"
    },
    {
      name: "Sarah Kim",
      role: "CTO",
      expertise: "Blockchain Architecture",
      avatar: "SK"
    },
    {
      name: "Michael Rodriguez",
      role: "Head of AI",
      expertise: "Machine Learning & Healthcare",
      avatar: "MR"
    },
    {
      name: "Dr. Priya Patel",
      role: "Head of Clinical Affairs",
      expertise: "Telemedicine & Patient Care",
      avatar: "PP"
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
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8">
            Democratizing
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Global Healthcare
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
            Helcon is pioneering the future of healthcare by leveraging blockchain technology, artificial intelligence, 
            and decentralized systems to create a more accessible, secure, and efficient healthcare ecosystem for everyone.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FaRocket className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Our Mission</h3>
              <p className="text-gray-600">To make quality healthcare accessible to everyone, everywhere, through innovative technology.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FaBrain className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Our Vision</h3>
              <p className="text-gray-600">A world where healthcare is decentralized, transparent, and puts patients in control of their data.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-green-800 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FaGlobe className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Our Impact</h3>
              <p className="text-gray-600">Connecting millions of patients with healthcare providers across 50+ countries.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Core Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and shape the future of healthcare technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Journey</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From a bold vision to a global healthcare revolution - here's how we're changing the world.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></div>

            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <div 
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                      <div className="text-3xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Visionary Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A diverse group of healthcare professionals, technologists, and innovators united by a common goal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div 
                key={index}
                className="group text-center transform hover:scale-105 transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform">
                    {member.avatar}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {member.name}
                  </h3>
                  
                  <p className="text-blue-600 font-medium mb-2">
                    {member.role}
                  </p>
                  
                  <p className="text-gray-600 text-sm">
                    {member.expertise}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Powered by <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Cutting-Edge Technology</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Our platform is built on the Internet Computer Protocol (ICP), ensuring scalability, security, and true decentralization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <FaShieldAlt className="text-white text-3xl" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Blockchain Infrastructure</h3>
              <p className="text-blue-100 leading-relaxed">
                Built on Internet Computer Protocol for unparalleled security, transparency, and decentralization in healthcare data management.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <FaBrain className="text-white text-3xl" />
              </div>
              <h3 className="text-2xl font-bold mb-4">AI-Powered Solutions</h3>
              <p className="text-blue-100 leading-relaxed">
                Advanced artificial intelligence for diagnostics, treatment recommendations, and personalized healthcare experiences.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <FaGlobe className="text-white text-3xl" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Global Network</h3>
              <p className="text-blue-100 leading-relaxed">
                Seamlessly connecting patients and healthcare providers across continents through our decentralized network.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Global Impact</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just changing healthcare - we're transforming lives and communities around the world.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FaUsers className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Empowering Communities</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We're bringing quality healthcare to underserved communities, ensuring no one is left behind in the digital health revolution.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-green-800 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FaChartLine className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Advancing Medical Research</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our data monetization platform enables patients to contribute to medical research while earning rewards, accelerating healthcare breakthroughs.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-800 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FaRocket className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Driving Innovation</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We're setting new standards for healthcare technology, inspiring the next generation of medical innovations.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 border border-gray-100">
              <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">By the Numbers</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">10K+</div>
                  <div className="text-gray-600">Active Patients</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
                  <div className="text-gray-600">Healthcare Providers</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
                  <div className="text-gray-600">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange-600 mb-2">99.9%</div>
                  <div className="text-gray-600">Uptime</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Evolution</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to global platform - witness our journey in transforming healthcare.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600 rounded-full hidden md:block"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div 
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 transform hover:scale-105 transition-transform duration-300">
                      <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="hidden md:block w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  <div className="hidden md:block w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Leadership <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the visionaries and experts driving the future of decentralized healthcare.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div 
                key={index}
                className="group text-center transform hover:scale-105 transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform">
                    {member.avatar}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {member.name}
                  </h3>
                  
                  <p className="text-blue-600 font-medium mb-3">
                    {member.role}
                  </p>
                  
                  <p className="text-gray-600 text-sm">
                    {member.expertise}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <ChatBot />
    </div>
  );
};

export default About;