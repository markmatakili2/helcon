import React from 'react';

import ProfileHeader from './ProfileHeader'
import { Outlet } from 'react-router-dom';

const ProfilePage = () => {
  return (
    <div className="bg-[#F4F4F4] min-h-screen p-4 flex flex-col space-y-4 w-full">
      <ProfileHeader/>
      <Outlet/>
      {/* Third Child */}
     
    </div>
  );
};

export default ProfilePage;
