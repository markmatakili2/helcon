import {useEffect} from "react"
import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"
import { useDispatch, useSelector } from 'react-redux';
import {fetchDoctors} from "../../features/Doctors/doctorListSlice"
const Dashboard = ()=>{
  const { doctors, status, error } = useSelector((state) => state.doctorList);
  const dispatch = useDispatch()
  const isOpen = useSelector((state) => state.sidebar.isOpen);
  useEffect(() => {
    const loadDoctors = async () => {
       await dispatch(fetchDoctors());
    };
    loadDoctors();
    
 }, [dispatch]);




   return (
    <div className="flex relative w-full min-h-screen">
      <div className={`${isOpen ? 'bg-primary_1 z-50 ':'hidden'} md:block fixed top-0 left-0 h-full w-64 flex flex-col`}>
      <Sidebar />
    </div>
     
    <div className="flex-1 w-full md:ml-64  bg-gray-100">
        <Outlet />
      </div>
    </div>
   )
}
export default Dashboard


