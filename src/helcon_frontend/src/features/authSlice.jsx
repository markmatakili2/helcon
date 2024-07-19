import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AuthClient } from '@dfinity/auth-client';
import { HttpAgent } from '@dfinity/agent'; 
import { internet_identity } from '../../../declarations/internet_identity';

let authClient;


const initializeAuthClient = async () => {
  if (!authClient) {
    authClient = await AuthClient.create();
  }
  return authClient;
};

// Async thunk for login
export const login = createAsyncThunk(
  'auth/login',
  async (navigate, { dispatch, rejectWithValue }) => {
    try {
      const client = await initializeAuthClient();

      await client.login({
        onSuccess: async () => {
          const identity = await client.getIdentity();
          const agent = new HttpAgent({ identity, host: "http://localhost:8080" });

          // Remove on live deployment
          agent.fetchRootKey();

          // Use the existing internet_identity for creating the actor
          const actor = internet_identity; // Use your predefined actor

          dispatch(setAuthClient(true)); // Store a boolean or simple state, not the actual AuthClient instance
          dispatch(setActor(true)); // Store a boolean or simple state, not the actual CanisterActor instance
      
          dispatch(setPrincipal(identity.getPrincipal().toText()));
         if(navigate){
          navigate('/dashboard')
         }
          

         

          return identity.getPrincipal().toText();
        },
        onError: (error) => {
          throw new Error(error.message);
        }
      });
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Auth slice
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    authClient: null, // This will store a boolean or simple state instead of the actual instance
    actor: null, // This will store a boolean or simple state instead of the actual instance
    principal: null,
    status: 'idle',
    error: null,
  },
  reducers: {
    setAuthClient: (state, action) => {
      state.authClient = action.payload; // Store only simple state
    },
    setActor: (state, action) => {
      state.actor = action.payload; // Store only simple state
    },
    setPrincipal: (state, action) => {
      state.principal = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.principal = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const {
  setAuthClient,
  setActor,
  setPrincipal,
} = authSlice.actions;

export default authSlice.reducer;
