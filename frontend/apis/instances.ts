import { API_BASE_URL } from '@constants/configs';
import axios from 'axios';

export const apiAxios = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
