import * as React from 'react';
import {
  BaseSyntheticEvent,
  ChangeEvent,
  FC,
  useEffect,
  useState,
} from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MainListItems from './listItems';

// admin component
import Dashboard from './Dashboard';
import Users from './Users';
import Tokens from './Tokens';
import Transactions from './Transactions';
import TokenDetail from './TokenDetail';

const drawerWidth: number = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop: any) => prop !== 'open',
})<AppBarProps>(({ theme, open }: { theme: any; open: any }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop: any) => prop !== 'open',
})(({ theme, open }: { theme: any; open: any }) => ({
  '& .MuiDrawer-paper': {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: 'border-box',
    ...(!open && {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const mdTheme = createTheme();

const titles = {
  0: 'Dashboard',
  1: 'Tokens',
  2: 'Users',
  3: 'Transactions',
  4: 'Token Detail',
};

function AdminMain() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const [tabStatus, setTabStatus] = useState(0); // 0 - dashboard, 1 - Tokens, 2 - Users,  3 - Transactions, 4 - TokenDetail
  const [token, setToken] = useState();

  const handleChangeStatus = (nextTab: number, nextToken: any) => {
    setTabStatus(nextTab);

    if (nextToken) {
      setToken(nextToken);
    }
  };

  const MenuProps = {
    handleChangeStatus: handleChangeStatus,
  };

  const TokensComponentProps = {
    handleChangeStatus: handleChangeStatus,
  };

  const TokenDetailComponentProps = {
    token,
    handleChangeStatus
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              {titles[tabStatus]}
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List>
            <MainListItems {...MenuProps} />
          </List>
        </Drawer>

        {/* Content */}

        {tabStatus === 0 && <Dashboard />}
        {tabStatus === 1 && <Tokens {...TokensComponentProps} />}
        {tabStatus === 2 && <Users />}
        {tabStatus === 3 && <Transactions />}
        {tabStatus === 4 && <TokenDetail {...TokenDetailComponentProps} />}
      </Box>
    </ThemeProvider>
  );
}

export default function a() {
  return <AdminMain />;
}
