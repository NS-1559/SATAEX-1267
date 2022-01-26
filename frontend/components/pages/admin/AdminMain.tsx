import { useAppSelector } from '@app/hooks/redux';
import { useTranslate } from '@app/hooks/translate';
import { Coin } from '@models/Coin';
import { useTheme } from '@mui/material/styles';
import { ChangeEvent, FC, useMemo, useState } from 'react';

import * as React from 'react';

import jsonServerProvider from 'ra-data-json-server';

import {
  Box,
  Button,
  Divider,
  FormLabel,
  Input,
  InputAdornment,
  TextField,
  Typography,
  ButtonGroup,
} from '@mui/material';

import { makeStyles } from '@mui/styles';

const AdminMain: FC = () => {
  const { t } = useTranslate();
  const classes = useStyles();

  return <Box>a</Box>;
};

const useStyles = makeStyles({
  root: {},
});

export default AdminMain;
