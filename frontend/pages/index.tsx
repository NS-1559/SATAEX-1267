import Seo from '@components/common/Seo';
import HomeHeader from '@components/pages/home/HomeHeader';
import MarketTrends from '@components/pages/home/MarketTrends';
import { NextPage } from 'next';
import TradeReason from '@components/pages/home/TradeReason';

const Home: NextPage = () => {
  return (
    <>
      <Seo />
      <HomeHeader />
      <MarketTrends />
      <TradeReason />
    </>
  );
};

export default Home;
