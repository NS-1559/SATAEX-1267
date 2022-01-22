import {
  BaseSyntheticEvent,
  ChangeEvent,
  FC,
  useEffect,
  useState,
} from 'react';
import { useAppSelector } from '@app/hooks/redux';
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
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import ccxt from 'ccxt';

import { useTranslate } from '@app/hooks/translate';
import { useTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

//here
const MakeOrder: FC = () => {
  const { t } = useTranslate();
  const classes = useStyles();
  const tradePair = useAppSelector((state) => state.trade.tradePair);
  const tokenSymbol = tradePair.slice(0, tradePair.length - 4);

  const [direction, setDirection] = useState('buy');
  const [mode, setMode] = useState('market');
  const [quantity, setQuantity] = useState();
  const [orderPrice, setOrderPrice] = useState();

  const handleModeChange = (event: SelectChangeEvent) => {
    setMode(event.target.value as string);
  };

  const handleDirectionChange = (event: any) => {
    const newDirection = event.target.textContent.toLowerCase();
    setDirection(newDirection);
  };

  const handleQuantityChange = (event: any) => {
    const newQuantity = event.target.value;
    if (newQuantity >= 0) {
      setQuantity(newQuantity);
    }
  };

  const handleOrderPriceChange = (event: any) => {
    const newOrderPrice = event.target.value;
    if (newOrderPrice >= 0) {
      setOrderPrice(newOrderPrice);
    }
  };

  const handleMakeOfferClick = (event: any) => {
    console.log(direction, mode, orderPrice, quantity);
  };

  return (
    <Box className={classes.root}>
      <Typography className={classes.title} variant="h6" component="h6">
        Spot Trade
      </Typography>
      <Divider />
      <TabsUnstyled defaultValue="buy" onChange={handleDirectionChange}>
        <TabsList>
          <Tab value="buy">Buy</Tab>
          <Tab value="sell">Sell</Tab>
        </TabsList>
        <TabPanel value={0}>
          <Typography
            className={classes.normalText}
            variant="h6"
            component="h6"
          >
            Available Balance: <span className={classes.span}>1000 USDT</span>
          </Typography>
        </TabPanel>
        <TabPanel value={1}>
          {' '}
          <Typography
            className={classes.normalText}
            variant="h6"
            component="h6"
          >
            Available Balance:{' '}
            <span className={classes.span}>1000 {tokenSymbol}</span>
          </Typography>
        </TabPanel>
        <Box className={classes.inputWrap}>
          <label className={classes.normalText}>Order Price</label>
          <TextField
            size="small"
            type="number"
            className={classes.input}
            label="USDT"
            value={orderPrice}
            onChange={handleOrderPriceChange}
          />
        </Box>
        <Box className={classes.inputWrap}>
          <label className={classes.normalText}>Quantity</label>
          <TextField
            size="small"
            type="number"
            className={classes.input}
            label={tokenSymbol}
            value={quantity}
            onChange={handleQuantityChange}
          />
        </Box>
        <Box className={classes.inputWrap}>
          <label className={classes.normalText}>Order Mode</label>
          <Select
            size="small"
            className={classes.input}
            id="demo-simple-select"
            value={mode}
            onChange={handleModeChange}
          >
            <MenuItem value={'market'}>Market</MenuItem>
            <MenuItem value={'limit'}>Limit</MenuItem>
          </Select>
        </Box>
      </TabsUnstyled>
      <Box className={classes.inputWrap}>
        <label className={classes.normalText}>
          Available {direction === 'buy' ? 'USDT' : tokenSymbol}: 1000
        </label>
      </Box>
      <Button
        onClick={handleMakeOfferClick}
        className={classes.submitButton}
        variant="contained"
      >
        Make Order
      </Button>
    </Box>
  );
};

const useStyles = makeStyles({
  root: {
    backgroundColor: '#171819',
    marginTop: '4rem',
    marginRight: '2.5rem',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    maxHeight: '680px',
  },

  title: {
    paddingTop: '0.8rem',
    paddingBottom: '0.8rem',
    marginBottom: '1rem',
    fontSize: '1.2rem',
    borderBottom: '2px solid #f7a600',
  },

  normalText: {
    fontSize: '0.8rem',
    fontWeight: 300,
    fontFamily: 'sans-serif',
  },

  span: {
    fontWeight: 500,
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
    marginTop: '2rem',
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
  font-size: 0.875rem;
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

export default MakeOrder;
