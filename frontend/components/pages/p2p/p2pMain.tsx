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

import MakeP2pOrder from './makeP2pOrder';
import P2pTable from './p2pTable';

import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import { makeStyles } from '@mui/styles';

const P2pMain: FC = () => {
  const { t } = useTranslate();
  const classes = useStyles();

  const [makeP2pOrderActive, setP2pOrderActive] = useState(false);
  const [tableActive, setTableActive] = useState(true);

  const handleMakeP2pOrderButtonClick = (newStatus: any) => {
    setP2pOrderActive(newStatus);
    setTableActive(false);
  };

  const p2pTableProps: any = {
    //properties
    handleMakeP2pOrderButtonClick: handleMakeP2pOrderButtonClick,
    //etc...
  };

  const handleSubmitP2pOrderButtonClick = () => {};

  const handleCancleP2pOrderButtonClick = () => {
    setP2pOrderActive(false);
    setTableActive(true);
  };

  const makeP2pOrderProps: any = {
    //properties
    handleSubmitP2pOrderButtonClick: handleSubmitP2pOrderButtonClick,
    handleCancleP2pOrderButtonClick: handleCancleP2pOrderButtonClick,
    //etc...
  };

  return (
    <Box className={classes.root} sx={{ width: '100%', py: 8 }}>
      {tableActive && <P2pTable {...p2pTableProps} />}
      {makeP2pOrderActive && <MakeP2pOrder {...makeP2pOrderProps} />}
    </Box>
  );
};

const useStyles = makeStyles({
  root: {},

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

export default P2pMain;
