import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { helcon_backend } from '../../../../declarations/helcon_backend';

const extractUserInfo = (response) => {
  const { id,
    doctor_id, patient_id, ...rest } = response.Ok || response;
  return {
    ...rest,
    id: Number(id),
    doctor_id: Number(doctor_id)


  };
}


export const fetchPatientAppointments = createAsyncThunk(
  'appointments/fetchPatientAppointments',
  async (doctorId) => {

    const response = await helcon_backend.filter_appointments_by_doctor_id(doctorId)
    const result = response.map((appointment) => extractUserInfo(appointment))
    return result
  }
);

// Initial state
const initialState = {
  appointments: [], // Array to hold fetched appointments
  status: 'idle', // Status of the fetch/create operation (idle, loading, succeeded, failed)
  error: null, // Error message if any operation fails
};

const appointmentsSlice = createSlice({
  name: 'appointments',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(fetchPatientAppointments.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPatientAppointments.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.appointments = action.payload; // Update with fetched appointments
      })
      .addCase(fetchPatientAppointments.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default appointmentsSlice.reducer;
