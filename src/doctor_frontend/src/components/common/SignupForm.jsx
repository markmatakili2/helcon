import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser, updateProfile } from '../../features/auth/account';
import { useNavigate } from 'react-router-dom';

const SignupForm = ({ mode = 'create', defaultValues = {}, userId = '' }) => {
   const { data } = useSelector((state) => state.account.identityData);
   const { loading } = useSelector((state) => state.account.userData);

   const navigate = useNavigate();
   const dispatch = useDispatch();

   const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
   } = useForm({
      defaultValues,
   });

   // ✅ Fix: prevent infinite re-renders
   useEffect(() => {
      if (defaultValues && Object.keys(defaultValues).length > 0) {
         reset(defaultValues);
      }
   }, [JSON.stringify(defaultValues), reset]);

   const onSubmit = async (formData) => {
      const id = localStorage.getItem('id');
      let userData;
      let response;

      if (mode === 'edit') {
         userData = { principal_id: userId, ...formData };
         response = await dispatch(updateProfile({ data: userData }));
      } else {
         userData = { principal_id: id, ...formData };
         response = await dispatch(registerUser({ data: userData }));
      }

      const { requestStatus } = response.meta;
      if (requestStatus === 'fulfilled') {
         navigate('/doctors');
      } else {
         console.log('Some error occurred:', requestStatus);
      }
   };

   return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
         <form
            className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full"
            onSubmit={handleSubmit(onSubmit)}
         >
            <h2 className="text-xl font-bold text-gray-800 mb-2 text-center">
               {mode === 'edit' ? 'Edit Your Information' : 'Hey there'}
            </h2>
            <p className="text-gray-600 mb-4 text-center">
               {mode === 'edit' ? 'Update your account details' : 'Join Helcon by creating an account'}
            </p>

            {/* First name */}
            <div className="mb-3">
               <label className="block text-gray-700 mb-1">First name</label>
               <input
                  type="text"
                  className="w-full p-1 border rounded-md border-gray-400 focus:outline-none focus:border-primary_1"
                  {...register('fname', { required: 'Name is required' })}
               />
               {errors.fname && <span className="text-red-500 text-sm">{errors.fname.message}</span>}
            </div>

            {/* Last name */}
            <div className="mb-3">
               <label className="block text-gray-700 mb-1">Last name</label>
               <input
                  type="text"
                  className="w-full p-1 border rounded-md border-gray-400 focus:outline-none focus:border-primary_1"
                  {...register('lname', { required: 'Name is required' })}
               />
               {errors.lname && <span className="text-red-500 text-sm">{errors.lname.message}</span>}
            </div>

            {/* D.O.B */}
            <div className="mb-3">
               <label className="block text-gray-700 mb-1">D.O.B</label>
               <input
                  type="date"
                  className="w-full p-1 border rounded-md border-gray-400 focus:outline-none focus:border-primary_1"
                  {...register('dob', { required: 'Age is required' })}
               />
               {errors.dob && <span className="text-red-500 text-sm">{errors.dob.message}</span>}
            </div>

            {/* Gender */}
            <div className="mb-3">
               <label className="block text-gray-700 mb-1">Gender</label>
               <select
                  {...register('sex')}
                  className="w-full p-1 border rounded-md border-gray-400 focus:outline-none focus:border-primary_1"
               >
                  <option value="female">female</option>
                  <option value="male">male</option>
               </select>
            </div>

            {/* Country */}
            <div className="mb-3">
               <label className="block text-gray-700 mb-1">Country</label>
               <input
                  type="text"
                  className="w-full p-1 border rounded-md border-gray-400 focus:outline-none focus:border-primary_1"
                  {...register('country', { required: 'Country is required' })}
               />
               {errors.country && <span className="text-red-500 text-sm">{errors.country.message}</span>}
            </div>

            {/* City */}
            <div className="mb-3">
               <label className="block text-gray-700 mb-1">City</label>
               <input
                  type="text"
                  className="w-full p-1 border rounded-md border-gray-400 focus:outline-none focus:border-primary_1"
                  {...register('city', { required: 'City is required' })}
               />
               {errors.city && <span className="text-red-500 text-sm">{errors.city.message}</span>}
            </div>

            {/* License No */}
            <div className="mb-3">
               <label className="block text-gray-700 mb-1">License No</label>
               <input
                  type="number"
                  className="w-full p-1 border rounded-md border-gray-400 focus:outline-none focus:border-primary_1"
                  {...register('licence_no', { required: 'License number is required', valueAsNumber: true })}
               />
               {errors.licence_no && <span className="text-red-500 text-sm">{errors.licence_no.message}</span>}
            </div>

            {/* Specialism */}
            <div className="mb-3">
               <label className="block text-gray-700 mb-1">Specialism</label>
               <input
                  type="text"
                  className="w-full p-1 border rounded-md border-gray-400 focus:outline-none focus:border-primary_1"
                  {...register('specialism', { required: 'Specialism is required' })}
               />
               {errors.specialism && <span className="text-red-500 text-sm">{errors.specialism.message}</span>}
            </div>

            {/* ID No */}
            <div className="mb-3">
               <label className="block text-gray-700 mb-1">ID No</label>
               <input
                  type="number"
                  className="w-full p-1 border rounded-md border-gray-400 focus:outline-none focus:border-primary_1"
                  {...register('id_no', { required: 'ID number is required', valueAsNumber: true })}
               />
               {errors.id_no && <span className="text-red-500 text-sm">{errors.id_no.message}</span>}
            </div>

            <button
               type="submit"
               className="w-full py-2 px-4 bg-primary_1 text-white rounded-md flex justify-center items-center"
               disabled={loading}
            >
               {loading ? 'Please wait ...' : (mode === 'edit' ? 'Update Account' : 'Create Account')}
            </button>
         </form>
      </div>
   );
};

export default SignupForm;
