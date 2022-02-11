import { useAppSelector } from '@app/hooks/redux';
import { useTranslate } from '@app/hooks/translate';
import { Coin } from '@models/Coin';
import { useTheme } from '@mui/material/styles';
import { ChangeEvent, FC, useMemo, useState, useEffect } from 'react';

import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import axios from 'axios';

import {
  Box,
  Button,
  Divider,
  FormLabel,
  Input,
  InputAdornment,
  Paper,
} from '@mui/material';

import { makeStyles } from '@mui/styles';

export default function TokenDetail(props: any) {
  const { token, handleChangeStatus, addNewStatus } = props;

  const [tokenDetail, setTokenDetail] = useState(token);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/asset').then((response: any) => {});
  }, []);

  const handleTokenDetailChange = (event: any) => {
    const { name, value } = event.target;
    setTokenDetail({
      ...tokenDetail,
      [name]: value,
    });
  };

  const handleSubmit = (event: any) => {
    const newToken = {
      name: tokenDetail.name,
      symbol: tokenDetail.symbol,
    };

    // post to server new token here
    if (addNewStatus) axios.post('http://127.0.0.1:8000/api/asset/', newToken);
    // put to server edit token
    else axios.put(`http://127.0.0.1:8000/api/asset/${token.name}`, newToken);
    handleChangeStatus(1, null);
  };

  return (
    <Box>
      <Grid item xs={8} mt={10} ml={2}>
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
          <Typography variant="h6" gutterBottom>
            Token Info
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="name"
                name="name"
                label="Token Name"
                fullWidth
                variant="standard"
                value={tokenDetail.name}
                onChange={handleTokenDetailChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="tokenSymbol"
                name="symbol"
                label="Token Symbol"
                fullWidth
                variant="standard"
                value={tokenDetail.symbol.toUpperCase()}
                onChange={handleTokenDetailChange}
              />
            </Grid>
          </Grid>
        </Paper>
        <Button
          variant="contained"
          color="success"
          sx={{ color: 'white', mt: 2, width: '8rem', mr: 2 }}
          onClick={handleSubmit}
        >
          Confirm
        </Button>
        <Button
          variant="contained"
          color="error"
          sx={{ color: 'white', mt: 2, width: '8rem' }}
          onClick={() => handleChangeStatus(1, null)}
        >
          Cancel
        </Button>
      </Grid>
    </Box>
  );
}

const useStyles = makeStyles({
  root: {},
});
