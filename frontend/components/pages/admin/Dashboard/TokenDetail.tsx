import { useAppSelector } from '@app/hooks/redux';
import { useTranslate } from '@app/hooks/translate';
import { Coin } from '@models/Coin';
import { useTheme } from '@mui/material/styles';
import { ChangeEvent, FC, useMemo, useState } from 'react';

import jsonServerProvider from 'ra-data-json-server';

import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

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
  const { tokenSymbol } = props;
  const { t } = useTranslate();
  const classes = useStyles();

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
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="tokenSymbol"
                name="tokenSymbol"
                label="Token Symbol"
                fullWidth
                variant="standard"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="contract"
                name="contract"
                label="Token Contract"
                fullWidth
                variant="standard"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="tokenType"
                name="tokenType"
                label="Token Type"
                fullWidth
                variant="standard"
                placeholder="BSC or ERC20"
                required
              />
            </Grid>
          </Grid>
        </Paper>
        <Button
          variant="contained"
          color="success"
          sx={{ color: 'white', mt: 2, width: '8rem', mr: 2 }}
        >
          Confirm
        </Button>
        <Button
          variant="contained"
          color="error"
          sx={{ color: 'white', mt: 2, width: '8rem' }}
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
