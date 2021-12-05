import Seo from '@components/common/Seo';
import HomeHeader from '@components/pages/home/HomeHeader';
import MarketTrends from '@components/pages/home/MarketTrends';
import { NextPage } from 'next';
import TradeReason from '@components/pages/home/TradeReason';
import TradeBanner from '@components/pages/home/TradeBanner';

const Home: NextPage = () => {
  return (
    <>
      <Seo />
      <HomeHeader />
      <MarketTrends />
      <TradeReason />
      <TradeBanner />
    </>
  );
};

export default Home;
