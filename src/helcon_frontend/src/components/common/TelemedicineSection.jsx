import React from 'react';

const TelemedicineSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start justify-between">
          {/* Title Section */}
          <div className="lg:w-1/3 mb-12 lg:mb-0 self-start">
            <h2 className=" text-center text-4xl font-bold md:text-left mb-6 text-primary_1">The Possibilities of Telemedicine</h2>
            <p className=" text-center text-lg md:text-left md:w-2/3 ">
              Explore a new horizon of healthcare where convenience meets professionalism.
              Telemedicine on TeleHealth.de enables you to consult with certified doctors, manage your health records, and much more, all at the tap of a finger.
            </p>
          </div>

          {/* Features Section */}
          <div className="flex-1 grid gap-6 grid-cols-1 md:grid-cols-2 ">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-lg shadow-lg border">
              <h3 className="text-2xl font-semibold mb-4">Video Consultations for New or Existing Conditions</h3>
              <p>Schedule a video consultation with qualified doctors to receive personalized medical advice for new or ongoing health concerns, right from your home.</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-lg shadow-lg border">
              <h3 className="text-2xl font-semibold mb-4">Connect with Your Doctor or Discover a New One</h3>
              <p>Use our advanced search to connect with your trusted doctor or discover new medical professionals, ensuring a personalized and comfortable healthcare experience.</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-lg shadow-lg border">
              <h3 className="text-2xl font-semibold mb-4">Effortless Electronic Sick Leave Submission</h3>
              <p>Easily obtain and forward sick leave documentation to your employer, with our platform smoothing the communication between you, your healthcare provider, and employer.</p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-8 rounded-lg shadow-lg border">
              <h3 className="text-2xl font-semibold mb-4">Specialist Referrals and Expertise Discovery</h3>
              <p>Get referrals for specialty doctors or effortlessly find experts on our platform, guiding you to the right specialist for your healthcare needs.</p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white p-8 rounded-lg shadow-lg border">
              <h3 className="text-2xl font-semibold mb-4">Easy E-Prescription Requests and Refills</h3>
              <p>Effortlessly request new e-prescriptions or refill existing ones on our platform for continuous access to essential medications.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TelemedicineSection;
