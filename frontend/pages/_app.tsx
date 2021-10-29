import DefaultLayout from '@components/layouts/DefaultLayout';
import { wrapper } from '@features/index';
import { ThemeProvider } from '@mui/styles';
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
