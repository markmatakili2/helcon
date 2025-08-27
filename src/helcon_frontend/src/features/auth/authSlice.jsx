// src/authSlice.js
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
      const client = await initializeAuthClient();

      await client.login({
        onSuccess: async () => {
          try {
            const identity = client.getIdentity();
            const agent = new HttpAgent({ identity, host: "http://localhost:8080" });
            const principal = identity.getPrincipal().toString();

            if (principal) {
              try {
                const response = await helcon_backend.add_identity(principal)

                if (response.Ok) {
                  const { id, principal } = response.Ok;
                  const toNumber = Number(id);
                  let data = {
                    toNumber, principal
                  };
                  dispatch(setAuthClient(true));
                  localStorage.setItem('id', JSON.stringify(data))
                  dispatch(setPrincipals(principal))
                  dispatch(setAuthClient(true));
                  navigate('/new-account')
                  console.log('your principal_id', principal)

                } else {
                  console.log('some error occured', response.Err)
                  let identifier = JSON.parse(localStorage.getItem('identifier'))
                  if (identifier) {
                    const response = await helcon_backend.get_patient(identifier)
                    if (response.Ok) {
                      let { username } = response.Ok
                      dispatch(setUser({ username }))
                      dispatch(setAuthClient(true));
                      navigate('/home')
                    } else {
                      console.log('an error occured', response.Err)
                    }
                  }
                }

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
      dispatch(setPrincipals(null));

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