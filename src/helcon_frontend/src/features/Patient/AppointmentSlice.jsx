import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { helcon_backend } from '../../../../declarations/helcon_backend';



export const createAppointment = createAsyncThunk(
  'appointments/createAppointment',
  async (appointmentData, { rejectWithValue }) => {
    try {
      console.log(appointmentData)
      const {
        patient_id,
        doctor_id,
        phone_no,
        slot,
        reason,
        symptoms,
        status,
        appointment_type
      } = appointmentData;

      // Call the backend function with the appropriate parameters
      const response = await helcon_backend.add_appointment(
        patient_id,
        doctor_id,
        phone_no,
        slot,
        reason,
        symptoms,
        status,
        appointment_type
      );

      return response; // Return the response from the backend
    } catch (error) {
      // In case of error, reject with the error message
      return rejectWithValue(error.message);
    }
  }
);

export const fetchPatientAppointments = createAsyncThunk(
  'appointments/fetchPatientAppointments',
  async (patientId, { rejectWithValue }) => {
    try {
      const response = await helcon_backend.filter_appointments_by_patient_id(patientId);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
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
        console.log(action.payload)
        state.appointments.push(action.payload);
      })
      .addCase(createAppointment.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload; // Assign the error message from the rejected action
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
        state.error = action.payload; 
      });
  },
});

export default appointmentsSlice.reducer;
