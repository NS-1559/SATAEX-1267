import { NextPage } from 'next';
import { useRouter } from 'next/router';
import TradingView from '@components/pages/trade/TradingView';
import OrderBooks from '@components/pages/trade/OrderBooks';
import Seo from '@components/common/Seo';
import { useTranslate } from '@app/hooks/translate';
import { Box, Container, FormLabel, TextField } from '@mui/material';

const Markets: NextPage = () => {
  const { t } = useTranslate();

  const { trade } = useRouter().query;
  console.log(trade);

  return (
    <>
      <Seo title={t('app.markets.trade')} />
      <TradingView />
      <OrderBooks />
    </>
  );
};

export default Markets;
