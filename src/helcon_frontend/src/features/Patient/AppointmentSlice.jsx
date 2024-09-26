import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { helcon_backend } from '../../../../declarations/helcon_backend'; 
export const createAppointment = createAsyncThunk(
  'appointments/createAppointment',
  async (appointmentData) => {
  
    const response = await helcon_backend.add_appointment()
    return response; 
  }
);


export const fetchPatientAppointments = createAsyncThunk(
  'appointments/fetchPatientAppointments',
  async (patientId) => {

    const response = await helcon_backend.filter_appointments_by_patient_id(patientId)
    return response; 
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
      .addCase(createAppointment.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createAppointment.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Optionally add the new appointment to the existing list
        state.appointments.push(action.payload);
      })
      .addCase(createAppointment.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
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
