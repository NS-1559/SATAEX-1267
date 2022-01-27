import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Transactions from './Transactions';
import { useTheme } from '@mui/material/styles';

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export default function Token() {
  return (
    <Box component="main">
      <Toolbar />
      <Container sx={{ mt: 4, mb: 4 }} style={{ width: '1500px' }}>
        Tokens
      </Container>
    </Box>
  );
}
