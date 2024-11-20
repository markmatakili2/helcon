import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileCard from './Doctor_profile';
import Header from './Header';
import Footer from './Footer';
import Banner from './Banner';
import Loading from './Loading';
import { getUserData } from '../../features/auth/account';
import bgImage from "../../images/mompic.jpg"
import StepSection from './StepSection'
import FAQSection from "./FAQS"
import TelemedicineSection from './TelemedicineSection'
import sickWoman from '../../images/sick-woman.webp'

const HomePage = () => {
  const { isRegistered, data, loading } = useSelector((state) => state.account.userData);
  const { principalData, identityData } = useSelector((state) => state.account);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch user data only if there is an identifier
    const identifier = localStorage.getItem('identifier');
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (identifier) {
      const queryId = JSON.parse(identifier);
      dispatch(getUserData({ id: queryId.toNum }));
    }
  }, [dispatch]);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    // Navigate to home if logged in and user data is loaded
    if (isLoggedIn && !loading && isRegistered && data) {
      navigate('/home');
    }
  }, [navigate, isRegistered, data, loading]);

  // Show loading screen while waiting for either user data or account-related data to load
  if (loading || principalData.loading || identityData.loading) {
    return <Loading />;
  }

  // Render the homepage content if not logged in
  return (
    <div className='overflow-x-hidden w-full'>
      <div className="fixed top-0 left-0 w-full bg-white z-50">
        <Header />
      </div>
      <div className="h-screen relative mt-20">
        <img
          src={bgImage}
          alt="background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-30" />
        <section className="absolute inset-0 flex   justify-start py-16">
          <div className="pl-8 pt-4">
            <h2 className="text-3xl font-bold mb-4  text-white">Access Helcon Anywhere, Anytime</h2>
            <p className="text-lg mb-8 w-1/2 text-white">Get proactive with your health. Our web app offers convenient and timely medical support, right at your fingertips, no download required.</p>
            <button className="bg-primary_1 text-white py-3 px-6 rounded-lg hover:bg-teal-600 hover:text-white transition-all">
              Get Started
            </button>
          </div>

        </section>

      </div>
      <StepSection />
      <TelemedicineSection />

      <section className="relative h-80 w-full">
      <img
          src={sickWoman}
          alt="background"
          className="absolute inset-0 md:w-full h-full md:object-cover object-fit"
        />
        <div className="absolute inset-0 flex flex-col p-10 mt-10"><h2 className=" text-2xl text-center md:text-left text-primary_1 font-bold">Accessible Medical Care That Fits Your Schedule</h2>
          <p className="text-center md:text-left md:w-1/3 my-4">
            Don't wait until you feel under the weather. Download now, and have medical expertise ready whenever you need it, right in your cozy space.
          </p></div>
      </section>
      {/* <Banner />
      <ProfileCard /> */}
      <FAQSection />

      <Footer />
    </div>
  );
};

export default HomePage;
