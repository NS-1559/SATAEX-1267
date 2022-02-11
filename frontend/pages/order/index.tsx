import { NextPage } from 'next';
import Seo from '@components/common/Seo';
import { useTranslate } from '@app/hooks/translate';
import { Box, Button } from '@mui/material';
import Image from 'next/image';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Link from 'next/link';
import { makeStyles, withStyles } from '@mui/styles';

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

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.gray,
    color: theme.palette.common.gray,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    color: theme.palette.common.black,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
}));

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

const dataTable: any = createTable([], true);

const Order: NextPage = () => {
  const classes = useStyles();
  const { t } = useTranslate();
  const router = useRouter();
  const token = Cookies.get('token');
  // const [tokenList, setTokenList] = useState([]);
  // const [rows, setRow] = useState([] as any[]);

  useEffect(() => {
    if (!token) {
      router.push('vi/auth/login');
    }
    axios.get('http://127.0.0.1:8000/api/orders').then((response: any) => {
      // setTokenList(response.data);
      console.log(response.data);
      // setRow(rowList);
    });
  }, [router, token]);

  // const options = tokenList.map((option: any) => {
  //   const firstLetter = option.symbol[0].toUpperCase();
  //   return {
  //     firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
  //     ...option,
  //   };
  // });
  return (
    <>
      <Seo title={t('app.assets.title')} />
      <Box
        sx={{
          width: '100%',
          display: 'flex',
        }}
      >
        <Box sx={{ width: '430px' }}>
          <Box sx={{ width: '100%' }}>
            <Box
              sx={{
                width: '100%',
                padding: 3,
                display: 'flex',
                cursor: 'pointer',
              }}
            >
              <Box sx={{ marginRight: 2 }}>
                <Image
                  src="/images/assets/spot.svg"
                  alt=""
                  width={17}
                  height={17}
                />
              </Box>
              <Link href="/assets">Spot Account</Link>
            </Box>
            <Box
              sx={{
                width: '100%',
                padding: 3,
                fontWeight: 600,
                backgroundColor: '#f7f7f7',
                display: 'flex',
                cursor: 'pointer',
                transition: '0.5s',
                '&:hover': { backgroundColor: '#f7f7f7' },
              }}
            >
              <Box sx={{ marginRight: 2 }}>
                <Image
                  src="/images/assets/order.png"
                  alt=""
                  width={20}
                  height={20}
                />
              </Box>
              <Link href="/order">Order</Link>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            width: '100%',
            backgroundColor: '#f7f7f7',
            padding: 5,
            paddingRight: 3,
            paddingLeft: 3,
          }}
        >
          <Box
            sx={{
              // height: '100vh',
              backgroundColor: '#fff',
              marginTop: 0,
              borderRadius: 2,
            }}
          >
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
            </TableContainer>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Order;
