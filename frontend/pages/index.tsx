import { useTranslate } from '@app/hooks/translate';
import { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  const { t } = useTranslate();

  return (
    <>
      <Head>
        <title>
          {t('app.global.name')} | {t('app.home.title')}
        </title>
        <meta name="description" content={t('app.global.description')} />
      </Head>
    </>
  );
};

export default Home;
