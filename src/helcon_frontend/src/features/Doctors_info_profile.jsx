import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  profile: {
 profilePic: 'https://images.app.goo.gl/Kpyfv7PA4x7qtbq4A',
    name: 'Dr. John Doe',
    level:'starting',
    specialist: 'Cardiologist',
    username:'@kevin',
    experience: 12,
    availability: {
      days: 'Tue, Thu',
      hours: '10:00am - 1:00pm',
    },
    amount: '$200',
  },
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    // Add reducers as needed
  },
});

export const selectProfile = (state) => state.profile.profile;

export default profileSlice.reducer;
