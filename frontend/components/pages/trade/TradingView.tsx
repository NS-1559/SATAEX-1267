import { ChangeEvent, FC, useMemo, useState, useEffect } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import { AdvancedRealTimeChart } from 'react-ts-tradingview-widgets';
import { Box, Container, FormLabel, TextField } from '@mui/material';
import { useRouter } from 'next/router';
import { useAppSelector } from '@app/hooks/redux';
import axios from 'axios';

const defaultTokens = [
  { label: 'BTC/USDT', value: 'BTCUSDT' },
];

const TradingView: FC = () => {
  const router = useRouter();
  const tradePair = router.asPath.split('/')[2];
  const [tokenList, setTokenList] = useState(defaultTokens);
  console.log(tradePair);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/asset')
        .then((response: any) => {
            const data = response.data;
            const updatedTokenList = data.map((token:any) =>{
              return {
                label: `${token.symbol.toUpperCase()}/USDT`,
                value: `${token.symbol.toUpperCase()}USDT`
              }
            })
            setTokenList(updatedTokenList)
        });
  }, []);

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
