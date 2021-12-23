import { NextPage } from 'next';
import TradingView from '@components/pages/trade/TradingView';
import OrderBooks from '@components/pages/trade/OrderBooks';
import Seo from '@components/common/Seo';
import { useTranslate } from '@app/hooks/translate';
import { Box, Container, FormLabel, TextField } from '@mui/material';

const Markets: NextPage = () => {
  const { t } = useTranslate();

  return (
    <>
      <Seo title={t('app.markets.trade')} />
      <TradingView />
      <OrderBooks />
    </>
  );
};

export default Markets;
