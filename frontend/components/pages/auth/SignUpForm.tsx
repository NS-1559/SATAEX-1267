import { useTranslate } from '@app/hooks/translate';
import Link from '@components/common/Link';
import { PASSWORD_REGEX } from '@constants/regex';
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
} from '@mui/material';
import { useFormik } from 'formik';
import { FC } from 'react';
import * as yup from 'yup';
import PrivateTextField from './PrivateTextField';
import PubicTextField from './PubicTextField';

interface FormValue {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  agree: boolean;
}

const SignUpForm: FC = () => {
  const { t } = useTranslate();

  const validationSchema = yup.object().shape({
    firstName: yup.string().required(t('app.auth.required')),
    lastName: yup.string().required(t('app.auth.required')),
    email: yup
      .string()
      .email(t('app.auth.invalid-email'))
      .required(t('app.auth.required')),
    password: yup
      .string()
      .matches(PASSWORD_REGEX, t('app.auth.invalid-password'))
      .required(t('app.auth.required')),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], t('app.auth.passwords-not-match'))
      .required(t('app.auth.required')),
    agree: yup.boolean().isTrue(),
  });

  const formik = useFormik<FormValue>({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      agree: false,
    },
    validationSchema,
    validateOnChange: true,
    onSubmit: (formValues) => {
      console.log(formValues);
    },
  });

  return (
    <Box component="form" sx={{ width: '100%' }} onSubmit={formik.handleSubmit}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
        {t('app.sign-up.header')}
      </Typography>
      <Typography variant="subtitle1" sx={{ mb: 4, fontWeight: 'medium' }}>
        {t('app.sign-up.subheader')}
      </Typography>
      <Box mb={3}>
        <PubicTextField
          name="firstName"
          label={t('app.auth.first-name')}
          onChange={formik.handleChange}
          error={
            formik.touched.firstName && formik.errors.firstName
              ? formik.errors.firstName
              : ''
          }
        />
      </Box>
      <Box mb={3}>
        <PubicTextField
          name="lastName"
          label={t('app.auth.last-name')}
          onChange={formik.handleChange}
          error={
            formik.touched.lastName && formik.errors.lastName
              ? formik.errors.lastName
              : ''
          }
        />
      </Box>
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
      <Box mb={3}>
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
      <Box mb={3}>
        <PrivateTextField
          name="confirmPassword"
          label={t('app.auth.confirm-password')}
          onChange={formik.handleChange}
          error={
            formik.touched.confirmPassword && formik.errors.confirmPassword
              ? formik.errors.confirmPassword
              : ''
          }
        />
      </Box>
      <Box mb={4} sx={{ display: 'flex', alignItems: 'end' }}>
        <FormControlLabel
          label={
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 'normal', cursor: 'pointer' }}
            >
              {t('app.sign-up.checkbox-message')}
            </Typography>
          }
          name="agree"
          control={<Checkbox />}
          onChange={formik.handleChange}
        />
      </Box>
      <Box mb={4}>
        <Button
          type="submit"
          variant="contained"
          size="large"
          fullWidth
          color={!formik.values.agree ? 'inherit' : 'primary'}
          disabled={!formik.values.agree}
        >
          {t('app.sign-up.submit-button')}
        </Button>
      </Box>
      <Box sx={{ display: 'flex' }}>
        <Typography
          variant="subtitle1"
          color="gray"
          sx={{ fontWeight: 'medium' }}
        >
          {t('app.sign-up.sign-up-message')}
        </Typography>
        <Link href="/auth/sign-up">
          <Typography
            variant="subtitle1"
            color="primary"
            sx={{ fontWeight: 'bold', ml: 1 }}
          >
            {t('app.sign-up.sign-up-link')}
          </Typography>
        </Link>
      </Box>
      <Box sx={{ display: 'flex' }}>
        <Typography
          variant="subtitle1"
          color="gray"
          sx={{ fontWeight: 'medium' }}
        >
          {t('app.sign-up.login-message')}
        </Typography>
        <Link href="/auth/login">
          <Typography
            variant="subtitle1"
            color="primary"
            sx={{ fontWeight: 'bold', ml: 1 }}
          >
            {t('app.sign-up.login-link')}
          </Typography>
        </Link>
      </Box>
    </Box>
  );
};

export default SignUpForm;
