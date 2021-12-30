import { ChangeEvent, FC, useEffect, useState } from 'react';
import { Box, Container, FormLabel, TextField } from '@mui/material';
import { makeStyles, withStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
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

interface Book {
  bids: number[][];
  asks: number[][];
}

const OrderBooks: FC = () => {
  const { t } = useTranslate();
  const theme = useTheme();
  const { asPath, pathname } = useRouter();
  const tradePair = useAppSelector((state) => state.trade.tradePair);

  console.log(tradePair);
  const classes = useStyles();
  const [book, setBook] = useState<Book>({ bids: [], asks: [] });

  useEffect(() => {
    const interval = setInterval(() => {
      if (tradePair) {
        var value = [
          tradePair.slice(0, tradePair.length - 4),
          '/',
          tradePair.slice(tradePair.length - 4),
        ].join('');
        fetchOrderBooks(value).then((res) => {
          const { asks, bids } = res;
          setBook({
            asks,
            bids,
          });
        });
      }
    }, 1400);
    return () => clearInterval(interval);
  }, [tradePair]);

  const { asks, bids } = book;

  const asksTable = createTable(asks);
  const bidsTable = createTable(bids, true);

  return (
    <Box sx={{ width: '100%', py: 8, maxWidth: 400 }}>
      <TableContainer className={classes.root} component={Paper}>
        <Typography
          className={classes.title}
          variant="h6"
          gutterBottom
          component="div"
        >
          OrderBook
        </Typography>
        <Table
          sx={{ maxWidth: 300 }}
          className={classes.table}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCellFix className={classes.text}>Price(USDT)</TableCellFix>
              <TableCellFix className={classes.text} align="right">
                Quantity(BTC)
              </TableCellFix>
              <TableCellFix className={classes.text} align="right">
                Amount(USDT)
              </TableCellFix>
            </TableRow>
          </TableHead>
          <TableBody>
            {asksTable.map((row) => (
              <TableRow
                key={row.price}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCellFix
                  className={classes.redText}
                  component="th"
                  scope="row"
                >
                  {row.price}
                </TableCellFix>
                <TableCellFix className={classes.text} align="right">
                  {row.amount}
                </TableCellFix>
                <TableCellFix className={classes.text} align="right">
                  {row.usdtAmount}
                </TableCellFix>
              </TableRow>
            ))}
          </TableBody>
          <Box className={classes.space}>{tradePair}</Box>
          <TableBody>
            {bidsTable.map((row) => (
              <TableRow
                key={row.price}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCellFix
                  className={classes.greenText}
                  component="th"
                  scope="row"
                >
                  {row.price}
                </TableCellFix>
                <TableCellFix className={classes.text} align="right">
                  {row.amount}
                </TableCellFix>
                <TableCellFix className={classes.text} align="right">
                  {row.usdtAmount}
                </TableCellFix>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

const useStyles = makeStyles({
  root: {
    backgroundColor: '#1e1f20',
    color: 'white',
    overflow: 'hidden',
    paddingTop: '1rem',
    paddingBottom: '1rem',
    fontSize: '0.7rem',
  },

  table: {
    margin: 'auto',
  },

  title: {
    paddingLeft: '1rem',
    textAlign: 'left',
    margin: 'auto',
    textIndent: '1.4rem',
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
});

const TableCellFix = withStyles({
  root: {
    borderBottom: 'none',
  },
})(TableCell);

function createTable(array: any, reverse: boolean = false) {
  const data = [];
  if (reverse) {
    for (let i = 0; i < array.length; i++) {
      data.push(createRowData(array[i][0], array[i][1]));
    }
  } else {
    for (let i = array.length - 1; i >= 0; i--) {
      data.push(createRowData(array[i][0], array[i][1]));
    }
  }

  return data.slice(0, 8);
}

function createRowData(price: number, amount: number) {
  const usdtAmount: number = price * amount;
  return { price, amount, usdtAmount };
}

const askRow = [
  createRowData(49000, 222),
  createRowData(49000, 222),
  createRowData(49000, 222),
];

const tokenList = [
  { label: 'BTC/USDT', value: 'BTCUSDT' },
  { label: 'ETH/USDT', value: 'ETHUSDT' },
  { label: 'BNB/USDT', value: 'BNBUSDT' },
  { label: 'DOT/USDT', value: 'DOTUSDT' },
  { label: 'ADA/USDT', value: 'ADAUSDT' },
];

export default OrderBooks;
