import {
  BaseSyntheticEvent,
  ChangeEvent,
  FC,
  SyntheticEvent,
  useEffect,
  useState,
} from 'react';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import {
  Box,
  Button,
  Tabs,
  Tab,
  Container,
  Typography,
  Slider,
} from '@mui/material';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
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

const OrderTable: FC = () => {
  const { t } = useTranslate();
  const theme = useTheme();
  const classes = useStyles();
  const [mode, setMode] = useState(0);

  const columns: GridColDef[] = [
    { field: 'trading_pair', headerName: 'Trading Pair', width: 150 },
    { field: 'time', headerName: 'Time', width: 120 },
    { field: 'direction', headerName: 'Direction', width: 120 },
    {
      field: 'price',
      headerName: 'Price',
      type: 'number',
      width: 100,
    },
    {
      field: 'filled/quantity',
      headerName: 'Filled / Quantity',
      width: 200,
      // description: 'This column has a value getter and is not sortable.',
      // sortable: false,
      // width: 160,
      // valueGetter: (params: GridValueGetterParams) =>
      //   `${params.getValue(params.id, 'firstName') || ''} ${
      //     params.getValue(params.id, 'lastName') || ''
      //   }`,
    },
    {
      field: 'amount',
      headerName: 'Amount',
      type: 'number',
      width: 200,
    },
    {
      field: 'action',
      headerName: 'Action',
      type: 'number',
      width: 200,
    },
  ];

  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];

  const handleChange = (event: React.SyntheticEvent, newMode: number) => {
    setMode(newMode);
  };
  const modeList = ['Limit Order', 'Order History'];

  return (
    <Box
      sx={{
        backgroundColor: '#1e1f20',
        position: 'absolute',
        minWidth: '80rem',
        right: '7rem',
        bottom: '-22rem',
      }}
    >
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
          <Tab label="Limit Order" {...a11yProps(0)} />
          <Tab label="Order History" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={mode} index={0}>
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
          />
        </div>
      </TabPanel>
      <TabPanel value={mode} index={1}></TabPanel>
    </Box>
  );
};

export default OrderTable;
