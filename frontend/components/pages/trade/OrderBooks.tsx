import { ChangeEvent, FC, useEffect, useState } from 'react';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import { Box, Container, FormLabel, TextField } from '@mui/material';
import ccxt from 'ccxt';

import { useTranslate } from '@app/hooks/translate';
import { useTheme } from '@mui/material/styles';

async function tick() {
  const exchange = new ccxt.binance({ enableRateLimit: true });
  const response = await exchange.fetchOrderBook('BTC/USDT');
  console.log(response);
}

const OrderBooks: FC = () => {
  const { t } = useTranslate();
  const theme = useTheme();
  const [value, setValue] = useState('BTCUSDT');
  const [orders, setOrders] = useState([{}]);

  useEffect(() => {});

  return (
    <Box sx={{ width: '100%', py: 8 }}>
      <Container>OrderBooks</Container>
    </Box>
  );
};

const tokenList = [
  { label: 'BTC/USDT', value: 'BTCUSDT' },
  { label: 'ETH/USDT', value: 'ETHUSDT' },
  { label: 'BNB/USDT', value: 'BNBUSDT' },
  { label: 'DOT/USDT', value: 'DOTUSDT' },
  { label: 'ADA/USDT', value: 'ADAUSDT' },
];

export default OrderBooks;
