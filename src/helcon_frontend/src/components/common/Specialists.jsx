import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import ChatBot from './ChatBot';
import { FaStethoscope, FaHeart, FaBrain, FaGlobe, FaShieldAlt, FaUsers, FaArrowRight, FaStar, FaPlay, FaCheckCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Specialists = () => {
   const navigate = useNavigate();
   const [searchFilters, setSearchFilters] = useState({
      specialty: '',
      location: '',
      availability: false
   });

   const handleGetStarted = () => {
      navigate('/new-account');
   };

   const specialties = [
      {
         name: "Cardiology",
         icon: <FaHeart className="text-4xl text-red-500" />,
         description: "Heart and cardiovascular specialists",
         doctorCount: "50+ Doctors",
         gradient: "from-red-500 to-pink-500"
      },
      {
         name: "Neurology",
         icon: <FaBrain className="text-4xl text-purple-500" />,
         description: "Brain and nervous system experts",
         doctorCount: "35+ Doctors",
         gradient: "from-purple-500 to-indigo-500"
      },
      {
         name: "General Medicine",
         icon: <FaStethoscope className="text-4xl text-blue-500" />,
         description: "Primary care physicians",
         doctorCount: "120+ Doctors",
         gradient: "from-blue-500 to-cyan-500"
      },
      {
         name: "Dermatology",
         icon: <FaUsers className="text-4xl text-green-500" />,
         description: "Skin and beauty specialists",
         doctorCount: "40+ Doctors",
         gradient: "from-green-500 to-emerald-500"
      },
      {
         name: "Pediatrics",
         icon: <FaHeart className="text-4xl text-yellow-500" />,
         description: "Children's health experts",
         doctorCount: "60+ Doctors",
         gradient: "from-yellow-500 to-orange-500"
      },
      {
         name: "Psychiatry",
         icon: <FaBrain className="text-4xl text-indigo-500" />,
         description: "Mental health professionals",
         doctorCount: "25+ Doctors",
         gradient: "from-indigo-500 to-purple-500"
      }
   ];

   const featuredDoctors = [
      {
         name: "Dr. Sarah Johnson",
         specialty: "Cardiologist",
         rating: 4.9,
         reviews: 234,
         experience: "15 years",
         location: "New York, USA",
         nextAvailable: "Today 2:00 PM",
         languages: ["English", "Spanish"],
         verified: true
      },
      {
         name: "Dr. Michael Chen",
         specialty: "Neurologist",
         rating: 4.8,
         reviews: 189,
         experience: "12 years",
         location: "Singapore",
         nextAvailable: "Tomorrow 9:00 AM",
         languages: ["English", "Mandarin"],
         verified: true
      },
      {
         name: "Dr. Amara Okafor",
         specialty: "Pediatrician",
         rating: 4.9,
         reviews: 156,
         experience: "10 years",
         location: "Lagos, Nigeria",
         nextAvailable: "Today 4:00 PM",
         languages: ["English", "Yoruba"],
         verified: true
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

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="text-center lg:text-left">
                     <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                        Connect with
                        <br />
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                           World-Class Specialists
                        </span>
                     </h1>
                     
                     <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                        Access top-tier medical expertise from anywhere in the world. 
                        Our blockchain-secured platform connects you with certified specialists 
                        who care about your health journey.
                     </p>

                     <div className="flex flex-col sm:flex-row gap-6 mb-12">
                        <button 
                           onClick={handleGetStarted}
                           className="group bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-blue-900 transition-all transform hover:scale-105 shadow-xl flex items-center justify-center space-x-2"
                        >
                           <FaStethoscope />
                           <span>Find Your Specialist</span>
                           <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        
                        <button className="group flex items-center justify-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors border-2 border-gray-300 hover:border-blue-300 px-8 py-4 rounded-xl">
                           <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                              <FaPlay className="text-blue-600 ml-1" />
                           </div>
                           <span className="font-medium">Watch How It Works</span>
                        </button>
                     </div>

                     {/* Trust Indicators */}
                     <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-gray-600">
                        <div className="flex items-center space-x-2">
                           <FaCheckCircle className="text-green-500" />
                           <span>500+ Verified Specialists</span>
                        </div>
                        <div className="flex items-center space-x-2">
                           <FaShieldAlt className="text-blue-500" />
                           <span>100% Secure & Private</span>
                        </div>
                        <div className="flex items-center space-x-2">
                           <FaGlobe className="text-purple-500" />
                           <span>Available 24/7</span>
                        </div>
                     </div>
                  </div>

                  <div className="relative">
                     <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-8 shadow-2xl">
                        <div className="bg-white rounded-2xl p-6 shadow-lg">
                           <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Find Your Perfect Match</h3>
                           
                           <div className="space-y-4">
                              <div>
                                 <label className="block text-gray-700 font-medium mb-2">Medical Specialty</label>
                                 <select 
                                    value={searchFilters.specialty}
                                    onChange={(e) => setSearchFilters({...searchFilters, specialty: e.target.value})}
                                    className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                                 >
                                    <option value="">Select a specialty</option>
                                    <option value="cardiology">Cardiology</option>
                                    <option value="neurology">Neurology</option>
                                    <option value="dermatology">Dermatology</option>
                                    <option value="pediatrics">Pediatrics</option>
                                    <option value="general">General Medicine</option>
                                 </select>
                              </div>

                              <div>
                                 <label className="block text-gray-700 font-medium mb-2">Preferred Location</label>
                                 <input
                                    type="text"
                                    placeholder="Enter city or country"
                                    value={searchFilters.location}
                                    onChange={(e) => setSearchFilters({...searchFilters, location: e.target.value})}
                                    className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                                 />
                              </div>

                              <div className="flex items-center justify-between">
                                 <label className="text-gray-700 font-medium">Available Now</label>
                                 <div
                                    className={`w-14 h-7 flex items-center rounded-full p-1 cursor-pointer transition-colors ${
                                       searchFilters.availability ? 'bg-blue-600' : 'bg-gray-300'
                                    }`}
                                    onClick={() => setSearchFilters({...searchFilters, availability: !searchFilters.availability})}
                                 >
                                    <div
                                       className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform ${
                                          searchFilters.availability ? 'translate-x-7' : ''
                                       }`}
                                    ></div>
                                 </div>
                              </div>

                              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg">
                                 Search Specialists
                              </button>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* Specialties Section */}
         <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                     Explore Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Medical Specialties</span>
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                     From routine check-ups to specialized treatments, our network of certified professionals is here to support your health journey.
                  </p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {specialties.map((specialty, index) => (
                     <div 
                        key={index}
                        className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 cursor-pointer"
                     >
                        <div className={`w-16 h-16 bg-gradient-to-r ${specialty.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                           {specialty.icon}
                        </div>
                        
                        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                           {specialty.name}
                        </h3>
                        
                        <p className="text-gray-600 mb-4 leading-relaxed">
                           {specialty.description}
                        </p>

                        <div className="flex items-center justify-between">
                           <span className="text-blue-600 font-semibold">{specialty.doctorCount}</span>
                           <FaArrowRight className="text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* Featured Doctors Section */}
         <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                     Meet Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Top Specialists</span>
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                     Highly rated doctors from around the world, ready to provide you with exceptional care and expertise.
                  </p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {featuredDoctors.map((doctor, index) => (
                     <div 
                        key={index}
                        className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                     >
                        <div className="text-center">
                           <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform">
                              {doctor.name.split(' ').map(n => n[0]).join('')}
                           </div>

                           {doctor.verified && (
                              <div className="inline-flex items-center space-x-1 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                                 <FaCheckCircle className="text-xs" />
                                 <span>Verified Specialist</span>
                              </div>
                           )}
                           
                           <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                              {doctor.name}
                           </h3>
                           
                           <p className="text-blue-600 font-medium mb-4">
                              {doctor.specialty}
                           </p>

                           <div className="flex items-center justify-center space-x-1 mb-4">
                              <div className="flex space-x-1">
                                 {[...Array(5)].map((_, i) => (
                                    <FaStar key={i} className={`${i < Math.floor(doctor.rating) ? 'text-yellow-400' : 'text-gray-300'}`} />
                                 ))}
                              </div>
                              <span className="text-gray-600 ml-2">
                                 {doctor.rating} ({doctor.reviews} reviews)
                              </span>
                           </div>

                           <div className="space-y-2 text-sm text-gray-600 mb-6">
                              <p>📍 {doctor.location}</p>
                              <p>🎓 {doctor.experience} experience</p>
                              <p>🗣️ {doctor.languages.join(', ')}</p>
                              <p className="text-green-600 font-medium">⏰ {doctor.nextAvailable}</p>
                           </div>

                           <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg">
                              Book Consultation
                           </button>
                        </div>
                     </div>
                  ))}
               </div>

               <div className="text-center mt-12">
                  <button className="bg-white border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-600 hover:text-white transition-all transform hover:scale-105">
                     View All Specialists
                  </button>
               </div>
            </div>
         </section>

         {/* Why Choose Our Specialists Section */}
         <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                     Why Choose <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">HelCon Specialists?</span>
                  </h2>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <div className="text-center group">
                     <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                        <FaShieldAlt className="text-white text-2xl" />
                     </div>
                     <h3 className="text-xl font-bold text-gray-900 mb-4">Verified Credentials</h3>
                     <p className="text-gray-600">All our specialists are thoroughly vetted and certified professionals with proven track records.</p>
                  </div>

                  <div className="text-center group">
                     <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                        <FaGlobe className="text-white text-2xl" />
                     </div>
                     <h3 className="text-xl font-bold text-gray-900 mb-4">Global Reach</h3>
                     <p className="text-gray-600">Access specialists from around the world, breaking geographical barriers to quality healthcare.</p>
                  </div>

                  <div className="text-center group">
                     <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                        <FaHeart className="text-white text-2xl" />
                     </div>
                     <h3 className="text-xl font-bold text-gray-900 mb-4">Personalized Care</h3>
                     <p className="text-gray-600">Receive tailored treatment plans and personalized attention from specialists who understand your needs.</p>
                  </div>

                  <div className="text-center group">
                     <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                        <FaBrain className="text-white text-2xl" />
                     </div>
                     <h3 className="text-xl font-bold text-gray-900 mb-4">AI-Enhanced Matching</h3>
                     <p className="text-gray-600">Our AI algorithms match you with the most suitable specialists based on your symptoms and preferences.</p>
                  </div>
               </div>
            </div>
         </section>

         {/* How It Works Section */}
         <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">
                     Your Journey to <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Better Health</span>
                  </h2>
                  <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                     Getting world-class medical care has never been easier. Here's how it works:
                  </p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  {[
                     { step: "01", title: "Create Account", description: "Sign up securely using Internet Identity for blockchain-powered authentication" },
                     { step: "02", title: "Find Specialist", description: "Browse our network of verified specialists or get AI-powered recommendations" },
                     { step: "03", title: "Book Consultation", description: "Schedule your appointment at a time that works for you, anywhere in the world" },
                     { step: "04", title: "Get Treatment", description: "Receive expert care through secure video consultations and digital prescriptions" }
                  ].map((phase, index) => (
                     <div key={index} className="text-center group">
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform">
                           {phase.step}
                        </div>
                        <h3 className="text-xl font-bold mb-4 group-hover:text-blue-400 transition-colors">
                           {phase.title}
                        </h3>
                        <p className="text-blue-100 leading-relaxed">
                           {phase.description}
                        </p>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* CTA Section */}
         <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
               <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                  Ready to Transform Your Healthcare Experience?
               </h2>
               <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-12">
                  Join thousands of patients who have already discovered the future of healthcare. 
                  Connect with world-class specialists today and take control of your health journey.
               </p>
               
               <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <button 
                     onClick={handleGetStarted}
                     className="bg-white text-blue-600 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-blue-50 transition-all transform hover:scale-105 shadow-2xl"
                  >
                     Start Your Health Journey
                  </button>
                  <button className="border-2 border-white text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white hover:text-blue-600 transition-all transform hover:scale-105">
                     Learn More About HelCon
                  </button>
               </div>

               {/* Trust Indicators */}
               <div className="mt-16 pt-8 border-t border-white/20">
                  <div className="flex flex-wrap justify-center items-center space-x-8 opacity-80">
                     <div className="text-white font-medium">🏥 500+ Specialists</div>
                     <div className="text-white font-medium">🌍 50+ Countries</div>
                     <div className="text-white font-medium">⭐ 4.9/5 Rating</div>
                     <div className="text-white font-medium">🔒 100% Secure</div>
                  </div>
               </div>
            </div>
         </section>

         <Footer />
         <ChatBot />
      </div>
   );
};

export default Specialists;