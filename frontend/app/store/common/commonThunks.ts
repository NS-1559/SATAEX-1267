import { fetchCoinList } from '@apis/coinApi';
import { Coin } from '@models/Coin';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCoinListThunk = createAsyncThunk<Coin[]>(
  'common/fetchCoinList',
  async () => {
    return fetchCoinList();
  },
);
