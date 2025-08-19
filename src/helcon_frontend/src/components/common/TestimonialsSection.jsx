import React, { useState } from 'react';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      role: "Cardiologist",
      location: "New York, USA",
      rating: 5,
      text: "HelCon has revolutionized how I connect with patients globally. The blockchain security gives both me and my patients complete confidence in our consultations.",
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      role: "Patient",
      location: "Singapore",
      rating: 5,
      text: "I was able to consult with a specialist in Germany from my home in Singapore. The platform is incredibly secure and user-friendly. Truly the future of healthcare!",
      avatar: "MC"
    },
    {
      name: "Dr. Amara Okafor",
      role: "Pediatrician",
      location: "Lagos, Nigeria",
      rating: 5,
      text: "The decentralized nature of HelCon allows me to serve patients across Africa without worrying about data security. It's empowering healthcare providers everywhere.",
      avatar: "AO"
    },
    {
      name: "Emma Rodriguez",
      role: "Patient",
      location: "Madrid, Spain",
      rating: 5,
      text: "The AI-powered preliminary diagnostics helped me understand my symptoms before my consultation. The entire experience was seamless and professional.",
      avatar: "ER"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Community</span> Says
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from doctors and patients who are already experiencing the future of healthcare with HelCon.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial Card */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                  {testimonials[currentTestimonial].avatar}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <FaQuoteLeft className="text-3xl text-blue-600 mb-4 mx-auto md:mx-0" />
                
                <p className="text-xl text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonials[currentTestimonial].text}"
                </p>

                <div className="space-y-2">
                  <div className="flex justify-center md:justify-start space-x-1 mb-3">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 text-lg" />
                    ))}
                  </div>
                  
                  <h4 className="text-xl font-bold text-gray-900">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-blue-600 font-medium">
                    {testimonials[currentTestimonial].role}
                  </p>
                  <p className="text-gray-500">
                    📍 {testimonials[currentTestimonial].location}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-blue-600 hover:shadow-xl transition-all"
          >
            <FaChevronLeft />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-blue-600 hover:shadow-xl transition-all"
          >
            <FaChevronRight />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentTestimonial 
                    ? 'bg-blue-600 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-blue-600">98%</div>
            <div className="text-gray-600">Patient Satisfaction</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-green-600">24/7</div>
            <div className="text-gray-600">Available Support</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-purple-600">100%</div>
            <div className="text-gray-600">Data Security</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;