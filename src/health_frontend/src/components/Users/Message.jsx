import ChatBubble from "./Chat"
import { useState } from "react"
import icons from "../../../utils/icons"

const UserMessages = ()=>{
   const [message,setMessage] = useState('')
    let m;
  
   const sendMessage = (e)=>{
      e.preventDefault()
      
      m = message
      console.log(m)

   }
      

   return (
     <div className="flex flex-col h-auto bg-[#475569] mx-4  p-4 w-full md:w-2/5 justify-between  rounded-lg mt-4">
    <div>
     <ChatBubble message="Hello!" isUser={true} />
      <ChatBubble message="Hi there!" isUser={false} />
      <ChatBubble message="How are you?" isUser={true} />
      <ChatBubble message="I'm good, thanks!" isUser={false} />
      </div>

      <form action="" className="self-start mb-[80px] relative text-white">
         <input type="text" placeholder="Type something ..." className="px-6  py-3 rounded-xl w-full bg-[gray] outline-none " onChange={(e)=>setMessage(e.target.value)}/>
         {message && (<button className="absolute top-2 right-4 text-2xl rotate-45" onClick={sendMessage}>{icons.message}</button>)}

      </form>

     </div>
   )
}
export default UserMessages