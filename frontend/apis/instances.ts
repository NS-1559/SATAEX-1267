import { API_BASE_URL, COINGECKO_API_BASE_URL } from '@constants/configs';
import axios from 'axios';

export const apiAxios = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const coingeckoAxios = axios.create({
  baseURL: COINGECKO_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
