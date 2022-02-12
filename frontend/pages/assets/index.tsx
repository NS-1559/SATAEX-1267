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
import { parseJwt } from '@utils/parseJwt';

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

const Assets: NextPage = () => {
  const { t } = useTranslate();
  const router = useRouter();
  const [tokenList, setTokenList] = useState([]);
  const [rows, setRow] = useState([] as any[]);
  const [walletManager, setWalletManager] = useState(null);
  const token = Cookies.get('token');
  const tokenData = parseJwt(token);

  const demoWallet = {
    apiKey: tokenData.api_key,
    secret: tokenData.secret_key,
  };

  console.log(demoWallet);

  useEffect(() => {
    if (!token) {
      router.push('vi/auth/login');
    }
    axios.get('http://127.0.0.1:8000/api/asset').then((response: any) => {
      setTokenList(response.data);
      const rowList = response.data.map((coin: any) => {
        return {
          coin: coin.symbol,
          wallet_balance: 0,
          available_balance: 0.0,
          reserved_for_orders: 0.0,
          equivalent: 0.0,
        };
      });
      console.log(rowList);
      setRow(rowList);
    });

    axios
      .post('http://localhost:5000/test/getBalance', {
        ...demoWallet,
      })
      .then(function (response) {
        console.log('hi');
        setWalletManager(response.data);
      })
      .catch(function (error) {});
  }, [router, token]);

  console.log(walletManager);

  const options = tokenList.map((option: any) => {
    const firstLetter = option.symbol[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      ...option,
    };
  });

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
                backgroundColor: '#f7f7f7',
                padding: 3,
                display: 'flex',
                fontWeight: 600,
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
              padding: 3,
              width: 450,
              backgroundImage: 'linear-gradient(90deg, #ffcc6f, #ffb11a)',
              borderRadius: 3,
            }}
          >
            <Box sx={{ fontSize: 20, fontWeight: 600, marginBottom: 2 }}>
              Spot Account
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
              }}
            >
              <Box>
                <Box
                  sx={{
                    color: 'rgba(0, 0, 0, 0.4)',
                    fontSize: 14,
                  }}
                >
                  Total Equity
                </Box>
                <Box
                  sx={{
                    fontSize: 25,
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'flex-end',
                  }}
                >
                  {walletManager && walletManager['BTC'].total}
                  <Box sx={{ fontSize: 14, marginLeft: 1, marginBottom: 1 }}>
                    BTC
                  </Box>
                </Box>
                <Box
                  sx={{
                    color: 'rgba(0, 0, 0, 0.4)',
                    fontSize: 14,
                  }}
                >
                  ≈ {walletManager && walletManager['BTC'].free * 44000} $
                </Box>
              </Box>
              <Box>
                <Box
                  sx={{
                    color: 'rgba(0, 0, 0, 0.4)',
                    fontSize: 14,
                  }}
                >
                  Available Balance
                </Box>
                <Box
                  sx={{
                    fontSize: 25,
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'flex-end',
                  }}
                >
                  {walletManager && walletManager['BTC'].free}
                  <Box sx={{ fontSize: 14, marginLeft: 1, marginBottom: 1 }}>
                    BTC
                  </Box>
                </Box>
                <Box
                  sx={{
                    color: 'rgba(0, 0, 0, 0.4)',
                    fontSize: 14,
                  }}
                >
                  ≈ {walletManager && walletManager['BTC'].free * 44000} $
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              backgroundColor: '#fff',
              marginTop: 5,
              borderRadius: 2,
            }}
          >
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Coin</StyledTableCell>
                    <StyledTableCell>Wallet Balance</StyledTableCell>
                    <StyledTableCell>Available Balance</StyledTableCell>
                    <StyledTableCell>Frozen</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <StyledTableRow
                    sx={{
                      '&:last-child td, &:last-child th': { border: 0 },
                    }}
                  >
                    <StyledTableCell component="th" scope="row">
                      USDT
                    </StyledTableCell>
                    <StyledTableCell>
                      {walletManager && walletManager['USDT'].total}
                    </StyledTableCell>
                    <StyledTableCell>
                      {walletManager && walletManager['USDT'].free}
                    </StyledTableCell>
                    <StyledTableCell>
                      {walletManager && walletManager['USDT'].used}
                    </StyledTableCell>
                  </StyledTableRow>
                  {rows.map((row) => (
                    <StyledTableRow
                      key={row.coin}
                      sx={{
                        '&:last-child td, &:last-child th': { border: 0 },
                      }}
                    >
                      <StyledTableCell component="th" scope="row">
                        {row.coin}
                      </StyledTableCell>
                      <StyledTableCell>
                        {walletManager && walletManager[row.coin].total}
                      </StyledTableCell>
                      <StyledTableCell>
                        {walletManager && walletManager[row.coin].free}
                      </StyledTableCell>
                      <StyledTableCell>
                        {walletManager && walletManager[row.coin].used}
                      </StyledTableCell>
                    </StyledTableRow>
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

export default Assets;
