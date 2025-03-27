import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUserData } from './auth/account';

export const useFetchUserData = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUserInfo = async () => {
      const identifier = localStorage.getItem('identifier');
      if (identifier) {
        const { toNum } = JSON.parse(identifier);
        dispatch(getUserData({ id: toNum }));
        console.log('Dispatched getUserData with id:', toNum);
      }
    };

    fetchUserInfo();
  }, [dispatch]);
};
