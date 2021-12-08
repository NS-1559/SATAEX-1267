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
  };
}

const initialState: AuthState = {
  login: {
    loading: false,
    user: null,
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginThunk.pending, (state) => {
      state.login.loading = true;
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
      },
    );
    builder.addCase(loginThunk.rejected, (state) => {
      state.login.loading = false;
    });
  },
});

export default authSlice.reducer;
