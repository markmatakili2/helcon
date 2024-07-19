import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ element: Element }) => {
  const isAuthenticated = useSelector((state) => state.auth.authClient);
  const location = useLocation();

  // If not authenticated, redirect to login page
  if (!isAuthenticated) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  // If authenticated, render the requested element
  return <Element />;
};

export default PrivateRoute;
