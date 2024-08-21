import { FaEdit } from 'react-icons/fa'
import { useSelector } from 'react-redux'
const GeneralProfile = () => {
   const { data } = useSelector((state) => state.account.userData)
   // fname, lname, dob, specialism, licence_no, id_no, sex, country, city
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
                  <p>{data?.fname} {data?.lname}</p>
               </div>
               <div>
                  <p className="font-bold">Date of Birth:</p>
                  <p>{data?.dob}</p>
               </div>
               <div>
                  <p className="font-bold">Age:</p>
                  <p>34</p>
               </div>
               <div>
                  <p className="font-bold">Licence number </p>
                  <p>{data?.licence_no}</p>
               </div>
               <div>
                  <p className="font-bold">Specialism</p>
                  <p>{data?.specialism}</p>
               </div>
               <div>
                  <p className="font-bold">Id Number</p>
                  <p>{data?.id_no}</p>
               </div>
               <div>
                  <p className="font-bold">Sex</p>
                  <p>{data?.sex}</p>
               </div>
               <div>
                  <p className="font-bold">Country</p>
                  <p>{data?.country}</p>
               </div>
               <div>
                  <p className="font-bold">City</p>
                  <p>{data?.city}</p>
               </div>
            </div>
         </div>


      </div>
   )
}
export default GeneralProfile