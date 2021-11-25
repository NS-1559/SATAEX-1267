import { Box, Paper, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import Image from 'next/image';
import { FC } from 'react';

interface AuthWidgetCardProps {
  label: string;
  description: string;
  icon: string;
}

const AuthWidgetCard: FC<AuthWidgetCardProps> = ({
  label,
  description,
  icon,
}) => {
  return (
    <Paper
      elevation={0}
      sx={{
        display: 'flex',
        background: grey['100'],
        width: '370px',
        p: 2,
        pr: 3,
      }}
    >
      <Box sx={{ mr: 2 }}>
        <Image src={icon} alt="widget" width={100} height={100} />
      </Box>
      <Box sx={{ flex: 1 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
          {label}
        </Typography>
        <Typography variant="body2" sx={{ fontWeight: 'light' }}>
          {description}
        </Typography>
      </Box>
    </Paper>
  );
};

export default AuthWidgetCard;
