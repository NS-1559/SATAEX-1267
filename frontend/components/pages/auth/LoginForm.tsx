import { useAppDispatch } from '@app/hooks/redux';
import { useTranslate } from '@app/hooks/translate';
import { loginThunk } from '@app/store/auth/sliceThunks';
import Link from '@components/common/Link';
import { PASSWORD_REGEX } from '@constants/regex';
import { Box, Button, Typography } from '@mui/material';
import { useFormik } from 'formik';
import { FC } from 'react';
import * as yup from 'yup';
import PrivateTextField from './PrivateTextField';
import PubicTextField from './PubicTextField';

interface FormValue {
  email: string;
  password: string;
}

const LoginForm: FC = () => {
  const { t } = useTranslate();
  const dispatch = useAppDispatch();

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email(t('app.auth.invalid-email'))
      .required(t('app.auth.required')),
    password: yup
      .string()
      .matches(PASSWORD_REGEX, t('app.auth.invalid-password'))
      .required(t('app.auth.required')),
  });

  const formik = useFormik<FormValue>({
    initialValues: { email: '', password: '' },
    validationSchema,
    onSubmit: (formValues) => {
      dispatch(loginThunk(formValues));
    },
  });

  return (
    <Box component="form" sx={{ width: '100%' }} onSubmit={formik.handleSubmit}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
        {t('app.login.header')}
      </Typography>
      <Typography variant="subtitle1" sx={{ mb: 4, fontWeight: 'medium' }}>
        {t('app.login.subheader')}
      </Typography>
      <Box mb={3}>
        <PubicTextField
          name="email"
          label={t('app.auth.email')}
          onChange={formik.handleChange}
          error={
            formik.touched.email && formik.errors.email
              ? formik.errors.email
              : ''
          }
        />
      </Box>
      <Box mb={2}>
        <PrivateTextField
          name="password"
          label={t('app.auth.password')}
          onChange={formik.handleChange}
          error={
            formik.touched.password && formik.errors.password
              ? formik.errors.password
              : ''
          }
        />
      </Box>
      <Box sx={{ mb: 2, display: 'flex', justifyContent: 'flex-end' }}>
        <Link href="/auth/forgot-password">
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: 'medium', width: 'fit-content' }}
            color="primary"
          >
            {t('app.auth.forgot')}
          </Typography>
        </Link>
      </Box>
      <Box mb={4}>
        <Button type="submit" variant="contained" size="large" fullWidth>
          {t('app.login.submit-button')}
        </Button>
      </Box>
      <Box sx={{ display: 'flex' }}>
        <Typography
          variant="subtitle1"
          color="gray"
          sx={{ fontWeight: 'medium' }}
        >
          {t('app.login.sign-up-message')}
        </Typography>
        <Link href="/auth/sign-up">
          <Typography
            variant="subtitle1"
            color="primary"
            sx={{ fontWeight: 'bold', ml: 1 }}
          >
            {t('app.login.sign-up-link')}
          </Typography>
        </Link>
      </Box>
    </Box>
  );
};

export default LoginForm;
