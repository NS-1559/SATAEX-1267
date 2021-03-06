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
      paper: '#F9F9F9',
    },
    text: {
      primary: '#86868A',
      secondary: '#86868A',
    },
  },
});

export default theme;
