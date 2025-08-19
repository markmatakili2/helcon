import React, { useState, useEffect } from 'react';
import { FaHeart, FaUserMd, FaGlobe, FaChartLine } from 'react-icons/fa';

const StatsSection = () => {
  const [counters, setCounters] = useState({
    patients: 0,
    doctors: 0,
    countries: 0,
    consultations: 0
  });

  const finalValues = {
    patients: 10000,
    doctors: 500,
    countries: 50,
    consultations: 25000
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    const intervals = Object.keys(finalValues).map(key => {
      const increment = finalValues[key] / steps;
      let currentValue = 0;

      return setInterval(() => {
        currentValue += increment;
        if (currentValue >= finalValues[key]) {
          currentValue = finalValues[key];
          clearInterval(intervals[Object.keys(finalValues).indexOf(key)]);
        }
        setCounters(prev => ({
          ...prev,
          [key]: Math.floor(currentValue)
        }));
      }, stepDuration);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  const stats = [
    {
      icon: <FaHeart className="text-5xl text-red-500" />,
      value: counters.patients.toLocaleString(),
      label: "Lives Improved",
      suffix: "+",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: <FaUserMd className="text-5xl text-blue-500" />,
      value: counters.doctors.toLocaleString(),
      label: "Expert Doctors",
      suffix: "+",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: <FaGlobe className="text-5xl text-green-500" />,
      value: counters.countries,
      label: "Countries Served",
      suffix: "+",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <FaChartLine className="text-5xl text-purple-500" />,
      value: counters.consultations.toLocaleString(),
      label: "Consultations",
      suffix: "+",
      color: "from-purple-500 to-violet-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Transforming Healthcare Globally
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Join thousands of patients and healthcare providers who trust HelCon for secure, accessible, and innovative medical care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="group text-center transform hover:scale-105 transition-all duration-300"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex justify-center mb-4 group-hover:animate-pulse">
                  {stat.icon}
                </div>
                
                <div className="space-y-2">
                  <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-white/90 font-medium text-lg">
                    {stat.label}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-xl">
            Join Our Growing Community
          </button>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;