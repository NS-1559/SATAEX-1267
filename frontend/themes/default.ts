import { createTheme, Theme } from '@mui/material/styles';

declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line
  interface DefaultTheme extends Theme {}
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#f7a600',
    },
    background: {
      default: '#fff',
    },
    text: {
      primary: '#f7a600',
    },
  },
});

export default theme;
