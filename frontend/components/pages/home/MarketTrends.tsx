import { useTranslate } from '@app/hooks/translate';
import Link from '@components/common/Link';
import {
  Box,
  Button,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Toolbar,
  Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';
import { FC } from 'react';
import { ArrowRight } from 'react-feather';
import { useAppSelector } from '@app/hooks/redux';
import { formatChartUrl } from '@utils/chart';
import {
  formatNumberWithSuffix,
  formatPrice,
  formatPriceChange,
} from '@utils/price';

const MarketTrends: FC = () => {
  const { t } = useTranslate();
  const theme = useTheme();
  const topCoins = useAppSelector((state) => {
    return state.common.coins.data.slice(0, 10);
  });

  return (
    <Box sx={{ width: '100%', py: 8 }}>
      <Container>
        <Paper
          elevation={0}
          sx={{
            backgroundColor: 'background.default',
            border: '1px solid',
            borderColor: theme.palette.grey[300],
          }}
        >
          <Toolbar
            sx={{
              borderBottom: '1px solid',
              borderColor: theme.palette.grey[300],
            }}
          >
            <Typography
              variant="h4"
              sx={{ fontWeight: 'medium', pl: 7, py: 4 }}
            >
              {t('app.home.market-trends-title')}
            </Typography>
          </Toolbar>
          <TableContainer component={Box}>
            <Table aria-label="market-trends">
              <TableHead>
                <TableRow>
                  <TableCell align="left" sx={{ pl: 10 }}>
                    {t('app.home.market-trends-name')}
                  </TableCell>
                  <TableCell align="left">
                    {t('app.home.market-trends-price')}
                  </TableCell>
                  <TableCell align="left">
                    {t('app.home.market-trends-24h-change')}
                  </TableCell>
                  <TableCell align="left">
                    {t('app.home.market-trends-24h-volume')}
                  </TableCell>
                  <TableCell align="left">
                    {t('app.home.market-trends-chart')}
                  </TableCell>
                  <TableCell align="left">
                    {t('app.home.market-trends-trade-button')}
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {topCoins.map((coin, index) => (
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
                      <Image
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
                        {t('app.home.market-trends-trade-button')}
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Toolbar
            sx={{
              borderTop: '1px solid',
              borderColor: theme.palette.grey[300],
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Link href="/market">
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  color: 'text.primary',
                  '&:hover': { color: 'primary.main' },
                  transition: 'color 0.2s ease-in-out',
                }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: 'normal', mr: 1 }}
                >
                  {t('app.home.market-trends-view-more-button')}
                </Typography>
                <ArrowRight size={20} />
              </Box>
            </Link>
          </Toolbar>
        </Paper>
      </Container>
    </Box>
  );
};

export default MarketTrends;
