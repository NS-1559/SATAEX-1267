import { Coin } from '@models/Coin';
import { coingeckoAxios } from './instances';
import { formatCamelcase } from '@utils/response';

export const fetchCoinList = async (): Promise<Coin[]> => {
  const path = '/coins';
  const response = await coingeckoAxios.get(path);
  return formatCamelcase(response.data);
};
