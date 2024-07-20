// src/authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AuthClient } from '@dfinity/auth-client';
import { internet_identity } from '../../../declarations/internet_identity';
import { HttpAgent } from '@dfinity/agent';

let authClient;

const initializeAuthClient = async () => {
  if (!authClient) {
    authClient = await AuthClient.create();
  }
  return authClient;
};

export const login = createAsyncThunk(
  'auth/login',
  async ({ navigate }, { dispatch, rejectWithValue }) => {
    try {
      const client = await initializeAuthClient();

      await client.login({
        onSuccess: async () => {
          try {
            const identity = await client.getIdentity();
            const agent = new HttpAgent({ identity, host: "http://localhost:8080" });

            // Fetch root key for certificate validation during development
            if (process.env.DFX_NETWORK !== "ic") {
              try {
                await agent.fetchRootKey();
              } catch (fetchRootKeyError) {
                console.warn("Unable to fetch root key. Check to ensure that your local replica is running");
                console.error(fetchRootKeyError.message);
              }
            }

            // Use internet_identity for interacting with the canister
           // const userInfo = await internet_identity?.get_principal(); // Replace `whoami` with your canister's method

            const principal = identity.getPrincipal().toText();
            dispatch(setAuthClient(true));
            dispatch(setActor(true));
            dispatch(setPrincipal(principal));
            // dispatch(setUserInfo(userInfo));

            if (navigate) {
              navigate('/dashboard');
            }

            return { principal,  };
          } catch (error) {
            console.error("Error during login onSuccess callback:", error.message);
            throw error;
          }
        },
        onError: (error) => {
          console.error("Login failed:", error.message);
          throw new Error(error.message);
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
    userInfo: null,
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
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
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
        state.userInfo = action.payload?.userInfo || null;
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
        state.userInfo = null;
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
