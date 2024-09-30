import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileCard from './Doctor_profile';
import Header from './Header';
import Footer from './Footer';
import Banner from './Banner';
import Loading from './Loading';
import { getUserData } from '../../features/auth/account';

const HomePage = () => {
  const { isRegistered, data, loading } = useSelector((state) => state.account.userData);
  const { principalData, identityData } = useSelector((state) => state.account);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch user data only if there is an identifier
    const identifier = localStorage.getItem('identifier');
    if (identifier) {
      const queryId = JSON.parse(identifier);
      dispatch(getUserData({ id: queryId.toNum }));
    }
  }, [dispatch]);

  useEffect(() => {
    
    if (!loading && isRegistered && data) {
      navigate('/home');
    }
  }, [navigate, isRegistered, data, loading]);

  // Show loading screen while waiting for either user data or account-related data to load
  if (loading || principalData.loading || identityData.loading) {
    return <Loading />;
  }

  return (
    <div className='overflow-x-hidden w-full'>
      <Header />
      <Banner />
      <ProfileCard />
      <Footer />
    </div>
  );
};

export default HomePage;
