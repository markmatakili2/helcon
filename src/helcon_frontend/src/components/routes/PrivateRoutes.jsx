// import React from 'react';
// import { Navigate, useLocation } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// // Define PrivateRoute component
// const PrivateRoute = ({ element: Element }) => {
//   const isAuthenticated = useSelector((state) => state.auth.authClient);
//   let principalId=  localStorage.getItem('principal')
//   const location = useLocation();

//   // If not authenticated, redirect to homepage
//   if (!isAuthenticated) {
//     return <Navigate to="/" state={{ from: location }} replace />;
//   }

//   // If authenticated, render the requested element
//   return <Element />;
// };

// export default PrivateRoute;
