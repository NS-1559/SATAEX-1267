import { FC } from 'react';
import Header from './Header';

const DefaultLayout: FC = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default DefaultLayout;
