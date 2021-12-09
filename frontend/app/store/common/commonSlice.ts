import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Coin } from '@models/Coin';
import { fetchCoinListThunk } from './commonThunks';

type ToastType = 'error' | 'success' | 'warning' | 'info';

interface CommonState {
  coins: {
    data: Coin[];
    loading: boolean;
  };
  toast: {
    message: string;
    type: ToastType;
    open: boolean;
  };
}

const initialState: CommonState = {
  coins: {
    data: [],
    loading: false,
  },
  toast: {
    message: '',
    type: 'success',
    open: false,
  },
};

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    openToast(
      state,
      action: PayloadAction<{
        message: string;
        type: ToastType;
      }>,
    ) {
      const { message, type } = action.payload;
      state.toast.message = message;
      state.toast.type = type;
      state.toast.open = true;
    },
    closeToast(state) {
      state.toast.open = false;
      state.toast.message = '';
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCoinListThunk.pending, (state) => {
      state.coins.loading = true;
    });
    builder.addCase(
      fetchCoinListThunk.fulfilled,
      (state, action: PayloadAction<Coin[]>) => {
        state.coins.loading = false;
        state.coins.data = action.payload;
      },
    );
    builder.addCase(fetchCoinListThunk.rejected, (state) => {
      state.coins.loading = false;
    });
  },
});

export default commonSlice.reducer;
export const commonActions = commonSlice.actions;
