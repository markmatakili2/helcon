import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { helcon_backend } from '../../../../declarations/helcon_backend';

// Function to extract user information
const extractUserInfo = (response) => {
   const { id, licence_no, id_no, ...rest } = response;
   return {
      ...rest,
      id: Number(id),
      licence_no: Number(licence_no),
      id_no: Number(id_no)
   };
}

// Async thunk to fetch doctors
export const fetchDoctors = createAsyncThunk(
   'doctorList/fetchDoctors',
   async (_, { rejectWithValue }) => {
      try {
         const response = await helcon_backend.list_doctors();
         
         // Map and transform each doctor
         const result = response.map((doctor) => extractUserInfo(doctor));

         // Return the transformed data
         return result;

      } catch (err) {
         console.log("error", err);
         return rejectWithValue(err.message);
      }
   }
);

const doctorListSlice = createSlice({
   name: 'doctorList',
   initialState: { doctors: null, status: 'idle', error: null },
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(fetchDoctors.pending, (state) => {
            state.status = 'loading';
         })
         .addCase(fetchDoctors.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.doctors = action.payload; 
            console.log("Doctors data:", action.payload);
         })
         .addCase(fetchDoctors.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.payload;
         });
   },
});

export default doctorListSlice.reducer;
