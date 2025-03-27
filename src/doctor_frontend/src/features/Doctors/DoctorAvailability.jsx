import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { helcon_backend } from '../../../../declarations/helcon_backend';

const extractUserInfo = (response) => {
   const { id,
      doctor_id, ...rest } = response;
   return {
      ...rest,
      id: Number(id),
      doctor_id: Number(doctor_id)


   };
}
// Async thunk for updating doctor availability
export const updateDoctorAvailability = createAsyncThunk(
   'doctorAvailability/update',
   async ({ doctor_id, day_of_week, start_time, end_time, is_available }, thunkAPI) => {
      try {
         const result = await helcon_backend.add_availability(doctor_id, day_of_week, start_time, end_time, is_available);
         // Assuming result contains the data you want to return
         return { doctor_id, day_of_week, start_time, end_time, is_available };
      } catch (error) {
         return thunkAPI.rejectWithValue(error.message);
      }
   }
);

// Async thunk for fetching doctor availability based on doctor_id
export const fetchAvailability = createAsyncThunk(
   'doctorAvailability/fetch',
   async (doctor_id, thunkAPI) => {
      try {
         const response = await helcon_backend.filter_availability_by_doctor_id(doctor_id)
         const result = response.map((d) => extractUserInfo(d))

         return result;
      } catch (error) {
         return thunkAPI.rejectWithValue(error.message);
      }
   }
);

const doctorAvailabilitySlice = createSlice({
   name: 'doctorAvailability',
   initialState: {
      availabilities: [],
      loading: false,
      error: null,
   },
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(updateDoctorAvailability.pending, (state) => {
            state.loading = true;
            state.error = null;
         })
         .addCase(updateDoctorAvailability.fulfilled, (state, action) => {
            state.loading = false;
            state.availabilities.push(action.payload);
            console.log(action.payload);
         })
         .addCase(updateDoctorAvailability.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
         })
         .addCase(fetchAvailability.pending, (state) => {
            state.loading = true;
            state.error = null;
         })
         .addCase(fetchAvailability.fulfilled, (state, action) => {
            state.loading = false;
            state.availabilities = action.payload;
            
         })
         .addCase(fetchAvailability.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
         });
   },
});

export default doctorAvailabilitySlice.reducer;
