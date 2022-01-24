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

const P2pTable: FC = (props: any) => {
  const handleMakeP2pOrderButtonClick = props.handleMakeP2pOrderButtonClick;
  const { t } = useTranslate();
  const theme = useTheme();
  const p2pLists: any = [
    {
      name: 'Bodvar',
      USDTQuantity: 10,
      VNDQuantity: 240000,
      paymentMethod: 'Vietinbank',
      bandCardId: 1009383303,
      direction: 'buy',
    },
    {
      name: 'Goku',
      USDTQuantity: 20,
      VNDQuantity: 480000,
      paymentMethod: 'Techcombank',
      bandCardId: 1009383303,
      direction: 'buy',
    },
    {
      name: 'Kaneki',
      USDTQuantity: 10,
      VNDQuantity: 240000,
      paymentMethod: 'Tpbank',
      bandCardId: 1009383303,
      direction: 'Sell',
    },
  ];

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
            P2p Markets
          </Typography>
          <Button
            onClick={() => {
              handleMakeP2pOrderButtonClick(true);
            }}
            variant="contained"
            sx={{ color: 'white' }}
          >
            Make P2P Order
          </Button>
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
                    Name
                  </TableCell>
                  <TableCell align="left">USDT Quantity</TableCell>
                  <TableCell align="left">VND Price</TableCell>
                  <TableCell align="left">Payment Methods</TableCell>
                  <TableCell align="left">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {p2pLists.map((item: any) => (
                  <TableRow
                    key={item.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row" sx={{ pl: 10 }}>
                      <Typography variant="subtitle1">{item.name}</Typography>
                    </TableCell>
                    <TableCell align="left">
                      <Typography variant="subtitle1">
                        {item.USDTQuantity}
                      </Typography>
                    </TableCell>
                    <TableCell align="left">
                      <Typography variant="subtitle1">
                        {item.VNDQuantity}
                      </Typography>
                    </TableCell>
                    <TableCell align="left">
                      <Typography variant="subtitle1">
                        {item.paymentMethod}
                      </Typography>
                    </TableCell>
                    <TableCell align="left">
                      <Button
                        variant="contained"
                        color={item.direction === 'buy' ? 'success' : 'error'}
                        sx={{ color: 'white' }}
                      >
                        {item.direction}
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

export default P2pTable;
