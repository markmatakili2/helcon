import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { helcon_backend } from '../../../../declarations/helcon_backend';

const extractUserInfo = (response) => {
  const { id,
    doctor_id,patient_id, ...rest } = response.Ok || response;
  return {
    ...rest,
    id: Number(id),
    doctor_id: Number(doctor_id)


  };
}


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
     let result = extractUserInfo(response)
      return result 
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
        const result = response.map((appointment)=>extractUserInfo(appointment))
        return result
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
