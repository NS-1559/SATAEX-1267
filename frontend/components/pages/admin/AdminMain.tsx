import { useAppSelector } from '@app/hooks/redux';
import { useTranslate } from '@app/hooks/translate';
import { Coin } from '@models/Coin';
import { useTheme } from '@mui/material/styles';
import { ChangeEvent, FC, useMemo, useState } from 'react';
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

  return (
    <Box className={classes.root} sx={{ width: '100%' }}>
      Xin chao admin
    </Box>
  );
};

const useStyles = makeStyles({
  root: {},
});

export default AdminMain;
