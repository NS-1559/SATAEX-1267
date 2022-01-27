import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import AssignmentIcon from '@mui/icons-material/Assignment';
import TokenIcon from '@mui/icons-material/Token';

export default function mainListItems(props: any) {
  const { handleChangeStatus } = props;
  return (
    <div>
      <ListItem button onClick={() => handleChangeStatus(0)}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem button onClick={() => handleChangeStatus(1)}>
        <ListItemIcon>
          <TokenIcon />
        </ListItemIcon>
        <ListItemText primary="Tokens" />
      </ListItem>
      <ListItem button onClick={() => handleChangeStatus(2)}>
        <ListItemIcon>
          <PersonIcon />
        </ListItemIcon>
        <ListItemText primary="Users" />
      </ListItem>
      <ListItem button onClick={() => handleChangeStatus(3)}>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Transactions" />
      </ListItem>

      <div style={{ height: '2000px' }}></div>
    </div>
  );
}
