import { NextPage } from 'next';
import TradingView from '@components/pages/trade/TradingView';
import Seo from '@components/common/Seo';
import { useTranslate } from '@app/hooks/translate';

const Markets: NextPage = () => {
  const { t } = useTranslate();

  return (
    <>
      <Seo title={t('app.markets.trade')} />
      <TradingView />
    </>
  );
};

export default Markets;
