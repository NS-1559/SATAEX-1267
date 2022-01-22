import { NextPage } from 'next';
import P2pMain from '@components/pages/p2p/p2pMain';
import Seo from '@components/common/Seo';
import { useTranslate } from '@app/hooks/translate';

const P2P: NextPage = () => {
  const { t } = useTranslate();

  return (
    <>
      <Seo title={t('app.p2p.title')} />
      <P2pMain />
    </>
  );
};

export default P2P;
