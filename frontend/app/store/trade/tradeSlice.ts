import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TradeState {
  tradePair: string;
}

const initialState: TradeState = {
  tradePair: 'BTCUSDT',
};

const tradeSlice = createSlice({
  name: 'trade',
  initialState,
  reducers: {
    setTradePair(state, action: PayloadAction<string>) {
      state.tradePair = action.payload;
    },
  },
});

export default tradeSlice.reducer;
export const tradeActions = tradeSlice.actions;
