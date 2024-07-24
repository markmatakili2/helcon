import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"

const Dashboard = ()=>{

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