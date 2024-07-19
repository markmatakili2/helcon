import { useSelector } from "react-redux"

const Dashboard = ()=>{
   const principal = useSelector((state)=>state.auth.principal)

return (
   <div className="">
      <h1>coming soon</h1>
      <p>{principal}</p>
      <button>logout</button>
   </div>
)
}

export default Dashboard