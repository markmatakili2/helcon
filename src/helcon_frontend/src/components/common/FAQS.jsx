import React, { useState } from 'react';

const FAQSection = () => {
  const [isOpen, setIsOpen] = useState(null);

  const toggleDropdown = (index) => {
    setIsOpen(isOpen === index ? null : index);
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-12">
        {/* Left Child: FAQs Title and Description */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold">FAQs</h2>
          <p className="mt-4 text-lg">
            Frequently Asked Questions: Get Answers to Your Queries about Navigating TeleHealth.de, Scheduling Appointments, and Ensuring Data Security.
          </p>
        </div>

        {/* Right Child: FAQ Items */}
        <div className="w-full md:w-1/2 space-y-4">
          {[
            {
              question: "Searching For a Doctor",
              answer: "To search for a doctor, use the search bar on your dashboard to filter doctors by specialty, availability, and ratings.",
            },
            {
              question: "Joining the Call",
              answer: "To join a call, simply click the 'Join Call' button at your scheduled time, and you’ll be connected with the doctor.",
            },
            {
              question: "Medical Information",
              answer: "All medical information is securely stored and accessible only to authorized personnel with proper consent.",
            },
            {
              question: "Data Security",
              answer: "Your data is encrypted and follows strict data protection regulations, ensuring your information is kept private and secure.",
            },
          ].map((faq, index) => (
            <div
              key={index}
              className="border-t border-b py-4"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleDropdown(index)}
              >
                <h3 className="font-semibold text-lg">{faq.question}</h3>
                <span className={`transform transition-all ${isOpen === index ? 'rotate-180' : ''}`}>
                  &#9660;
                </span>
              </div>
              {isOpen === index && (
                <div className="mt-2 text-gray-700">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
