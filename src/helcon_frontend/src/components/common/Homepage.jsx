import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Loading from './Loading';
import { getUserData } from '../../features/auth/account';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import StatsSection from './StatsSection';
import TestimonialsSection from './TestimonialsSection';
import CTASection from './CTASection';
import FAQSection from './FAQS';

const HomePage = () => {
  const { isRegistered, data, loading } = useSelector((state) => state.account.userData);
  const { principalData, identityData } = useSelector((state) => state.account);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const identifier = localStorage.getItem('identifier');
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (identifier) {
      const queryId = JSON.parse(identifier);
      dispatch(getUserData({ id: queryId.toNum }));
    }
  }, [dispatch]);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    if (isLoggedIn && !loading && isRegistered && data) {
      navigate('/home');
    }
  }, [navigate, isRegistered, data, loading]);

  if (loading || principalData.loading || identityData.loading) {
    return <Loading />;
  }

  return (
    <div className='overflow-x-hidden w-full bg-white'>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default HomePage;