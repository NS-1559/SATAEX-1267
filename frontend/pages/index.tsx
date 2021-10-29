import { useTranslate } from '@app/hooks/translate';
import { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  const { t } = useTranslate();

  return (
    <>
      <Head>
        <title>{t('app.home.title')}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
};

export default Home;
