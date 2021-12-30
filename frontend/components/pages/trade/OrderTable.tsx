import { ChangeEvent, FC, useEffect, useState } from 'react';
import { Box, Container, FormLabel, TextField } from '@mui/material';
import { makeStyles, withStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useRouter } from 'next/router';
import { useAppSelector } from '@app/hooks/redux';
import ccxt from 'ccxt';

import { useTranslate } from '@app/hooks/translate';
import { useTheme } from '@mui/material/styles';

async function fetchOrderBooks(pair: string) {
  const exchange = new ccxt.binance({ enableRateLimit: true });
  const response = await exchange.fetchOrderBook(pair);
  return response;
}

const OrderTable: FC = () => {
  const { t } = useTranslate();
  const theme = useTheme();

  const classes = useStyles();

  useEffect(() => {}, []);

  const dataTable: any = createTable([], true);

  return (
    <Box sx={{ width: '100%', paddingTop: 0, py: 8, maxWidth: 1600 }}>
      <TableContainer className={classes.root} component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCellFix>Trading Pair</TableCellFix>
              <TableCellFix align="left">Time</TableCellFix>
              <TableCellFix align="right">Direction</TableCellFix>
              <TableCellFix align="right">Price</TableCellFix>
              <TableCellFix align="right">Quantity</TableCellFix>
              <TableCellFix align="right">USDT amount</TableCellFix>
              <TableCellFix align="right">Type</TableCellFix>
              <TableCellFix align="right">Status</TableCellFix>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataTable.map((row: any) => (
              <TableRow
                key={row.time}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCellFix
                  className={classes.text}
                  component="th"
                  scope="row"
                >
                  {row.tradingPair}
                </TableCellFix>
                <TableCellFix className={classes.text} align="left">
                  {row.time}
                </TableCellFix>
                <TableCellFix
                  className={`${classes.text} ${
                    row.direction === 'Buy'
                      ? classes.greenText
                      : classes.redText
                  }`}
                  align="right"
                >
                  {row.direction}
                </TableCellFix>
                <TableCellFix className={classes.text} align="right">
                  {row.price}
                </TableCellFix>
                <TableCellFix className={classes.text} align="right">
                  {row.quantity}
                </TableCellFix>
                <TableCellFix className={classes.text} align="right">
                  {row.price * row.quantity} USDT
                </TableCellFix>
                <TableCellFix className={classes.text} align="right">
                  {row.type}
                </TableCellFix>
                <TableCellFix className={classes.text} align="right">
                  {row.status}
                </TableCellFix>
                {row.status === 'pending' && (
                  <TableCellFix className={classes.text} align="right">
                    <span className={classes.cancelButton}>cancel</span>
                  </TableCellFix>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Button className={classes.viewAllButton} variant="contained">
          View all
        </Button>
      </TableContainer>
    </Box>
  );
};

const useStyles = makeStyles({
  root: {
    backgroundColor: '#1e1f20',
    color: 'white',
    overflow: 'hidden',
    fontSize: '0.7rem',
    paddingBottom: '1rem',
  },

  orderTab: {
    paddingLeft: '1rem',
    textAlign: 'left',
    margin: 'auto',
    textIndent: '1.4rem',
    cursor: 'pointer',
  },

  activeTab: {
    color: '#16b979',
  },

  text: {
    color: 'white',
    fontSize: '0.7rem',
  },
  redText: {
    fontSize: '0.7rem',
    color: '#ce3028',
    fontWeight: 'bold',
  },

  greenText: {
    fontSize: '0.7rem',
    color: '#3fb979',
    fontWeight: 'bold',
  },
  space: {
    width: '100px',
    backgroundColor: '#232429',
    padding: '0.5rem',
    paddingLeft: '1rem',
  },

  cancelButton: {
    padding: '0.3rem 0.6rem',
    color: '#16b979',
    transition: '0.3s',
    fontWeight: 'bold',
    cursor: 'pointer',
    userSelect: 'none',
    borderRadius: '4px',
    transform: 'translate(100px, 0px)',
    '&:hover': {
      backgroundColor: '#585858',
    },
  },

  viewAllButton: {
    marginLeft: '1rem',
  },
});

const TableCellFix = withStyles({
  root: {
    borderBottom: 'none',
  },
})(TableCell);

function createTable(array: any, filter: any) {
  const data = [
    {
      tradingPair: 'BTC/USDT',
      time: '2021-12-26 04:06:50',
      direction: 'Buy',
      price: 46000,
      quantity: 0.04,
      type: 'limit',
      status: 'pending',
    },
    {
      tradingPair: 'ADA/USDT',
      time: '2021-12-26 04:06:50',
      direction: 'Buy',
      price: 1.1,
      quantity: 100,
      type: 'limit',
      status: 'completed',
    },
    {
      tradingPair: 'BNB/USDT',
      time: '2021-12-26 04:06:50',
      direction: 'Sell',
      price: 600,
      quantity: 10,
      type: 'market',
      status: 'completed',
    },

    {
      tradingPair: 'BNB/USDT',
      time: '2021-12-26 04:06:50',
      direction: 'Sell',
      price: 600,
      quantity: 10,
      type: 'market',
      status: 'completed',
    },
    {
      tradingPair: 'BTC/USDT',
      time: '2021-12-26 04:06:50',
      direction: 'Buy',
      price: 46000,
      quantity: 0.04,
      type: 'limit',
      status: 'pending',
    },
    {
      tradingPair: 'BTC/USDT',
      time: '2021-12-26 04:06:50',
      direction: 'Buy',
      price: 46000,
      quantity: 0.04,
      type: 'limit',
      status: 'pending',
    },
    {
      tradingPair: 'BTC/USDT',
      time: '2021-12-26 04:06:50',
      direction: 'Buy',
      price: 46000,
      quantity: 0.04,
      type: 'limit',
      status: 'pending',
    },
  ];

  return data.slice(0, 7);
}

function createRowData(price: number, amount: number) {
  const usdtAmount: number = price * amount;
  return { price, amount, usdtAmount };
}

export default OrderTable;
