import { Box } from '@mui/material';
import { FC } from 'react';
import Footer from './Footer';
import Header from './Header';
import Toast from '@components/common/Toast';

const DefaultLayout: FC = ({ children }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        width: '100%',
      }}
    >
      <Toast />
      <Header />
      <Box sx={{ flexGrow: 1 }}>{children}</Box>
      <Footer />
    </Box>
  );
};

export default DefaultLayout;
