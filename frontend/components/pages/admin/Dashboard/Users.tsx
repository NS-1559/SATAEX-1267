import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import Grid from '@mui/material/Grid';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ChangeEvent, FC, useMemo, useState, useEffect } from 'react';
import axios from 'axios';



const StyledTableCell = styled(TableCell)(({ theme }: { theme: any }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }: { theme: any }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  id: string,
  name: string,
  phone: string,
  address: string,
  email: string,
  balance: number,
) {
  return { id, name, phone, address, email, balance };
}

const rows = [
  createData(
    '23234',
    'Kaneki',
    '0289333333',
    'Vietnam',
    'Kaneki12@gmail.com',
    20000,
  ),
  createData(
    '56565',
    'Duy Anh',
    '0367787332',
    'Cambodia',
    'duyanh2@gmail.com',
    1000,
  ),
  createData(
    '98494',
    'Adam Lin',
    '0978836633',
    'China',
    'adam2@gmail.com',
    300,
  ),
  createData(
    '00077',
    'Bodvar',
    '0286677233',
    'Japan',
    'bodvar@gmail.com',
    50000,
  ),
  createData(
    '00233',
    'Omicron',
    '90287723992',
    'Canada',
    'omicrons2@gmail.com',
    10000,
  ),
];

export default function Users() {
  const  [users, setUsers] = useState(rows);

  useEffect(() => {
      axios.get('http://127.0.0.1:8000/api/users')
          .then((response: any) => {
              const data = response.data;
              setUsers(data);
          });
    },[]);

  console.log(users);

  return (
    <Grid item xs={8} mt={10} ml={2}>
      <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="left">Phone</StyledTableCell>
              <StyledTableCell align="left">Address</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((row:any) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell component="th" scope="row">
                  {row.id}
                </StyledTableCell>
                <StyledTableCell align="left">{row.first_name + row.last_name}</StyledTableCell>
                <StyledTableCell align="left">{row.phone_number}</StyledTableCell>
                <StyledTableCell align="left">{row.address}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Grid>
  );
}
