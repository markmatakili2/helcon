// import React, { useEffect, useState } from 'react';
// import { Navigate, useLocation } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// // Define PrivateRoute component
// const PrivateRoute = ({ element: Element }) => {
//   const isAuthenticated = useSelector((state) => state.auth.authClient);
//   const [shouldRedirect, setShouldRedirect] = useState(false);
//   const location = useLocation();


//   useEffect(() => {

//     // If not authenticated, set redirect state
//     if (!isAuthenticated) {
//       setShouldRedirect(true);
//     } else {
//       setShouldRedirect(false);
//     }
//   }, [isAuthenticated]); // Dependency array listens for changes in isAuthenticated

//   // If shouldRedirect is true, redirect to homepage
//   if (shouldRedirect) {
//     return <Navigate to="/" state={{ from: location }} replace />;
//   }

//   // If authenticated, render the requested element
//   return <Element />;
// };

// export default PrivateRoute;
