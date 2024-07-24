// src/authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AuthClient } from '@dfinity/auth-client';
import { HttpAgent } from '@dfinity/agent';
import { helcon_backend } from '../../../../declarations/helcon_backend';
import { Principal } from '@dfinity/principal';

let authClient;

const initializeAuthClient = async () => {
  if (!authClient) {
    authClient = await AuthClient.create();
  }
  return authClient;
};

export const login = createAsyncThunk(
  'auth/login',
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const client = await initializeAuthClient();

      await client.login({
        onSuccess: async () => {
          try {
            const identity = await client.getIdentity();
            const agent = new HttpAgent({ identity, host: "http://localhost:8080" });

            const principal = identity.getPrincipal().toString()

            dispatch(setAuthClient(true));
            dispatch(setActor(true));
           
            localStorage.setItem('principal', principal);

            if (principal) {

              try {
                //const userExists = await helcon_backend.get_patient(principalObj);
                console.log("user_principal:", principal);

                return { principal, };
              } catch (error) {
                console.error("Error fetching user from backend:", error.message);
                return rejectWithValue("Error fetching user from backend");
              }
            }
          } catch (error) {
            console.error("Error during login onSuccess callback:", error.message);
            return rejectWithValue(error.message);
          }
        },
        onError: (error) => {
          console.error("Login failed:", error.message);
          return rejectWithValue(error.message);
        }
      });
    } catch (error) {
      console.error("Login caught error:", error.message);
      return rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async ({ navigate }, { dispatch }) => {
    try {
      const client = await initializeAuthClient();
      await client.logout();

      dispatch(setAuthClient(null));
      dispatch(setActor(null));
      dispatch(setPrincipal(null));
      dispatch(setUserInfo(null));

      if (navigate) {
        navigate('/');
      }
    } catch (error) {
      console.error('Logout failed:', error.message);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    authClient: null,
    actor: null,
    principal: null,
    userExists: null,
    status: 'idle',
    error: null,
  },
  reducers: {
    setAuthClient: (state, action) => {
      state.authClient = action.payload;
    },
    setActor: (state, action) => {
      state.actor = action.payload;
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
        state.principal = action.payload?.principal || null;
        state.userExists = action.payload?.userExists || null;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(logout.fulfilled, (state) => {
        state.status = 'idle';
        state.authClient = null;
        state.actor = null;
        state.principal = null;
      });
  },
});

export const {
  setAuthClient,
  setActor,
  setPrincipal,
  setUserInfo,
} = authSlice.actions;

export default authSlice.reducer;
