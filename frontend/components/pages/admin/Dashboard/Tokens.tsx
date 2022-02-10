import { useAppSelector } from '@app/hooks/redux';
import { useTranslate } from '@app/hooks/translate';

import axios from 'axios';

import {
  Box,
  Button,
  Container,
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
import { useTheme } from '@mui/material/styles';
import { formatChartUrl } from '@utils/chart';
import {
  formatNumberWithSuffix,
  formatPrice,
  formatPriceChange,
} from '@utils/price';
import Image from 'next/image';
import { ChangeEvent, FC, useMemo, useState, useEffect } from 'react';
import { Search } from 'react-feather';

export default function Tokens(props: any) {
  const { t } = useTranslate();
  const theme = useTheme();
  const { handleChangeStatus } = props;

  const tokens = useAppSelector((state) => {
    return state.common.coins.data;
  });


  const [topTokens, setTopTokens] = useState(tokens);

  const [keyword, setKeyword] = useState('');


  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/asset')
        .then((response: any) => {
            const newTopTokens = [];
            const data = response.data;
            for(let i = 0; i < data.length; i++){
              for(let j = 0; j < tokens.length; j++ ){
                if(data[i].symbol.toLowerCase() === tokens[j].symbol) newTopTokens.push(tokens[j]);
              }
            }
            setTopTokens(newTopTokens);
        });
  }, []);


  const displayTokens = useMemo(() => {
    return topTokens;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyword, topTokens]);

  const onKeywordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value.toLowerCase());
  };

  //
  const handleEditButtonClick = (number: any, token: any) => {
    handleChangeStatus(number, token);
  };

  const handleRemoveButtonClick = (coin:any) => {
    // delete token here
  };


  return (
    <Box sx={{ width: '100%', py: 8, mt: 4 }}>
      <Container>
        
        <Paper
          elevation={0}
          sx={{
            backgroundColor: 'background.default',
            border: '1px solid',
            borderColor: theme.palette.grey[300],
          }}
        >
          <TableContainer component={Box}>
            <Table aria-label="market-trends">
              <TableHead>
                <TableRow>
                  <TableCell align="left" sx={{ pl: 10 }}>
                    {t('app.markets.name')}
                  </TableCell>
                  <TableCell align="left">{t('app.markets.price')}</TableCell>
                  <TableCell align="left">
                    {t('app.markets.24h-change')}
                  </TableCell>
                  <TableCell align="left">
                    {t('app.markets.24h-volume')}
                  </TableCell>
                  <TableCell align="left">{t('app.markets.chart')}</TableCell>
                  <TableCell align="left">Action</TableCell>
                  <TableCell align="left"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {displayTokens.map((coin, index) => (
                  <TableRow
                    key={coin.symbol}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row" sx={{ pl: 10 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Image
                          src={coin.image.small}
                          width={30}
                          height={30}
                          alt={coin.id}
                        />
                        <Typography
                          variant="subtitle1"
                          sx={{
                            fontWeight: 'medium',
                            ml: 2,
                            textTransform: 'uppercase',
                          }}
                        >
                          {coin.symbol}_USD
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell align="left">
                      <Typography variant="subtitle1">
                        {formatPrice(coin.marketData.currentPrice.usd)}
                      </Typography>
                    </TableCell>
                    <TableCell align="left">
                      <Typography
                        variant="subtitle1"
                        sx={{
                          color:
                            coin.marketData.priceChangePercentage24H < 0
                              ? 'red'
                              : 'green',
                        }}
                      >
                        {formatPriceChange(
                          coin.marketData.priceChangePercentage24H,
                        )}
                      </Typography>
                    </TableCell>
                    <TableCell align="left">
                      <Typography variant="subtitle1">
                        {formatNumberWithSuffix(
                          coin.marketData.totalVolume.usd,
                        )}
                      </Typography>
                    </TableCell>
                    <TableCell align="left">
                      <img
                        src={formatChartUrl(coin.image.small)}
                        alt={coin.id}
                        height={40}
                        width={120}
                      />
                    </TableCell>
                    <TableCell align="left">
                      <Button
                        variant="contained"
                        color="primary"
                        sx={{ color: 'white', width: '6rem' }}
                        onClick={() => handleEditButtonClick(4, coin)}
                      >
                        Edit
                      </Button>
                    </TableCell>
                    <TableCell align="left">
                      <Button
                        variant="contained"
                        color="error"
                        sx={{ color: 'white' }}
                        onClick={() => handleRemoveButtonClick(coin)}
                      >
                        remove
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
        <Button
          variant="contained"
          color="warning"
          sx={{ color: 'white', mt: 2, width: '8rem' }}
          onClick={() => handleEditButtonClick(4, {name: 'undefine', symbol: 'undefine'})}
        >
          Add Token
        </Button>
      </Container>
    </Box>
  );
}
