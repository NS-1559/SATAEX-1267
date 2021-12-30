import {
  BaseSyntheticEvent,
  ChangeEvent,
  FC,
  SyntheticEvent,
  useEffect,
  useState,
} from 'react';
import { useAppSelector } from '@app/hooks/redux';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import {
  Box,
  Button,
  Tabs,
  Tab,
  Divider,
  Container,
  FormLabel,
  Input,
  InputAdornment,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  Slider,
} from '@mui/material';
import ccxt from 'ccxt';

import { useTranslate } from '@app/hooks/translate';
import { useTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    fontSize: '0.8rem',
  },
  textColor: {
    color: '#86868A',
  },
  textField: {
    borderColor: '#86868A',
    color: '#86868A',
    width: '100%',
  },
});

function TabPanel(props: any) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

//here
const MakeOrder: FC = () => {
  const { t } = useTranslate();
  const theme = useTheme();
  const classes = useStyles();
  const [mode, setMode] = useState(0);
  const [orderPrice, setOrderPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const tradePair = useAppSelector((state) => state.trade.tradePair);

  const handleChange = (event: React.SyntheticEvent, newMode: number) => {
    console.log(newMode);
    setMode(newMode);
  };

  const handleChangeIndex = (index: number) => {
    setMode(index);
  };

  const handleOrderPriceChange = (e: BaseSyntheticEvent) => {
    setOrderPrice(e.target.value);
  };

  const handleQuantityChange = (e: BaseSyntheticEvent) => {
    setQuantity(e.target.value);
  };

  const modeList = ['limit', 'market'];

  const onSubmit = () => {
    console.log({
      mode: modeList[mode],
      orderPrice,
      quantity,
    });
    alert('Make order success ...');
  };

  return (
    <Box
      sx={{
        minWidth: '360px',
        height: 682,
        backgroundColor: '#17181E',
        marginTop: 8,

        marginRight: 4,
        paddingTop: 3,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          padding: 1,
        }}
      >
        <Button
          sx={{
            backgroundColor: '#24AE64',
            color: 'white',
            width: '48%',
            '&:hover': {
              color: 'white',
              backgroundColor: '#1C884E',
            },
          }}
        >
          Buy
        </Button>
        <Button
          sx={{
            backgroundColor: '#22232A',
            color: '#86868A',
            width: '48%',
          }}
        >
          Sell
        </Button>
      </Box>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: 'divider',
        }}
      >
        <Tabs
          value={mode}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Limit" {...a11yProps(0)} />
          <Tab label="Market" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={mode} index={0}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          <Box className={classes.textColor}>Available Balance</Box>
          <Box className={classes.textColor}>0.00975 USDT</Box>
        </Box>
        <Box sx={{ mb: 2 }}>
          <TextField
            id="outlined-basic"
            label="Order Price"
            variant="outlined"
            className={classes.textField}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">USDT</InputAdornment>
              ),
            }}
            onChange={handleOrderPriceChange}
          />
        </Box>
        <Box sx={{ mb: 2 }}>
          <TextField
            id="outlined-basic"
            label="Quantity"
            variant="outlined"
            className={classes.textField}
            InputProps={{
              endAdornment: <InputAdornment position="end"></InputAdornment>,
            }}
            onChange={handleQuantityChange}
          />
        </Box>
        <Button
          sx={{
            backgroundColor: '#24AE64',
            color: 'white',
            width: '100%',
            paddingTop: 2,
            paddingBottom: 2,
            mb: 2,
            '&:hover': {
              color: 'white',
              backgroundColor: '#1C884E',
            },
          }}
          onClick={onSubmit}
        >
          Buy
        </Button>
        <Box
          sx={{
            color: '#86868A',
            display: 'flex',
            justifyContent: 'flex-end',
            mb: 2,
            fontSize: 'small',
            cursor: 'pointer',
          }}
        >
          Spot Trading Fees
        </Box>
        <Divider sx={{ borderColor: 'white' }} />
      </TabPanel>
      <TabPanel value={mode} index={1}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          <Box className={classes.textColor}>Available Balance</Box>
          <Box className={classes.textColor}>0.00975 USDT</Box>
        </Box>
        <Box sx={{ mb: 2 }}>
          <TextField
            id="outlined-basic"
            label="Quantity"
            variant="outlined"
            className={classes.textField}
            InputProps={{
              endAdornment: <InputAdornment position="end"></InputAdornment>,
            }}
            onChange={handleQuantityChange}
          />
        </Box>
        <Button
          sx={{
            backgroundColor: '#24AE64',
            color: 'white',
            width: '100%',
            paddingTop: 2,
            paddingBottom: 2,
            mb: 2,
            '&:hover': {
              color: 'white',
              backgroundColor: '#1C884E',
            },
          }}
          onClick={onSubmit}
        >
          Buy
        </Button>
        <Box
          sx={{
            color: '#86868A',
            display: 'flex',
            justifyContent: 'flex-end',
            mb: 2,
            fontSize: 'small',
            cursor: 'pointer',
          }}
        >
          Spot Trading Fees
        </Box>
        <Divider sx={{ borderColor: 'white' }} />
      </TabPanel>
      <TabPanel value={mode} index={2}>
        Item Three
      </TabPanel>
    </Box>
  );
};

export default MakeOrder;
