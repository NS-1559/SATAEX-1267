import * as React from 'react';
import {
  BaseSyntheticEvent,
  ChangeEvent,
  FC,
  useEffect,
  useState,
} from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Transactions from './Transactions';
import { useTheme } from '@mui/material/styles';

const Dashboard: FC = () => {
  const theme = useTheme();
  return (
    <Box component="main">
      <Toolbar />
      <Container sx={{ mt: 4, mb: 4 }} style={{ width: '1500px' }}>
        <Grid container spacing={3}>
          {/* Balance detail */}
          <Grid item xs={12} md={4} lg={3}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 240,
                backgroundColor: '#20304c',
              }}
            >
              <Typography
                component="h2"
                color="common.white"
                variant="h5"
                style={{ textTransform: 'uppercase' }}
              >
                Balance details
              </Typography>
              <Typography
                color="common.white"
                variant="button"
                component="h2"
                mt={2}
              >
                $ 1,200,000.0
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 240,
                backgroundColor: '#7199ff',
              }}
            >
              <Typography
                color="common.white"
                variant="h5"
                style={{ textTransform: 'uppercase' }}
                component="h2"
              >
                Users
              </Typography>
              <Typography
                color="common.white"
                variant="button"
                component="h2"
                mt={2}
              >
                1000 users
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 240,
                backgroundColor: '#ffa800',
              }}
            >
              <Typography
                color="common.white"
                variant="h5"
                style={{ textTransform: 'uppercase' }}
                component="h2"
              >
                Transactions
              </Typography>
              <Typography
                color="common.white"
                variant="button"
                component="h2"
                mt={2}
              >
                3000 Transactions
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 240,
                backgroundColor: '#8950fc',
              }}
            >
              <Typography
                color="common.white"
                variant="h5"
                style={{ textTransform: 'uppercase' }}
                component="h2"
              >
                Commission
              </Typography>
              <Typography
                color="common.white"
                variant="button"
                component="h2"
                mt={2}
              >
                $ 3000
              </Typography>
            </Paper>
          </Grid>
          {/* Recent Transactions */}

          <Grid item xs={12}>
            <Paper
              sx={{ p: 2, display: 'flex', flexDirection: 'column' }}
            ></Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Dashboard;
