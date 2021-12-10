import { NextPage } from 'next';
import MarketTable from '@components/pages/markets/MarketTable';
import Seo from '@components/common/Seo';
import { useTranslate } from '@app/hooks/translate';

const Markets: NextPage = () => {
  const { t } = useTranslate();

  return (
    <>
      <Seo title={t('app.markets.title')} />
      <MarketTable />
    </>
  );
};

export default Markets;
