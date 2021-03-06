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

import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';

import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import { makeStyles } from '@mui/styles';

const MakeP2pOrder: FC = (props: any) => {
  const { handleCancleP2pOrderButtonClick } = props;
  const { t } = useTranslate();
  const classes = useStyles();
  const [direction, setDirection] = useState('buy');
  const [p2pOrder, setp2pOrder] = useState({
    VNDquantity: 0,
    USDTquantity: 0,
    paymentMethod: '',
    bankCardId: '',
    phoneNumber: '',
    note: '',
  });

  const handleDirectionChange = (event: any) => {
    const newDirection = event.target.textContent.toLowerCase();
    setDirection(newDirection);
  };

  const handleP2pOrderChange = (event: any) => {
    const { name, value } = event.target;
    if (value >= 0 && name === 'VNDquantity') {
      setp2pOrder({
        ...p2pOrder,
        VNDquantity: value,
        USDTquantity: parseFloat((value / 24000).toFixed(2)),
      });
    }

    if (value >= 0 && name === 'USDTquantity') {
      setp2pOrder({
        ...p2pOrder,
        VNDquantity: value * 24000,
        USDTquantity: value,
      });
    }

    if (name !== 'USDTquantity' && name !== 'VNDquantity') {
      setp2pOrder({
        ...p2pOrder,
        [name]: value,
      });
    }
  };

  const {
    VNDquantity,
    USDTquantity,
    paymentMethod,
    bankCardId,
    phoneNumber,
    note,
  } = p2pOrder;

  const handleMakeOfferClick = (event: any) => {
    console.log(VNDquantity, USDTquantity);
  };

  return (
    <Box className={classes.root} sx={{ width: '100%', py: 8 }}>
      <TabsUnstyled defaultValue="buy" onChange={handleDirectionChange}>
        <TabsList>
          <Tab value="buy">Buy</Tab>
          <Tab value="sell">Sell</Tab>
        </TabsList>
        <Box className={classes.inputWrap}>
          <label className={classes.normalText}>VND</label>
          <TextField
            size="medium"
            type="number"
            className={classes.input}
            label="VND"
            value={VNDquantity}
            name="VNDquantity"
            onChange={handleP2pOrderChange}
          />
        </Box>
        <Box className={classes.inputWrap}>
          <label className={classes.normalText}>USDT</label>
          <TextField
            size="medium"
            type="number"
            className={classes.input}
            label="USDT"
            value={USDTquantity}
            name="USDTquantity"
            onChange={handleP2pOrderChange}
          />
        </Box>

        <Box className={classes.inputWrap}>
          <label className={classes.normalText}>Payment method</label>
          <TextField
            size="medium"
            className={classes.input}
            value={paymentMethod}
            name="paymentMethod"
            onChange={handleP2pOrderChange}
            label="Payment"
          />
        </Box>
        <Box className={classes.inputWrap}>
          <label className={classes.normalText}>Bank Card ID</label>
          <TextField
            size="medium"
            className={classes.input}
            value={bankCardId}
            name="bankCardId"
            onChange={handleP2pOrderChange}
            label="Card ID"
          />
        </Box>
        <Box className={classes.inputWrap}>
          <label className={classes.normalText}>Phone number</label>
          <TextField
            size="medium"
            className={classes.input}
            value={phoneNumber}
            name="phoneNumber"
            onChange={handleP2pOrderChange}
            label="Phone"
          />
        </Box>
        <Box className={classes.inputWrap}>
          <label className={classes.normalText}>Note</label>
          <TextField
            size="medium"
            className={classes.input}
            value={note}
            name="note"
            onChange={handleP2pOrderChange}
            label="note"
          />
        </Box>
        <Button
          onClick={handleMakeOfferClick}
          className={classes.submitButton}
          variant="contained"
        >
          Make Order
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

  &.${tabUnstyledClasses.selected} {
    background-color: ${(props: any) =>
      props.value === 'buy' ? color['buy'] : color['sell']};
  }
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

export default MakeP2pOrder;
