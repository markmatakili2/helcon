import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { helcon_backend } from '../../../../declarations/helcon_backend';
export const updateDoctorAvailability = createAsyncThunk(
   'doctorAvailability/update',
   async ({ doctor_id, day_of_week, start_time, end_time, is_available }, thunkAPI) => {
      try {
         const result = await helcon_backend.add_availability(doctor_id, day_of_week, start_time, end_time, is_available)
         //const { id,  } = result.Ok

         return { doctor_id, day_of_week, start_time, end_time, is_available };
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
            console.log(action.payload)
         })
         .addCase(updateDoctorAvailability.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
         });
   }
});

export default doctorAvailabilitySlice.reducer;
