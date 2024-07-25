// src/features/patient/patientSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { helcon_backend } from '../../../../declarations/helcon_backend';

// Define the initial state of the patient slice
const initialState = {
  patient: null,
  status: 'idle',
  error: null,
};

// Async thunk for registering a patient
export const registerPatient = createAsyncThunk(
  'patients/registerPatient',
  async (patientData, { rejectWithValue }) => {
    const { name, contact_details, medical_history } = patientData;
    try {
      const response = await helcon_backend.register_patient(name,contact_details,medical_history);
      return response;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// Create the patient slice
const patientSlice = createSlice({
  name: 'patients',
  initialState,
  reducers: {
    // Define any synchronous actions here
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerPatient.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(registerPatient.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.patient = action.payload;
        console.log('Patient registered successfully:', action.payload);
      })
      .addCase(registerPatient.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
        console.error('Failed to register patient:', action.payload);
      });
  },
});

export default patientSlice.reducer;
