import { useTranslate } from '@app/hooks/translate';
import Seo from '@components/common/Seo';
import AuthWidgetCard from '@components/pages/auth/AuthWidgetCard';
import SignUpForm from '@components/pages/auth/SignUpForm';
import { Box, Container } from '@mui/material';
import { NextPage } from 'next';

const widgets = [
  {
    label: 'app.auth.robust-widget-label',
    description: 'app.auth.robust-widget-description',
    icon: '/images/widgets/robust.svg',
  },
  {
    label: 'app.auth.security-widget-label',
    description: 'app.auth.security-widget-description',
    icon: '/images/widgets/security.svg',
  },
  {
    label: 'app.auth.chat-widget-label',
    description: 'app.auth.chat-widget-description',
    icon: '/images/widgets/chat.svg',
  },
];

const SignUpPage: NextPage = () => {
  const { t } = useTranslate();

  return (
    <>
      <Seo title={t('app.sign-up.title')} />
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
            <SignUpForm />
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
              <Box key={widget.label} my={2}>
                <AuthWidgetCard
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

export default SignUpPage;
