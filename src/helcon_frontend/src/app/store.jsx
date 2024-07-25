import { configureStore } from '@reduxjs/toolkit';
import profileReducer from '../features/Doctors_info_profile';
import authSlice from '../features/auth/authSlice';
import PatientSlice from '../features/Patient/PatientSlice';
import DoctorSlice from '../features/Doctors/DoctorSlice';
import doctorListSlice from '../features/Doctors/doctorListSlice';

export const store = configureStore({
  reducer: {
    profile: profileReducer,
    auth: authSlice,
    patients: PatientSlice,
    doctors: DoctorSlice,
    doctorList: doctorListSlice,
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
