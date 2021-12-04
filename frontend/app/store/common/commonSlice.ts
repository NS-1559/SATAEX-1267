import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Coin } from '@models/Coin';
import { fetchCoinListThunk } from './commonThunks';

interface CommonState {
  coins: {
    data: Coin[];
    loading: boolean;
  };
}

const initialState: CommonState = {
  coins: {
    data: [],
    loading: false,
  },
};

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {},
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
