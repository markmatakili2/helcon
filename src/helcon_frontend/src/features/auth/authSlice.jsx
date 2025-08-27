// src/authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { NFID } from '@nfid/embed';
import { HttpAgent } from '@dfinity/agent';
import { helcon_backend } from '../../../../declarations/helcon_backend';

export const registerPatient = createAsyncThunk(
  'auth/registerPatient',
  async ({ navigate, data }, { dispatch, rejectWithValue }) => {
    try {
      const { username } = data

      let storedData = await JSON.parse(localStorage.getItem('id'));
      if (storedData) {
        const { toNumber } = storedData
        const response = await helcon_backend.register_patient(username, toNumber)
        if (response.Ok) {
          const { id, username } = response.Ok
          const registeredId = Number(id)

          localStorage.setItem('identifier', JSON.stringify(registeredId))
          dispatch(setUser({ username }))
          navigate('/home')
        } else {
          console.log('error registering the patient', response.Err)
        }

      }
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.message);
    }
  }
);
export const login = createAsyncThunk(
  'auth/login',
  async ({ navigate }, { dispatch, rejectWithValue }) => {
    try {
      const nfid = await NFID.init({
        application: {
          name: "HelCon",
          logo: "https://helcon.xyz/favicon.ico"
        }
      });

      const identity = await nfid.getDelegation({
        targets: [process.env.CANISTER_ID_HELCON_BACKEND],
        derivationOrigin: "https://helcon.xyz"
      });

      const principal = identity.getPrincipal().toString();

      if (principal) {
        try {
          const response = await helcon_backend.add_identity(principal);

          if (response.Ok) {
            const { id, principal } = response.Ok;
            const toNumber = Number(id);
            let data = {
              toNumber, principal
            };
            dispatch(setAuthClient(true));
            localStorage.setItem('id', JSON.stringify(data));
            dispatch(setPrincipals(principal));
            navigate('/new-account');
          } else {
            let identifier = JSON.parse(localStorage.getItem('identifier'));
            if (identifier) {
              const response = await helcon_backend.get_patient(identifier);
              if (response.Ok) {
                let { username } = response.Ok;
                dispatch(setUser({ username }));
                dispatch(setAuthClient(true));
                navigate('/home');
              }
            }
          }
        } catch (error) {
          console.error("Error fetching user from backend:", error.message);
          return rejectWithValue("Error fetching user from backend");
        }
      }
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
      // Clear local storage and reset state
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('identifier');
      localStorage.removeItem('id');
      localStorage.removeItem('principal');

      dispatch(setAuthClient(null));
      dispatch(setPrincipals(null));
      dispatch(setUser(null));

      navigate('/')
    } catch (error) {
      console.error('Logout failed:', error.message);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    authClient: null,
    data: null,
    principal: null,
    status: 'idle',
    error: null,
  },
  reducers: {
    setAuthClient: (state, action) => {
      state.authClient = action.payload;
    },

    setPrincipals: (state, action) => {
      state.principal = action.payload;
    },
    setUser: (state, action) => {
      state.data = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.principal = action.payload?.principal || null;
        state.authClient = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(logout.fulfilled, (state) => {
        state.status = 'idle';
        state.authClient = null;

        state.principal = null;
      })
      .addCase(registerPatient.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerPatient.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(registerPatient.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });;
  },
});

export const {
  setAuthClient,
  setPrincipals,
  setUser,
} = authSlice.actions;

export default authSlice.reducer;