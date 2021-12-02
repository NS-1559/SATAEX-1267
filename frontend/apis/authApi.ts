import { LoginParams, LoginResponse } from '@models/Auth';
import { apiAxios } from './instances';

export const login = async (params: LoginParams): Promise<LoginResponse> => {
  const res = await apiAxios.post('/auth/login', params);
  return res.data;
};
