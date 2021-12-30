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
  { label: 'LUNA/USDT', value: 'LUNAUSDT' },
  { label: 'MATIC/USDT', value: 'MATICUSDT' },
  { label: 'SHIB/USDT', value: 'SHIBUSDT' },
  { label: 'DOGE/USDT', value: 'DOGEUSDT' },
  { label: 'ALICE/USDT', value: 'ALICEUSDT' },
  { label: 'OGN/USDT', value: 'OGNUSDT' },
  { label: 'AXS/USDT', value: 'AXSUSDT' },
  { label: 'EOS/USDT', value: 'EOSUSDT' },
  { label: 'TLM/USDT', value: 'TLMUSDT' },
  { label: 'MBOX/USDT', value: 'MBOXUSDT' },
  { label: 'SAND/USDT', value: 'SANDUSDT' },
  { label: 'MANA/USDT', value: 'MANAUSDT' },
  { label: 'ICP/USDT', value: 'ICPUSDT' },
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
          <FormLabel sx={{ fontWeight: 'bold', fontSize: 20, color: 'white' }}>
            {tradePair}
          </FormLabel>
          <Autocomplete
            id="combo-box-demo"
            options={tokenList}
            sx={{
              width: 300,
              backgroundColor: '#2c2d2e',
            }}
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
          interval="D"
        />
      </Container>
    </Box>
  );
};

export default TradingView;
