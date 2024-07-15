import { configureStore } from '@reduxjs/toolkit';
import profileReducer from '../features/Doctors_info_profile';

export const store = configureStore({
  reducer: {
    profile: profileReducer,
    // Add more reducers as needed
  },
});

export default store;
