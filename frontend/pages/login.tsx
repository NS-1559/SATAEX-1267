import { useTranslate } from '@app/hooks/translate';
import Seo from '@components/common/Seo';
import LoginForm from '@components/pages/auth/LoginForm';
import { Box, Container } from '@mui/material';
import { NextPage } from 'next';

const LoginPage: NextPage = () => {
  const { t } = useTranslate();

  return (
    <>
      <Seo title={t('app.login.title')} />
      <Container
        sx={{
          pt: 10,
          pb: 30,
        }}
      >
        <Box
          sx={{
            width: '100%',
            display: 'flex',
          }}
        >
          <Box
            sx={{
              width: '50%',
              pr: 5,
            }}
          >
            <LoginForm />
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default LoginPage;
