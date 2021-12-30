import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Box, Container, FormLabel, TextField } from '@mui/material';
import TradingView from '@components/pages/trade/TradingView';
import OrderBooks from '@components/pages/trade/OrderBooks';
import MakeOrder from '@components/pages/trade/MakeOrder';
import OrderTable from '@components/pages/trade/OrderTable';
import Seo from '@components/common/Seo';
import { useTranslate } from '@app/hooks/translate';
import { useEffect } from 'react';
import { useAppDispatch } from '@app/hooks/redux';
import { tradeActions } from '@app/store/trade/tradeSlice';
import { makeStyles, withStyles } from '@mui/styles';

const Markets: NextPage = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslate();
  const { query } = useRouter();
  const classes = useStyles();
  useEffect(() => {
    dispatch(tradeActions.setTradePair(query.trade as string));
  }, [query, dispatch]);

  return (
    <>
      <Seo title={t('app.markets.trade')} />
      <Box className={classes.main}>
        <OrderBooks />
        <TradingView />
        <MakeOrder />
        <Box className={classes.orderTableWrap}>
          <OrderTable />
        </Box>
      </Box>
    </>
  );
};

const useStyles = makeStyles({
  main: {
    backgroundColor: '#1e1f20',
    color: 'white',
    overflow: 'hidden',
    paddingBottom: '16rem',

    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    position: 'relative',
  },

  orderTableWrap: {
    minWidth: '1400px',
    position: 'absolute',
    top: '54%',
    right: '0.5rem',
  },
});

export default Markets;
