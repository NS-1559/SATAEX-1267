import Seo from '@components/common/Seo';
import HomeHeader from '@components/pages/home/HomeHeader';
import { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <Seo />
      <HomeHeader />
    </>
  );
};

export default Home;
