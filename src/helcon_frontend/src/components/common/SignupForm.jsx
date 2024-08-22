import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../features/auth/account';
import { useNavigate } from 'react-router-dom';

const SignupForm = () => {
   const { data } = useSelector((state) => state.account.identityData)
   console.log(data)
   const {message,loading} = useSelector((state) => state.account.userData)
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
   const userId = localStorage.getItem('userId')
   console.log(userId)



   const onSubmit = async (data) => {
      const userData = { id:userId, ...data }
      
      const response = await dispatch(registerUser({data:userData}))
     
      const { requestStatus } = response.meta
      if (requestStatus === 'fulfilled') {
         navigate('/home')
      } else {
         console.log('some error occured adding the identity', requestStatus)
      }
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
                  {...register('username', { required: 'Username is required' })}
               />
               {errors.username && <span className="text-red-500 text-sm">{errors.username.message}</span>}
            </div>

             {message && (
               <div className="">
               <span className="text-red-500 text-sm">{message}</span>
            </div>
             )} 

            <button
               type="submit"
               className="w-full py-2 px-4 bg-primary_1 text-white rounded-md flex justify-center items-center"
               disabled={loading}
            >
               {loading ? 'Please wait ...' : 'Create account'}
            </button>
         </form>
      </div>
   );
};

export default SignupForm;
