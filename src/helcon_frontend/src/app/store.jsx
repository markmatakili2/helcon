import { configureStore } from '@reduxjs/toolkit';
import profileReducer from '../features/Doctors_info_profile';
import authSlice from '../features/auth/authSlice';
import PatientSlice from '../features/Patient/PatientSlice';
import DoctorSlice from '../features/Doctors/DoctorSlice';
import doctorListSlice from '../features/Doctors/doctorListSlice';
import accountSlice from '../features/auth/account'
import availabilitySlice from "../features/Doctors/Availability"
import  appointmentsSlice from "../features/Patient/AppointmentSlice"

export const store = configureStore({
  reducer: {
    profile: profileReducer,
    auth: authSlice,
    patients: PatientSlice,
    doctors: DoctorSlice,
    doctorList: doctorListSlice,
    account:accountSlice,
    availability:availabilitySlice,
    appointments:appointmentsSlice,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['patients/registerPatient/fulfilled'],
        ignoredPaths: ['patients.patient.Ok.id'],
      },
    }),
});

export default store;
