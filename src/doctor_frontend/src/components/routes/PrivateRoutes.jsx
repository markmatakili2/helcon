import React, { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserData } from '../../features/auth/account'; // Adjust the path as needed

const PrivateRoute = ({ element: Component }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { isRegistered, loading } = useSelector((state) => state.account.userData);
  const storedId = JSON.parse(localStorage.getItem('identifier'));

  useEffect(() => {
    if (storedId && !isRegistered && !loading) {
      dispatch(getUserData({ id: storedId.toNum }));
    }
  }, [storedId, isRegistered, loading, dispatch]);

  if (loading) {
    return <div>Loading...</div>; // Optionally show a spinner or placeholder
  }

  if (!isRegistered) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return <Component />;
};

export default PrivateRoute;
