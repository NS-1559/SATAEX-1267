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
  Container,
} from '@mui/material';

import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';

import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import { makeStyles } from '@mui/styles';

const OrderDetail: FC = (props: any) => {
  const { handleCancleP2pOrderButtonClick, orderDetail } = props;
  const { t } = useTranslate();
  const classes = useStyles();

  const [confirmStatus, setConfirmStatus] = useState(false);
  const [transferredStatus, setTransferredStatus] = useState(false);

  const handleConfirmButtonClick = () => {
    setConfirmStatus(true);
  };

  const handleTransferredButtonClick = () => {
    setTransferredStatus(true);
  };

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
          <Typography className={classes.orderContent}>
            {VNDQuantity} - VND
          </Typography>
        </Box>
        <Box className={classes.inputWrap}>
          <label className={classes.normalText}>USDT</label>
          <Typography className={classes.orderContent}>
            {USDTQuantity} $
          </Typography>
        </Box>

        <Box className={classes.inputWrap}>
          <label className={classes.normalText}>Payment method</label>
          <Typography className={classes.orderContent}>
            {paymentMethod}
          </Typography>
        </Box>
        <Box className={classes.inputWrap}>
          <label className={classes.normalText}>Bank Card ID</label>
          <Typography className={classes.orderContent}>{bankCardId}</Typography>
        </Box>
        <Box className={classes.inputWrap}>
          <label className={classes.normalText}>Phone number</label>
          <Typography className={classes.orderContent}>
            {phoneNumber}
          </Typography>
        </Box>
        <Box className={classes.inputWrap}>
          <label className={classes.normalText}>Note</label>
        </Box>
        <Box>
          <Typography className={classes.orderContent}>{note}</Typography>
        </Box>
        {confirmStatus || (
          <>
            <Button
              className={classes.submitButton}
              variant="contained"
              onClick={handleConfirmButtonClick}
            >
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
          </>
        )}
        {confirmStatus && (
          <LoadingButton
            className={classes.submitButton}
            variant="contained"
            endIcon={<SendIcon />}
            loading={true}
            loadingPosition="end"
          >
            Pending ...
          </LoadingButton>
        )}
      </TabsUnstyled>

      {confirmStatus && (
        <Box className={classes.popup}>
          <Typography className={classes.popupContent}>
            {transferredStatus
              ? transferredNoti[direction]
              : confirmedNoti[direction]}
          </Typography>
          <Container className={classes.popupButtonWrap}>
            <Button
              variant="contained"
              disabled={transferredStatus}
              onClick={handleTransferredButtonClick}
            >
              {direction === 'buy' ? 'unlock' : 'transferred'}
            </Button>
            <Button variant="contained" color="error">
              Complain
            </Button>
          </Container>
        </Box>
      )}
    </Box>
  );
};

const confirmedNoti: any = {
  buy: 'Waiting buyer confirm transferred to your bank !',
  sell: 'If you transferred your money to seller of bank, please select transferred button !',
};

const transferredNoti: any = {
  buy: 'If buyer transferred your money to seller of bank, please unlock USDT for buyer',
  sell: 'Waiting seller unlock USDT for you, if seller dont unlock, please select complain button',
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

  orderContent: {
    color: '#898989',
    textIndent: '0.5rem',
  },

  popup: {
    position: 'absolute',
    minWidth: '20rem',
    backgroundColor: '#202020',
    left: '105%',
    top: '0%',

    paddingTop: '2rem',
    paddingBottom: '2rem',
  },

  popupContent: {
    color: '#898989',
    padding: '0.5rem 1.4rem',
    marginBottom: '2rem',
  },

  popupButtonWrap: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
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
