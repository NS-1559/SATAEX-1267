import { ChangeEvent, FC, useEffect, useState } from 'react';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import { AdvancedRealTimeChart } from 'react-ts-tradingview-widgets';
import {
  Box,
  Button,
  Container,
  FormLabel,
  Input,
  InputAdornment,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from '@mui/material';

import { useTranslate } from '@app/hooks/translate';
import { useTheme } from '@mui/material/styles';

const filter = createFilterOptions();

const TradingView: FC = () => {
  const { t } = useTranslate();
  const theme = useTheme();
  const [value, setValue] = useState('DOTUSDT');

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
            {value}
          </FormLabel>
          <Autocomplete
            id="combo-box-demo"
            options={tokenList}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} />}
            onChange={(event, token) => {
              setValue(token?.value);
            }}
          />
        </Box>
        <AdvancedRealTimeChart
          theme="dark"
          height={610}
          width={'100%'}
          symbol={value}
          allow_symbol_change={false}
        ></AdvancedRealTimeChart>
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

export default TradingView;
