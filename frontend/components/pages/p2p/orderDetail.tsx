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
  Typography,
  ButtonGroup,
} from '@mui/material';

import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';

import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import { makeStyles } from '@mui/styles';

const OrderDetail: FC = (props: any) => {
  const { handleCancleP2pOrderButtonClick, orderDetail } = props;
  const { t } = useTranslate();
  const classes = useStyles();

  console.log(orderDetail);
  const {
    USDTQuantity,
    VNDQuantity,
    paymentMethod,
    bankCardId,
    direction,
    phoneNumber,
    note,
  } = orderDetail;

  return (
    <Box className={classes.root} sx={{ width: '100%', py: 8 }}>
      <TabsUnstyled>
        <TabsList>
          <Tab>Order Detail</Tab>
        </TabsList>
        <Box className={classes.inputWrap}>
          <label className={classes.normalText}>VND</label>
          <Typography>{VNDQuantity} - VND</Typography>
        </Box>
        <Box className={classes.inputWrap}>
          <label className={classes.normalText}>USDT</label>
          <Typography>{USDTQuantity} $</Typography>
        </Box>

        <Box className={classes.inputWrap}>
          <label className={classes.normalText}>Payment method</label>
          <Typography>{paymentMethod}</Typography>
        </Box>
        <Box className={classes.inputWrap}>
          <label className={classes.normalText}>Bank Card ID</label>
          <Typography>{bankCardId}</Typography>
        </Box>
        <Box className={classes.inputWrap}>
          <label className={classes.normalText}>Phone number</label>
          <Typography>{phoneNumber}</Typography>
        </Box>
        <Box className={classes.inputWrap}>
          <label className={classes.normalText}>Note</label>
          <Typography>{note}</Typography>
        </Box>
        <Button className={classes.submitButton} variant="contained">
          Confirm
        </Button>
        <Button
          onClick={handleCancleP2pOrderButtonClick}
          className={classes.cancelButton}
          variant="contained"
          color="error"
        >
          cancel
        </Button>
      </TabsUnstyled>
    </Box>
  );
};

const useStyles = makeStyles({
  root: {
    maxWidth: '40rem',
    margin: 'auto',
    marginTop: '0.5rem',
    backgroundColor: '#202020',
    padding: '2rem 1rem',
    borderRadius: '8px',
    position: 'relative',
  },

  normalText: {
    fontSize: '1rem',
    fontWeight: 300,
    textIndent: '0.5rem',
    fontFamily: 'sans-serif',
    color: 'white',
  },

  span: {
    fontWeight: 500,
    color: '#cb4545',
    marginLeft: '1rem',
  },

  tabButton: {},

  activeTabButton: {},

  bgGreen: {
    backgroundColor: '#24ae64',
  },
  bgRed: {
    backgroundColor: '#e04040',
  },

  inputWrap: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '1rem',
  },

  input: {
    maxHeight: '50px',
    color: 'white',
    borderColor: 'tomato',
  },

  submitButton: {
    margin: 'auto',
    marginTop: '2rem',

    padding: '0.5rem 0rem',

    width: '100%',
  },

  cancelButton: {
    margin: 'auto',
    marginTop: '1rem',

    padding: '0.5rem 0rem',

    width: '100%',
  },
});

//  Tab button
const color = {
  hoverColor: '#74748014',
  buy: '#24ae64', // Buy green
  sell: '#e04040', // Sell green
  activeColor: '',
};

const Tab = styled(TabUnstyled)`
  font-family: IBM Plex Sans, sans-serif;
  color: white;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: bold;
  background-color: transparent;
  width: 100%;
  padding: 12px 16px;
  margin: 6px 6px;
  border: none;
  border-radius: 5px;
  display: flex;
  justify-content: center;
`;

const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
`;

const TabsList = styled(TabsListUnstyled)`
  min-width: 320px;
  border-radius: 8px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  margin-bottom: '1rem';
`;

export default OrderDetail;
