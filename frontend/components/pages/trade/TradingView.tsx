import { FC } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import { AdvancedRealTimeChart } from 'react-ts-tradingview-widgets';
import { Box, Container, FormLabel, TextField } from '@mui/material';
import { useRouter } from 'next/router';
import { useAppSelector } from '@app/hooks/redux';

const tokenList = [
  { label: 'BTC/USDT', value: 'BTCUSDT' },
  { label: 'ETH/USDT', value: 'ETHUSDT' },
  { label: 'BNB/USDT', value: 'BNBUSDT' },
  { label: 'DOT/USDT', value: 'DOTUSDT' },
  { label: 'ADA/USDT', value: 'ADAUSDT' },
];

const TradingView: FC = () => {
  const router = useRouter();
  const tradePair = router.asPath.split('/')[2];
  console.log(tradePair);

  return (
    <Box sx={{ width: '100%', py: 8 }}>
      <Container>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            mb: 2,
          }}
        >
          <FormLabel sx={{ fontWeight: 'bold', fontSize: 20 }}>
            {tradePair}
          </FormLabel>
          <Autocomplete
            id="combo-box-demo"
            options={tokenList}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} />}
            onChange={(event, token) => {
              console.log(token);
              const value = token?.value || 'BTCUSDT';
              router.push(`/trade/${value}`);
            }}
          />
        </Box>
        <AdvancedRealTimeChart
          theme="dark"
          height={610}
          width={'100%'}
          symbol={tradePair}
          allow_symbol_change={false}
          container_id="tradingview_28afa"
        />
      </Container>
    </Box>
  );
};

export default TradingView;
