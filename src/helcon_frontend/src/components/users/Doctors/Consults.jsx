// Import an icon from react-icons
import { NavLink } from 'react-router-dom';
import { FiEdit } from 'react-icons/fi';


const Consults = () => {








  return (
   <div className="p-4">
   <div className="space-y-6">
     {/* Repeatable Record */}
     {[1, 2,3,4].map((record, index) => (
       <div key={index} className="bg-white p-6 rounded-md shadow-md flex justify-between items-center">
         {/* First Column */}
         <div className="flex flex-col">
           <span className="font-bold">Thu</span>
           <span className="text-2xl">13</span>
         </div>

         {/* Second Column */}
         <div className="flex flex-col">
           <span className="font-bold">10:00pm</span>
           <span>Stephen Kevin</span>
         </div>

         {/* Third Column */}
         <div className="flex flex-col">
           <span className="font-bold">Issue: Fever</span>
           <NavLink to="/view-documents" className="text-blue-500">View Documents</NavLink>
         </div>

         {/* Fourth Column */}
         <div className="flex justify-end">
           <button className="flex items-center text-primary px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition duration-300">
             <FiEdit className="mr-2" />
             Edit
           </button>
         </div>
       </div>
     ))}
   </div>
 </div>
  );
};

export default Consults;
