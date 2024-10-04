import Sidebar from '../../users/Sidebar'
import { Outlet } from "react-router-dom"
import DoctorHeader from './Header'
import {useSelector,useDispatch} from "react-redux"
import { FiX } from 'react-icons/fi'; 
const DoctorDashboard = ()=>{
  const isOpen = useSelector((state) => state.sidebar.isOpen);
  
  const dispatch = useDispatch()
   return (
   <div className="flex relative w-full min-h-screen">
      <div className={`${isOpen ? 'bg-primary_1 z-50 ':'hidden'} md:block fixed top-0 left-0 h-full w-64 flex flex-col`}>
        <Sidebar />
      </div>
      <div className="flex-1 w-full md:ml-64  bg-gray-100">
         <DoctorHeader/>
        <Outlet />
      </div>
    </div>
   )
}
export default DoctorDashboard