import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Box, Container, FormLabel, TextField } from '@mui/material';
import TradingView from '@components/pages/trade/TradingView';
import OrderBooks from '@components/pages/trade/OrderBooks';
import MakeOrder from '@components/pages/trade/MakeOrder';
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
      </Box>
    </>
  );
};

const useStyles = makeStyles({
  main: {
    backgroundColor: '#1e1f20',
    color: 'white',
    overflow: 'hidden',
    paddingTop: '1rem',
    paddingBottom: '1rem',

    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
});

export default Markets;
