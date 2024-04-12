import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Auth } from '@/types/interfaces';

axios.defaults.baseURL = 'https://marketplace-suyn.onrender.com';

// Utility to add JWT
const setAuthHeader = (token: string) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
const clearAuthHeader = () => {
  delete axios.defaults.headers.common.Authorization;
};

export const login = createAsyncThunk(
  'auth/login',
  async (credentials: Auth, thunkAPI) => {
    try {
      const res = await axios.post('/login', credentials);
    
      setAuthHeader(res.data.token);
      console.log(res.data)
      return res.data;
      
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/api/users/signout');
    clearAuthHeader();
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});