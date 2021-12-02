import { wrapper } from '@app/store/index';
import DefaultLayout from '@components/layouts/DefaultLayout';
import { ThemeProvider } from '@mui/material/styles';
import '@styles/global.css';
import theme from '@themes/default';
import { AppProps } from 'next/app';
import { FC } from 'react';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </ThemeProvider>
  );
};
export default wrapper.withRedux(MyApp);
