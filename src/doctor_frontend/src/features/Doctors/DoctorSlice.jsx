// src/features/doctor/doctorSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { helcon_backend } from '../../../../declarations/helcon_backend'; // Adjust import path as necessary

// Define the initial state of the doctor slice
const initialState = {
   doctor: null,
   status: 'idle',
   error: null,
};
//fn add_doctor(name: String, age: u64, specialism: String, licence_no: u64, id_no: u64, sex: String, country: String, city: String)
// Async thunk for registering a doctor
export const registerDoctor = createAsyncThunk(
   'doctors/registerDoctor',
   async (doctorData, { rejectWithValue }) => {
      const { name, age, specialism, licence_no, id_no, sex, country, city } = doctorData;
      try {
         const response = await helcon_backend.add_doctor(name, age, specialism, licence_no, id_no, sex, country, city);


         const serializedResponse = {
            ...response,
            Ok: {
               ...response.Ok,
               id: Number(response.Ok.id), // Convert BigInt to number
               licence_no: Number(response.Ok.licence_no),
               id_no: Number(response.Ok.id_no),
               age: Number(response.Ok.age),
            },
         };
         return serializedResponse;
      } catch (err) {
         return rejectWithValue(err.message);
      }
   }
);

// Create the doctor slice
const doctorSlice = createSlice({
   name: 'doctors',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(registerDoctor.pending, (state) => {
            state.status = 'loading';
         })
         .addCase(registerDoctor.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.doctor = action.payload;
            console.log('Doctor registered successfully:', action.payload);
         })
         .addCase(registerDoctor.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.payload;
            console.error('Failed to register doctor:', action.payload);
         });
   },
});

export default doctorSlice.reducer;
