import Seo from '@components/common/Seo';
import HomeHeader from '@components/pages/home/HomeHeader';
import MarketTrends from '@components/pages/home/MarketTrends';
import { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <Seo />
      <HomeHeader />
      <MarketTrends />
    </>
  );
};

export default Home;
