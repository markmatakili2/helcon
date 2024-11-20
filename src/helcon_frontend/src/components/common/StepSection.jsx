import React, { useState, useEffect } from "react";

const StepSection = () => {
  const stepsContent = [
    {
      title: "Step 1: Create or Access Your Internet Identity",
      description: "Sign up or log in using your Internet Identity to securely access the system.",
    },
    {
      title: "Step 2: Explore the Dashboard",
      description: "Once logged in, you can navigate your personalized dashboard to access available doctors.",
    },
    {
      title: "Step 3: Book a Call",
      description: "Select a doctor based on availability and book a consultation.",
    },
    {
      title: "Step 4: Get a Reminder",
      description: "Receive a notification when your call is about to start, ensuring you're ready for your consultation.",
    },
  ];

  const [currentStep, setCurrentStep] = useState(1);

  // Update currentStep based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const steps = document.querySelectorAll(".step");
      const stepOffsets = Array.from(steps).map((step) =>
        step.getBoundingClientRect().top
      );
      const windowHeight = window.innerHeight;

      stepOffsets.forEach((offset, index) => {
        if (offset < windowHeight / 2) {
          setCurrentStep(index + 1);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h2 className="text-3xl font-bold text-center mb-6">How It Works</h2>
        <p className="text-center mb-8">
          A simple, step-by-step journey towards accessible and reliable
          healthcare right from the comfort of your home.
        </p>

        <div className="flex items-start justify-between w-full">
          {/* Left Side: Steps */}
          <div className="w-1/2 space-y-12"> {/* Increase space between steps */}
            {stepsContent.map((step, index) => (
              <div key={index} className="step" id={`step-${index + 1}`}>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>

          {/* Right Side: Mobile Phone */}
          <div className="w-1/3 sticky top-20 overflow-y-auto max-h-[600px]">
            <div className="relative w-full max-w-[350px] h-[300px] bg-white rounded-3xl shadow-lg overflow-hidden">
              {/* Mobile Frame */}
              <div className="absolute top-0 left-0 w-full h-full bg-gray-800 rounded-3xl border-4 border-gray-300">
                {/* Mobile Screen */}
                <div className="absolute top-0 left-0 w-full h-full bg-white rounded-3xl overflow-y-scroll">
                  <div className="h-full p-4 flex flex-col justify-center items-center">
                    <div className="text-center">
                      <h3 className="font-semibold text-2xl">
                        {stepsContent[currentStep - 1].title}
                      </h3>
                      <p>{stepsContent[currentStep - 1].description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepSection;
