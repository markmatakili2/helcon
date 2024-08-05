import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { registerPatient } from '../../features/auth/authSlice';
import {useNavigate} from 'react-router-dom'

const SignupForm = () => {
   const navigate = useNavigate()
   const dispatch = useDispatch()

   
   const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();

   const onSubmit = async (data) => {
         dispatch(registerPatient({navigate,data}))
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
               <label className="block text-gray-700 mb-1">UserName</label>
               <input
                  type="text"
                  className="w-full p-1 border rounded-md border-gray-400 focus:outline-none focus:border-primary_1"
                  {...register('username', { required: 'username is required' })}
               />
               {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
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
               disabled={isSubmitting}
            >
               {isSubmitting ? (
                  <svg
                     className="animate-spin h-5 w-5 text-white"
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                  >
                     <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                     ></circle>
                     <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                     ></path>
                  </svg>
               ) : (
                  'Create Account'
               )}
            </button>
         </form>
      </div>
   );
};

export default SignupForm;
