import React from 'react';
import { useForm, } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../features/auth/account';
import { useNavigate } from 'react-router-dom';

const NewReport = () => {
  

   const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
   
   const onSubmit = async (data) => {
      // patient_id: u64,
      // username: String,
      // symptoms: String,
      // diagnostic: String,
      // prescription: String,
      // recommendations: String,
      // multimedia_content: Option<MultiMediaContent>,
    
   };
   return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
         <form
            className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full"
            onSubmit={handleSubmit(onSubmit)}
         >
            <h2 className="text-xl font-bold text-gray-800 mb-2 text-center">Hey there</h2>
            <p className="text-gray-600 mb-4 text-center">Join Helcon by creating an account</p>


            <div className="mb-3">
               <label className="block text-gray-700 mb-1">Patient Id</label>
               <input
                  type="text"
                  className="w-full p-1 border rounded-md border-gray-400 focus:outline-none focus:border-primary_1"
                  {...register('patient_id', { required: 'Name is required',valueAsNumber:true })}
               />
               {errors.patient_id && <span className="text-red-500 text-sm">{errors.patient_id.message}</span>}
            </div>
            <div className="mb-3">
               <label className="block text-gray-700 mb-1"> Patient Username</label>
               <input
                  type="text"
                  className="w-full p-1 border rounded-md border-gray-400 focus:outline-none focus:border-primary_1"
                  {...register('lname', { required: 'Name is required' })}
               />
               {errors.lname && <span className="text-red-500 text-sm">{errors.lname.message}</span>}
            </div>
            <div className="mb-3">
               <label className="block text-gray-700 mb-1">D.O.B</label>
               <input
                  type="date"
                  className="w-full p-1 border rounded-md border-gray-400 focus:outline-none focus:border-primary_1"
                  {...register('dob', { required: 'Age is required', })}
               />
               {errors.dob && <span className="text-red-500 text-sm">{errors.dob.message}</span>}
            </div>
            <div className="mb-3">
               <label className="block text-gray-700 mb-1">Gender</label>
               <select {...register("gender")} className='w-full p-1 border rounded-md border-gray-400 focus:outline-none focus:border-primary_1"'>
                  <option value="female" className="w-2/5">female</option>
                  <option value="male" className="w-2/5">male</option>

               </select>
            </div>

            <div className="mb-3">
               <label className="block text-gray-700 mb-1">Country</label>
               <input
                  type="text"
                  className="w-full p-1 border rounded-md border-gray-400 focus:outline-none focus:border-primary_1"
                  {...register('country', { required: 'Country is required' })}
               />
               {errors.country && <span className="text-red-500 text-sm">{errors.country.message}</span>}
            </div>
            <div className="mb-3">
               <label className="block text-gray-700 mb-1">City</label>
               <input
                  type="text"
                  className="w-full p-1 border rounded-md border-gray-400 focus:outline-none focus:border-primary_1"
                  {...register('city', { required: 'City is required' })}
               />
               {errors.city && <span className="text-red-500 text-sm">{errors.city.message}</span>}
            </div>
            <div className="mb-3">
               <label className="block text-gray-700 mb-1">License No</label>
               <input
                  type="number"
                  className="w-full p-1 border rounded-md border-gray-400 focus:outline-none focus:border-primary_1"
                  {...register('licence_no', { required: 'License number is required', valueAsNumber: true })}
               />
               {errors.licence_no && <span className="text-red-500 text-sm">{errors.licence_no.message}</span>}
            </div>
            <div className="mb-3">
               <label className="block text-gray-700 mb-1">Specialism</label>
               <input
                  type="text"
                  className="w-full p-1 border rounded-md border-gray-400 focus:outline-none focus:border-primary_1"
                  {...register('specialism', { required: 'Specialism is required' })}
               />
               {errors.specialism && <span className="text-red-500 text-sm">{errors.specialism.message}</span>}
            </div>
            <div className="mb-3">
               <label className="block text-gray-700 mb-1">ID No</label>
               <input
                  type="number"
                  className="w-full p-1 border rounded-md border-gray-400 focus:outline-none focus:border-primary_1"
                  {...register('id_no', { required: 'ID number is required', valueAsNumber: true })}
               />
               {errors.id_no && <span className="text-red-500 text-sm">{errors.id_no.message}</span>}
            </div>


            {/* <div className="mb-3">
               <label className="block text-gray-700 mb-1">Contact Details</label>
               <input
                  type="text"
                  className="w-full p-1 border rounded-md border-gray-400 focus:outline-none focus:border-primary_1"
                  {...register('contact_details')}
               />
               {errors.contact_details && <span className="text-red-500 text-sm">{errors.contact_details.message}</span>}
            </div>
            <div className="mb-3">
               <label className="block text-gray-700 mb-1">Medical History</label>
               <textarea
                  className="w-full p-1 border rounded-md border-gray-400 focus:outline-none focus:border-primary_1"
                  {...register('medical_history')}
               ></textarea>
               {errors.medical_history && <span className="text-red-500 text-sm">{errors.medical_history.message}</span>}
            </div> */}


            <button
               type="submit"
               className="w-full py-2 px-4 bg-primary_1 text-white rounded-md flex justify-center items-center"
               disabled={loading}
            >
              {loading ? 'please wait ...':'create account'}
            </button>
         </form>
      </div>
   );
};

export default SignupForm;
