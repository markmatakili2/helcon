import icons from "../../utils/icons";
const Footer = () => {
   return (
     <div className="h-64 w-full flex flex-col bg-[#0f0f3e]  text-white py-4 px-10 items-center justify-center space-y-6">
        <div className="flex space-x-6 md:space-x-10">
         <p className="">About</p>
         <p className="">Contribute</p>
         <p className="">Mission</p>
         <p className="">Vision</p>
         <p className="">Partners</p>
        </div>
        <div className="flex space-x-6 md:space-x-8">
         <p className="text-2xl px-2">{icons.github}</p>
         <p className="text-2xl px-2">{icons.youtube}</p>
         <p className="text-2xl px-2">{icons.insta}</p>
         <p className="text-2xl px-2">{icons.facebook}</p>
         <p className="text-2xl px-2">{icons.x}</p>
        </div>

       <div className="text-center flex">
         <p className="text-sm">&copy;2024 Your Company, Inc. All rights reserved.</p>
       </div>
     </div>
   );
 };
 
 export default Footer;
 