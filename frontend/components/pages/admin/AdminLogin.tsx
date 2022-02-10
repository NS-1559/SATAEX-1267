import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import { FC, useEffect } from 'react';
import { useTranslate } from '@app/hooks/translate';
import { commonActions } from '@app/store/common/commonSlice';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useAppDispatch, useAppSelector } from '@app/hooks/redux';
import { loginThunk } from '@app/store/auth/sliceThunks';
import { push } from 'connected-next-router';



const theme = createTheme();

export default function Login() {

  const { t } = useTranslate();
  const dispatch = useAppDispatch();
  const loginState = useAppSelector((state) => state.auth.login);

  useEffect(() => {
    if (loginState.error) {
      dispatch(
        commonActions.openToast({
          message: t('app.login.fail-message'),
          type: 'error',
        }),
      );
    }
  }, [dispatch, loginState.error, t]);


  useEffect(() => {
    if (loginState.isLogin) {
      dispatch(push('/admin'));
    }
  }, [dispatch, loginState.isLogin]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const formValues:any = {
      email: data.get('email'),
      password: data.get('password'),
    }

    dispatch(loginThunk(formValues));
    console.log(formValues)
  };

  

  

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
