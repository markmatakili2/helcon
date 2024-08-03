import {FaEdit} from 'react-icons/fa'
const GeneralProfile = () => {
   return (

      <div className="flex flex-col space-y-6 p-4">
         <div className='bg-white p-4'>
            <div className="flex justify-between items-center ">
               <h2 className="text-xl font-bold">Personal Info</h2>
               <button className="flex items-center space-x-2 p-2  text-[#434966] rounded border ">
                  <span>Edit</span>
                  <FaEdit />
               </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 ">
               <div>
                  <p className="font-bold">Name:</p>
                  <p>Kevin</p>
               </div>
               <div>
                  <p className="font-bold">Date of Birth:</p>
                  <p>01/01/1990</p>
               </div>
               <div>
                  <p className="font-bold">Age:</p>
                  <p>34</p>
               </div>
               <div>
                  <p className="font-bold">Phone Number:</p>
                  <p>+254720113559</p>
               </div>
               <div>
                  <p className="font-bold">Email Address:</p>
                  <p>kevin@example.com</p>
               </div>
               <div>
                  <p className="font-bold">Bio:</p>
                  <p>Short bio goes here...</p>
               </div>
            </div>
         </div>

         {/* Fourth Child */}
         <div className="rounded bg-white p-4">
            {/* Additional content here */}
         </div>

         {/* Fifth Child */}
         <div className="rounded bg-white p-4">
            <h3 className="font-bold">Pre-existing Diseases</h3>
            <p className='text-center py-4'>No any pre-existig diseases at the moment</p>
         </div>

         {/* Sixth Child */}
         <div className="rounded bg-white p-4">
            <h3 className="font-bold">General</h3>
            {/* Additional content here */}
         </div>
      </div>
   )
}
export default GeneralProfile