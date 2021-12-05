import { useTranslate } from '@app/hooks/translate';
import Seo from '@components/common/Seo';
import WidgetCard from '@components/common/WidgetCard';
import LoginForm from '@components/pages/auth/LoginForm';
import { Box, Container } from '@mui/material';
import { NextPage } from 'next';

const widgets = [
  {
    label: 'app.auth.rewards-widget-label',
    description: 'app.auth.rewards-widget-description',
    icon: '/images/widgets/rewards.svg',
  },
];

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
          <Box
            sx={{
              width: '50%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {widgets.map((widget) => (
              <Box key={widget.label} my={2} sx={{ width: '370px' }}>
                <WidgetCard
                  label={t(widget.label)}
                  description={t(widget.description)}
                  icon={widget.icon}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default LoginPage;
