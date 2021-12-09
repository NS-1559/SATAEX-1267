import { User } from '@models/User';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
import { loginThunk } from './sliceThunks';
import { TokenPayload } from '@models/Auth';

interface AuthState {
  login: {
    loading: boolean;
    user: User | null;
    error: boolean;
    isLogin: boolean;
  };
  register: {
    loading: boolean;
  };
}

const initialState: AuthState = {
  login: {
    loading: false,
    isLogin: false,
    error: false,
    user: null,
  },
  register: {
    loading: false,
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginThunk.pending, (state) => {
      state.login.loading = true;
      state.login.error = false;
    });
    builder.addCase(
      loginThunk.fulfilled,
      (state, action: PayloadAction<string>) => {
        const payload = jwtDecode(action.payload) as TokenPayload;
        const exp = payload.exp / 86400;
        cookies.set('token', action.payload, {
          expires: exp,
        });
        state.login.loading = false;
        state.login.isLogin = true;
      },
    );
    builder.addCase(loginThunk.rejected, (state) => {
      state.login.loading = false;
      state.login.error = true;
    });
  },
});

export default authSlice.reducer;
