import { useSelector } from "react-redux"

const Dashboard = ()=>{
   const principal = useSelector((state) => state.auth.principal);
  const userInfo = useSelector((state) => state.auth.userInfo);

return (
   <div className="">
      <div>
      {principal && <p>Principal: {principal}</p>}
      {userInfo && <p>User Info: {JSON.stringify(userInfo)}</p>}
    </div>
      <button>logout</button>
   </div>
)
}

export default Dashboard