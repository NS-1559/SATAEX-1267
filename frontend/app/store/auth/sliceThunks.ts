import { login } from '@apis/authApi';
import { LoginParams } from '@models/Auth';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const loginThunk = createAsyncThunk<string, LoginParams>(
  'auth/auth',
  async (params) => {
    const res = await login(params);
    return res.access_token;
  },
);
