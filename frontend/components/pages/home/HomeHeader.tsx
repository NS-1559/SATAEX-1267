import { Box, Container, Typography, Button } from '@mui/material';
import { FC } from 'react';
import { useTranslate } from '@app/hooks/translate';
import Link from '@components/common/Link';
import Cookies from 'js-cookie';

const HomeHeader: FC = () => {
  const { t } = useTranslate();
  const token = Cookies.get('token');

  return (
    <Box sx={{ width: '100%', backgroundColor: 'background.paper' }}>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: 8,
          pb: 10,
        }}
      >
        <Typography
          variant="h3"
          sx={{ fontWeight: 'bold', textTransform: 'capitalize', mb: 3 }}
        >
          {t('app.home.header-title')}
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            fontSize: 20,
            maxWidth: '50%',
            textAlign: 'center',
            lineHeight: 1.5,
            color: 'text.secondary',
            mb: 4,
          }}
        >
          {t('app.home.header-description')}
        </Typography>
        {!token && (
          <Link href="/auth/sign-up">
            <Button variant="contained" size="large">
              {t('app.home.header-sign-up-button')}
            </Button>
          </Link>
        )}
      </Container>
    </Box>
  );
};

export default HomeHeader;
