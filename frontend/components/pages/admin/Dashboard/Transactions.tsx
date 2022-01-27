import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Transactions from './Transactions';
import { useTheme } from '@mui/material/styles';

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

// Generate Order Data
function createData(
  id: number,
  date: string,
  from: string,
  to: string,
  paymentMethod: string,
  USDTAmount: number,
  VNDAmount: number,
) {
  return { id, date, from, to, paymentMethod, USDTAmount, VNDAmount };
}

const rows = [
  createData(
    0,
    '16 Mar, 2019',
    '0xbinid82382h382h83h2h32h32k32',
    '0x22adasdasdsadsdsdddddddddddd',
    'Vietinbank ⠀908782878',
    1000,
    25000000,
  ),
  createData(
    0,
    '16 Mar, 2019',
    '0xbinid82382h382h83h2h32h32k32',
    '0x22adasdasdsadsdsdddddddddddd',
    'Vietinbank ⠀908782878',
    1000,
    25000000,
  ),
  createData(
    0,
    '16 Mar, 2019',
    '0xbinid82382h382h83h2h32h32k32',
    '0x22adasdasdsadsdsdddddddddddd',
    'Vietinbank ⠀908782878',
    1000,
    25000000,
  ),
  createData(
    0,
    '16 Mar, 2019',
    '0xbinid82382h382h83h2h32h32k32',
    '0x22adasdasdsadsdsdddddddddddd',
    'Vietinbank ⠀908782878',
    1000,
    25000000,
  ),
  createData(
    0,
    '16 Mar, 2019',
    '0xbinid82382h382h83h2h32h32k32',
    '0x22adasdasdsadsdsdddddddddddd',
    'Vietinbank ⠀908782878',
    1000,
    25000000,
  ),
  createData(
    0,
    '16 Mar, 2019',
    '0xbinid82382h382h83h2h32h32k32',
    '0x22adasdasdsadsdsdddddddddddd',
    'Vietinbank ⠀908782878',
    1000,
    25000000,
  ),
  createData(
    0,
    '16 Mar, 2019',
    '0xbinid82382h382h83h2h32h32k32',
    '0x22adasdasdsadsdsdddddddddddd',
    'Vietinbank ⠀908782878',
    1000,
    25000000,
  ),
  createData(
    0,
    '16 Mar, 2019',
    '0xbinid82382h382h83h2h32h32k32',
    '0x22adasdasdsadsdsdddddddddddd',
    'Vietinbank ⠀908782878',
    1000,
    25000000,
  ),
  createData(
    0,
    '16 Mar, 2019',
    '0xbinid82382h382h83h2h32h32k32',
    '0x22adasdasdsadsdsdddddddddddd',
    'Vietinbank ⠀908782878',
    1000,
    25000000,
  ),
  createData(
    0,
    '16 Mar, 2019',
    '0xbinid82382h382h83h2h32h32k32',
    '0x22adasdasdsadsdsdddddddddddd',
    'Vietinbank ⠀908782878',
    1000,
    25000000,
  ),

  createData(
    0,
    '16 Mar, 2019',
    '0xbinid82382h382h83h2h32h32k32',
    '0x22adasdasdsadsdsdddddddddddd',
    'Vietinbank ⠀908782878',
    1000,
    25000000,
  ),
  createData(
    0,
    '16 Mar, 2019',
    '0xbinid82382h382h83h2h32h32k32',
    '0x22adasdasdsadsdsdddddddddddd',
    'Vietinbank ⠀908782878',
    1000,
    25000000,
  ),
  createData(
    0,
    '16 Mar, 2019',
    '0xbinid82382h382h83h2h32h32k32',
    '0x22adasdasdsadsdsdddddddddddd',
    'Vietinbank ⠀908782878',
    1000,
    25000000,
  ),
];

export default function Users() {
  return (
    <Grid item xs={8}>
      <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
        {' '}
        <Box component="main">
          <Toolbar />
          <Container sx={{ mt: 4, mb: 4 }} style={{ width: '1500px' }}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Date</TableCell>
                  <TableCell>From Address</TableCell>
                  <TableCell>To Address</TableCell>
                  <TableCell>Payment Method</TableCell>
                  <TableCell align="right">USDT Amount</TableCell>
                  <TableCell align="right">VND Amount</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.date}</TableCell>
                    <TableCell>{row.from}</TableCell>
                    <TableCell>{row.to}</TableCell>
                    <TableCell>{row.paymentMethod}</TableCell>
                    <TableCell align="right">{`${row.USDTAmount} $`}</TableCell>
                    <TableCell align="right">{`${row.VNDAmount} VND`}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Container>
        </Box>
      </Paper>
    </Grid>
  );
}
