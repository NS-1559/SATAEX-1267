import { ChangeEvent, FC, useEffect, useState } from 'react';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import { Box, Container, FormLabel, TextField } from '@mui/material';
import ccxt from 'ccxt';

import { useTranslate } from '@app/hooks/translate';
import { useTheme } from '@mui/material/styles';

async function tick() {
  const exchange = new ccxt.binance({ enableRateLimit: true });
  const response = await exchange.fetchOrderBook('BTC/USDT');
  // ... some processing here ...
  console.log(response);
}

const OrderBooks: FC = () => {
  const { t } = useTranslate();
  const theme = useTheme();
  const [value, setValue] = useState('BTCUSDT');
  const [orders, setOrders] = useState([{}]);
  tick();

  // const { asks: Array } = orders;
  // const orderRows = (arr: Array) =>
  //   arr &&
  //   arr.map((item: Array, index: number) => (
  //     <tr key={index}>
  //       <td> {item[1]} </td>
  //       <td> {item[0]} </td>
  //     </tr>
  //   ));
  // const orderHead = (title) => (
  //   <thead>
  //     <tr>
  //       <th colSpan="2">{title}</th>
  //     </tr>
  //     <tr>
  //       <th>Amount ({currencyArray[0]})</th>
  //       <th>Price ({currencyArray[1]})</th>
  //     </tr>
  //   </thead>
  // );

  return (
    <Box sx={{ width: '100%', py: 8 }}>
      <Container>
        {/* <table>
          {orderHead('Bids')}
          <tbody>{orderRows(bids)}</tbody>
        </table>

        <table>
          {orderHead('Asks')}
          <tbody>{orderRows(asks)}</tbody>
        </table> */}
      </Container>
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
