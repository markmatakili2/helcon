import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { helcon_backend } from '../../../../declarations/helcon_backend';

const extractUserInfo = (response) => {
  const { id, doctor_id, patient_id, ...rest } = response.Ok || response;
  return {
    ...rest,
    id: Number(id),
    doctor_id: Number(doctor_id),
  };
};

// Async action to create an appointment
export const createAppointment = createAsyncThunk(
  'appointments/createAppointment',
  async (appointmentData, { rejectWithValue }) => {
    try {
      console.log(appointmentData);
      const {
        patient_id,
        doctor_id,
        phone_no,
        slot,
        reason,
        symptoms,
        status,
        appointment_type,
      } = appointmentData;

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
      let result = extractUserInfo(response);
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Async action to fetch appointments for a patient
export const fetchPatientAppointments = createAsyncThunk(
  'appointments/fetchPatientAppointments',
  async (patientId, { rejectWithValue }) => {
    console.log(patientId);
    try {
      const response = await helcon_backend.filter_appointments_by_patient_id(patientId);
      const result = response.map((appointment) => extractUserInfo(appointment));
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


export const editAppointment = createAsyncThunk(
  'appointments/editAppointment',
  async ({ id, updatedData }, { rejectWithValue }) => {
    try {
      const response = await helcon_backend.update_appointment()
      let result = extractUserInfo(response);
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Async action to delete an appointment
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
// Async action to cancel an appointment
export const cancelAppointment = createAsyncThunk(
  'appointments/cancelAppointment',
  async (appointmentId, { rejectWithValue }) => {
    try {
      const response = await helcon_backend.cancel_appointment(appointmentId)
      let result = extractUserInfo(response);
      return result;
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
      // Create appointment
      .addCase(createAppointment.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createAppointment.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.appointments.push(action.payload);
      })
      .addCase(createAppointment.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      
      // Fetch appointments
      .addCase(fetchPatientAppointments.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPatientAppointments.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.appointments = action.payload;
      })
      .addCase(fetchPatientAppointments.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      
      // Edit appointment
      .addCase(editAppointment.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(editAppointment.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const index = state.appointments.findIndex(
          (appointment) => appointment.id === action.payload.id
        );
        if (index !== -1) {
          state.appointments[index] = action.payload; // Update the appointment
        }
      })
      .addCase(editAppointment.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      
      // Delete appointment
      .addCase(deleteAppointment.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteAppointment.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.appointments = state.appointments.filter(
          (appointment) => appointment.id !== action.payload
        ); // Remove deleted appointment
      })
      .addCase(deleteAppointment.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      
      // Cancel appointment
      .addCase(cancelAppointment.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(cancelAppointment.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const index = state.appointments.findIndex(
          (appointment) => appointment.id === action.payload.id
        );
        if (index !== -1) {
          state.appointments[index] = action.payload; // Update the appointment with canceled status
        }
      })
      .addCase(cancelAppointment.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default appointmentsSlice.reducer;
