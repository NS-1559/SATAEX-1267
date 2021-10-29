import { Box } from '@mui/material';
import { FC } from 'react';
import Footer from './Footer';
import Header from './Header';

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
      <Header />
      <Box sx={{ flexGrow: 1 }}>{children}</Box>
      <Footer />
    </Box>
  );
};

export default DefaultLayout;
