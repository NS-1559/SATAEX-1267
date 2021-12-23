import { NextPage } from 'next';
import { useRouter } from 'next/router';
import TradingView from '@components/pages/trade/TradingView';
import OrderBooks from '@components/pages/trade/OrderBooks';
import MakeOrder from '@components/pages/trade/MakeOrder';
import Seo from '@components/common/Seo';
import { useTranslate } from '@app/hooks/translate';
import { useEffect } from 'react';
import { useAppDispatch } from '@app/hooks/redux';
import { tradeActions } from '@app/store/trade/tradeSlice';

const Markets: NextPage = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslate();
  const { query } = useRouter();
  useEffect(() => {
    dispatch(tradeActions.setTradePair(query.trade as string));
  }, [query, dispatch]);

  return (
    <>
      <Seo title={t('app.markets.trade')} />
      <TradingView />
      <OrderBooks />
      <MakeOrder />
    </>
  );
};

export default Markets;
