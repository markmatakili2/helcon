// optionsSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  options: {
    doctor: 'doctor', // Initial state for doctor option
    patient: 'patient', // Initial state for patient option
  },
};

const optionsSlice = createSlice({
  name: 'options',
  initialState,
  reducers: {
    setOptions: (state, action) => {
      state.options = action.payload;
    },
  },
});

export const { setOptions } = optionsSlice.actions;
export const doctor = (state) => state.options.options.doctor;
export const patient = (state) => state.options.options.patient;
export default optionsSlice.reducer;
