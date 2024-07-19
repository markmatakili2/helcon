import { configureStore } from '@reduxjs/toolkit';
import profileReducer from '../features/Doctors_info_profile';
import authSlice from '../features/authSlice';

export const store = configureStore({
  reducer: {
    profile: profileReducer,
    auth: authSlice,
    
  },
});

export default store;
