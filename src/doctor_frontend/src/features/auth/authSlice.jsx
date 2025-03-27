// src/authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AuthClient } from '@dfinity/auth-client';
import { HttpAgent } from '@dfinity/agent';
import { helcon_backend } from '../../../../declarations/helcon_backend/index';

let authClient;

const initializeAuthClient = async () => {
  if (!authClient) {
    authClient = await AuthClient.create();
  }
  return authClient;
};


// docidentity_id: u64,
// name: String,
// age: u64,
// specialism: String,
// licence_no: u64,
// id_no: u64,
// sex: String,
// country: String,
// city: String
export const registerDoctor = createAsyncThunk(
  'auth/registerDoctor',
  async ({ navigate, data }, { dispatch, rejectWithValue }) => {
    try {
      const { name, age, specialism, licence_no, id_no, sex, country, city } = data

      let storedData = await JSON.parse(localStorage.getItem('data'));
      if (storedData) {
        const { toNumber } = storedData;
        const response = await helcon_backend.add_doctor(toNumber, name, age, specialism, licence_no, id_no, sex, country, city);

        if (response.Ok) {
          console.log('data was succesful created', response.Ok)
          dispatch(setDoctorData(response.Ok));
          navigate('/doctors')

          return
        } else {
          console.log('Registration error:', response.Err);
          return rejectWithValue(response.Err);
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
            const principalId = identity.getPrincipal().toString();
            
            if (principalId) {
              try {
                let storedData = await JSON.parse(localStorage.getItem('data'));
                if (storedData) {
                  const { toNumber } = storedData;
                  try {
                    const response = await helcon_backend.get_doctor(toNumber);
                    if (response.Ok) {
                      console.log('user info is here with us', response.Ok);
                      dispatch(setDoctorData(response.Ok));
                      dispatch(setAuthClient(true))
                      navigate('/doctors')
                    } else {
                      navigate('/new-account');
                      console.log('you have not registerDoctored yet', response.Err);
                    }
                  } catch (error) {
                    console.log('error', error);
                  }
                } else {
                  const response = await helcon_backend.add_docidentity(principalId);
                  if (response.Ok) {
                    const { id, principal } = response.Ok;
                    const toNumber = Number(id);
                    let data = {
                      toNumber, principal
                    };
                    localStorage.setItem('data', JSON.stringify(data));
                    console.log('data was set for the first time');
                    navigate('/new-account');
                    dispatch(setAuthClient(true));
                    dispatch(setPrincipal(principalId));
                  } else {
                    console.log('error existing here', response.Err);
                    return;
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
  async ({navigate}, { dispatch }) => {
    try {
      const client = await initializeAuthClient();
      await client.logout();

      dispatch(setAuthClient(null));
      dispatch(setActor(null));
      dispatch(setPrincipal(null));
      navigate('/')
    } catch (error) {
      console.error('Logout failed:', error.message);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    data: null,
    status: 'idle',
    isLoading: false,
    error: '',
    authClient: null

  },
  reducers: {
    setAuthClient: (state, action) => {
      state.authClient = action.payload;
    },
    setPrincipal: (state, action) => {
      state.principal = action.payload;
    },
    setDoctorData: (state, action) => {
      state.data = action.payload;
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
      .addCase(registerDoctor.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerDoctor.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(registerDoctor.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { setAuthClient, setPrincipal, setDoctorData } = authSlice.actions;

export default authSlice.reducer;
