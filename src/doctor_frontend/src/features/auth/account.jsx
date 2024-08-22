import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AuthClient } from '@dfinity/auth-client';
import { HttpAgent } from '@dfinity/agent';
import { helcon_backend } from '../../../../declarations/helcon_backend';

let authClient;

const initializeAuthClient = async () => {
   if (!authClient) {
      authClient = await AuthClient.create();
   }
   return authClient;
};

// Utility function to extract and convert user information
const extractUserInfo = (response) => {
   const { id, licence_no, id_no, ...rest } = response.Ok;
   return {
      ...rest,
      id: Number(id),
      licence_no: Number(licence_no),
      id_no: Number(id_no)
   };
};
export const getPrincipal = createAsyncThunk(
   'auth/getPrincipal',
   async (_, { dispatch, rejectWithValue }) => {
     try {
       const client = await initializeAuthClient();
 
       // Wrap the login in a Promise
       return new Promise((resolve, reject) => {
         client.login({
           onSuccess: async () => {
             try {
               const identity = client.getIdentity();
               const principal = identity.getPrincipal().toString();
 
               if (principal) {
                 dispatch(setPrincipal(principal));
                 resolve(principal); // Resolve with the principal
               } else {
                 reject(new Error('Principal is undefined'));
               }
             } catch (error) {
               console.error("Error during login onSuccess callback:", error.message);
               reject(new Error(error.message));
             }
           },
           onError: (error) => {
             console.error("Login failed:", error.message);
             reject(new Error(error.message));
           }
         });
       });
     } catch (error) {
       console.error("Login caught error:", error.message);
       return rejectWithValue(error.message);
     }
   }
 );
 

export const addIdentity = createAsyncThunk(
   'auth/addIdentity',
   async ({ principal }, { rejectWithValue }) => {
      try {
         const response = await helcon_backend.add_docidentity(principal);
         if (response.Ok) {
            const { id, principal } = response.Ok;
            const userInfo = {
               id: Number(id),
               principal
            };
            return userInfo;
         } else {
            const { AlreadyExists } = response.Err;
            return rejectWithValue(AlreadyExists.msg);
         }
      } catch (error) {
         console.error("Error adding identity:", error.message);
         return rejectWithValue(error.message);
      }
   }
);

export const registerUser = createAsyncThunk(
   'auth/registerUser',
   async ({ data }, { rejectWithValue, dispatch }) => {
      console.log(data)


      try {
         const {principal_id,fname, lname, dob, specialism, licence_no, id_no, gender, country, city } = data;
         const response = await helcon_backend.add_doctor(principal_id, fname, lname, dob, specialism, licence_no, id_no, gender, country, city)
         if (response.Ok) {
            const userInfo = extractUserInfo(response);
            dispatch(setQueryId({ id: userInfo.id }));
            return userInfo;
         } else {
            //const { AlreadyExists } = response.Err;
            return rejectWithValue(response.Err);
         }
      } catch (error) {
         console.error("Error registering user:", error.message);
         return rejectWithValue(error.message);
      }
   }
);

export const getUserData = createAsyncThunk(
   'auth/getUserData',
   async ({ id }, { rejectWithValue }) => {
      try {
         const response = await helcon_backend.get_doctor(id);
         if (response.Ok) {
            const userInfo = extractUserInfo(response);
            return userInfo;
         } else {
            return rejectWithValue(response.Err);
         }
      } catch (error) {
         console.error("Error fetching user data:", error.message);
         return rejectWithValue(error.message);
      }
   }
);

const accountSlice = createSlice({
   name: 'account',
   initialState: {
      principalData: {
         loading: false,
         message: '',
         principal: null
      },
      identityData: {
         loading: false,
         message: '',
         data: null
      },
      userData: {
         loading: false,
         message: '',
         data: null,
         isRegistered: false
      }
   },
   reducers: {
      setPrincipal: (state, action) => {
         state.principalData.principal = action.payload;
         localStorage.setItem('principal', JSON.stringify(action.payload));
      },
      setQueryId: (state, action) => {
         localStorage.setItem('identifier', JSON.stringify(action.payload));
      }
   },
   extraReducers: (builder) => {
      builder
         .addCase(getPrincipal.pending, (state) => {
            state.principalData.loading = true;
         })
         .addCase(getPrincipal.fulfilled, (state, action) => {
            state.principalData.loading = false;
            state.principalData.principal = action.payload;
            console.log('Fulfilled Action Payload:', action.payload);
         })
         .addCase(getPrincipal.rejected, (state, action) => {
            state.principalData.loading = false;
            state.principalData.message = action.payload;
         })
         .addCase(addIdentity.pending, (state) => {
            state.identityData.loading = true;
            state.identityData.message = 'loading';
         })
         .addCase(addIdentity.fulfilled, (state, action) => {
            state.identityData.data = action.payload;
            state.identityData.loading = false;
            state.identityData.message = 'success';
            localStorage.setItem('id',action.payload.id)
         })
         .addCase(addIdentity.rejected, (state, action) => {
            state.identityData.message = action.payload;
            state.identityData.loading = false;
         })
         .addCase(registerUser.pending, (state) => {
            state.userData.loading = true;
            state.userData.message = 'fetching';
         })
         .addCase(registerUser.fulfilled, (state, action) => {
            state.userData.data = action.payload;
            state.userData.loading = false;
            state.userData.message = 'success';
            state.userData.isRegistered = true
         })
         .addCase(registerUser.rejected, (state, action) => {
            state.userData.message = action.payload;
            state.userData.loading = false;
         })
         .addCase(getUserData.pending, (state) => {
            state.userData.loading = true;
            state.userData.data = null;
         })
         .addCase(getUserData.fulfilled, (state, action) => {
            state.userData.loading = false;
            state.userData.message = 'success';
            state.userData.data = action.payload;
            state.userData.isRegistered = true;
         })
         .addCase(getUserData.rejected, (state, action) => {
            state.userData.loading = false;
            state.userData.message = action.payload;
            state.userData.isRegistered = false;
            state.userData.data = null;
         });
   }
});

export const { setPrincipal, setQueryId } = accountSlice.actions;
export default accountSlice.reducer;
