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
export const fetchAvailabilityByDoctorId = createAsyncThunk(
  'availability/fetchByDoctorId',
  async (doctorId, { rejectWithValue }) => {
    console.log("testing", doctorId)
    try {
      const response = await helcon_backend.filter_availability_by_doctor_id(doctorId)
      const result = response.map((d) => extractUserInfo(d))
      console.log(result)
      return result;
    } catch (error) {
      console.log("error", error)
      return rejectWithValue(error.message || 'Failed to fetch availability');
    }
  }
);

const availabilitySlice = createSlice({
  name: 'availability',
  initialState: {
    availabilityData: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAvailabilityByDoctorId.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchAvailabilityByDoctorId.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.availabilityData = action.payload;
        

      })
      .addCase(fetchAvailabilityByDoctorId.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

// Selectors for accessing state
export const selectAvailabilityData = (state) => state.availability.availabilityData;
export const selectAvailabilityStatus = (state) => state.availability.status;
export const selectAvailabilityError = (state) => state.availability.error;

export default availabilitySlice.reducer;
