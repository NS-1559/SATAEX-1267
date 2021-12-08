import { FC } from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import Image from 'next/image';
import { useTranslate } from '@app/hooks/translate';
import Link from '@components/common/Link';

const HomeFooter: FC = () => {
  const { t } = useTranslate();

  return (
    <Box sx={{ bgcolor: '#15192a', width: '100%' }}>
      <Container sx={{ position: 'relative', mt: 55 }}>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            position: 'absolute',
            top: -330,
            left: 0,
          }}
        >
          <Image
            src="/images/home/player.png"
            height={380}
            width={350}
            alt="player"
          />
        </Box>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '1px solid #666666',
            pt: 8,
            pb: 5,
          }}
        >
          <Typography
            variant="h4"
            sx={{ color: 'white', fontWeight: 'medium' }}
          >
            {t('app.home.footer-trade-now')}
          </Typography>
          <Link href="/trade">
            <Button variant="contained">
              {t('app.home.footer-get-started')}
            </Button>
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default HomeFooter;
