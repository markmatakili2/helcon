// src/features/Doctors/doctorListSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { helcon_backend } from '../../../../declarations/helcon_backend';

// Async thunk to fetch doctors
export const fetchDoctors = createAsyncThunk(
   'doctorList/fetchDoctors',
   async (_, { rejectWithValue }) => {
      try {
         const response = await helcon_backend.list_doctors()
       
         





         return response;
      } catch (err) {
         return rejectWithValue(err.message);
      }
   }
);

const doctorListSlice = createSlice({
   name: 'doctorList',
   initialState: { doctors: [], status: 'idle', error: null },
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(fetchDoctors.pending, (state) => {
            state.status = 'loading';
         })
         .addCase(fetchDoctors.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.doctors = action.payload;
           
         })
         .addCase(fetchDoctors.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.payload;
         });
   },
});

export default doctorListSlice.reducer;
