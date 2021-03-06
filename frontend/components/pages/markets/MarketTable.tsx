import { useAppSelector } from '@app/hooks/redux';
import { useTranslate } from '@app/hooks/translate';
import { Coin } from '@models/Coin';
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
import { ChangeEvent, FC, useMemo, useState } from 'react';
import { Search } from 'react-feather';

const MarketTable: FC = () => {
  const { t } = useTranslate();
  const theme = useTheme();
  const tokens = useAppSelector((state) => {
    return state.common.coins.data;
  });
  const topTokens = tokens.slice(0, 50);
  const [keyword, setKeyword] = useState('');

  const displayTokens = useMemo(() => {
    if (keyword)
      return tokens.filter(
        (item: Coin) =>
          item.name.toLowerCase().includes(keyword) ||
          item.symbol.toLowerCase().includes(keyword),
      );
    return topTokens;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyword, topTokens]);

  const onKeywordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value.toLowerCase());
  };

  return (
    <Box sx={{ width: '100%', py: 8 }}>
      <Container>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 5,
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: 'medium' }}>
            {t('app.markets.title')}
          </Typography>
          <TextField
            variant="outlined"
            size="small"
            placeholder={t('app.markets.search')}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search size={20} />
                </InputAdornment>
              ),
            }}
            onChange={onKeywordChange}
          />
        </Box>
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
                  <TableCell align="left">
                    {t('app.markets.trade-button')}
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {displayTokens.map((coin, index) => (
                  <TableRow
                    key={index}
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
                        sx={{ color: 'white' }}
                      >
                        {t('app.markets.trade-button')}
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Container>
    </Box>
  );
};

export default MarketTable;
