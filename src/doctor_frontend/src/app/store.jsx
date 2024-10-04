import { configureStore } from '@reduxjs/toolkit';
import profileReducer from '../features/Doctors_info_profile';
import authSlice from '../features/auth/authSlice';
import PatientSlice from '../features/Patient/PatientSlice';
import DoctorSlice from '../features/Doctors/DoctorSlice';
import doctorListSlice from '../features/Doctors/doctorListSlice';
import accountSlice from '../features/auth/account'
import doctorAvailabilitySlice from '../features/Doctors/DoctorAvailability'
import appointmentsSlice  from "../features/Doctors/Appointments"
import sidebarSlice from "../features/SidebarBarSlice"

export const store = configureStore({
  reducer: {
    profile: profileReducer,
    auth: authSlice,
    patients: PatientSlice,
    doctors: DoctorSlice,
    doctorList: doctorListSlice,
    account:accountSlice,
    availability:doctorAvailabilitySlice,
    appointment:appointmentsSlice,
    sidebar:sidebarSlice,
  },
});

export default store;
