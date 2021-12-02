import { User } from '@models/User';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
import { loginThunk } from './sliceThunks';

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
        cookies.set('token', action.payload);
        state.login.loading = false;
        const payload = jwtDecode(action.payload);
        console.log(payload);
        state.login.user = payload as User;
      },
    );
    builder.addCase(loginThunk.rejected, (state) => {
      state.login.loading = false;
    });
  },
});

export default authSlice.reducer;
