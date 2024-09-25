import {useEffect} from "react"
import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"
import { useDispatch, useSelector } from 'react-redux';
import {fetchDoctors} from "../../features/Doctors/doctorListSlice"
const Dashboard = ()=>{
  const { doctors, status, error } = useSelector((state) => state.doctorList);
  const dispatch = useDispatch()

  useEffect(() => {
    const loadDoctors = async () => {
       await dispatch(fetchDoctors());
    };
    loadDoctors();
    console.log(doctors)
 }, [dispatch]);




   return (
      <div className="flex relative w-full min-h-screen">
      <div className="hidden md:block fixed top-0 left-0 h-full w-64">
        <Sidebar />
      </div>
      <div className="flex-1 w-full md:ml-64">
        <Outlet />
      </div>
    </div>
   )
}
export default Dashboard