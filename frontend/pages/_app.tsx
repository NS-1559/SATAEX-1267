import { wrapper } from '@app/store/index';
import DefaultLayout from '@components/layouts/DefaultLayout';
import { ThemeProvider } from '@mui/material/styles';
import '@styles/global.css';
import theme from '@themes/default';
import { AppProps } from 'next/app';
import { FC, useEffect } from 'react';
import { useAppDispatch } from '@app/hooks/redux';
import { fetchCoinListThunk } from '@app/store/common/commonThunks';
import { ConnectedRouter } from 'connected-next-router';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCoinListThunk());
  }, [dispatch]);

  return (
    <ConnectedRouter>
      <ThemeProvider theme={theme}>
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
      </ThemeProvider>
    </ConnectedRouter>
  );
};

export default wrapper.withRedux(MyApp);
