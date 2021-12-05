import { FC } from 'react';
import { Box, Container, Paper, Typography } from '@mui/material';
import { useTranslate } from '@app/hooks/translate';
import Image from 'next/image';

const TradeBanner: FC = () => {
  const { t } = useTranslate();

  return (
    <Container sx={{ mt: 40, mb: 5 }}>
      <Paper
        sx={{
          backgroundColor: 'primary.main',
          display: 'flex',
          borderRadius: 3,
        }}
      >
        <Box sx={{ width: '40%', px: 5, py: 14, color: '#000' }}>
          <Typography variant="h4" sx={{ fontWeight: 'medium', mb: 4 }}>
            {t('app.home.trade-banner-title')}
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 'light' }}>
            {t('app.home.trade-banner-description')}
          </Typography>
        </Box>
        <Box sx={{ width: '60%', display: 'flex', justifyContent: 'center' }}>
          <Box sx={{ position: 'relative', width: '349px' }}>
            <Box sx={{ position: 'absolute', bottom: -8 }}>
              <Image
                src="/images/home/app.png"
                alt="application"
                width={349}
                height={580}
              />
            </Box>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default TradeBanner;
