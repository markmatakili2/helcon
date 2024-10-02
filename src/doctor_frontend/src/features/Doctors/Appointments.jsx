import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { helcon_backend } from '../../../../declarations/helcon_backend';

// Function to extract user info from the response
const extractUserInfo = (response) => {
  const { id, doctor_id, patient_id, ...rest } = response.Ok || response;
  return {
    ...rest,
    id: Number(id),
    doctor_id: Number(doctor_id)
  };
};

// Async thunk to fetch patient appointments
export const fetchPatientAppointments = createAsyncThunk(
  'appointments/fetchPatientAppointments',
  async (doctorId) => {
    const response = await helcon_backend.filter_appointments_by_doctor_id(doctorId);
    const result = response.map((appointment) => extractUserInfo(appointment));
    return result;
  }
);

// Async thunk to confirm an appointment
export const confirmAppointment = createAsyncThunk(
  'appointments/confirmAppointment',
  async (id,{rejectWithValue}) => {
    try {
      const response = await helcon_backend.complete_appointment(id); 
    const result =extractUserInfo(response)
    // Replace with actual backend method
    return result; 
    } catch (error) {
      rejectWithValue(error.message)
    }
    
    // Assuming response contains the updated appointment details
  }
);
export const deleteAppointment = createAsyncThunk(
  'appointments/deleteAppointment',
  async (appointmentId, { rejectWithValue }) => {
    try {
      const response = await helcon_backend.delete_appointment(appointmentId)
      
      if (response.Ok === null) {
        // Return the appointmentId to filter it out from the state
        return appointmentId;
      } else {
        throw new Error('Failed to delete appointment');
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Initial state
const initialState = {
  appointments: [], // Array to hold fetched appointments
  status: 'idle',
  deleteStatus:"idle", // Status of the fetch/create operation (idle, loading, succeeded, failed)
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
      })
      .addCase(confirmAppointment.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(confirmAppointment.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Update the appointment status in the state
        const updatedAppointment = action.payload;
        const index = state.appointments.findIndex(appointment => appointment.id === updatedAppointment.id);
        if (index !== -1) {
          state.appointments[index] = { ...state.appointments[index], ...updatedAppointment };
        }
      })
      .addCase(confirmAppointment.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(deleteAppointment.pending, (state) => {
        state.deleteStatus = 'loading';
        
      })
      .addCase(deleteAppointment.fulfilled, (state, action) => {
        state.deleteStatus = 'succeeded';
        state.appointments = state.appointments.filter(
          (appointment) => appointment.id !== action.payload
        ); // Remove deleted appointment
      })
      .addCase(deleteAppointment.rejected, (state, action) => {
        state.deleteStatus = 'failed';
        state.error = action.payload;
      });
  },
});

export default appointmentsSlice.reducer;
