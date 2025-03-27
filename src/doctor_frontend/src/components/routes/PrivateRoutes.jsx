import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ element }) => {
  const { isRegistered, data } = useSelector((state) => state.account.userData);

  return (isRegistered && data) ? element : <Navigate to="/" />
};

export default ProtectedRoute;
