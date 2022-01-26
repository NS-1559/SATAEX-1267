import { NextPage } from 'next';
import Seo from '@components/common/Seo';
import { useTranslate } from '@app/hooks/translate';
import { Box } from '@mui/material';
import { makeStyles, withStyles } from '@mui/styles';
import AdminLogin from '@components/pages/admin/AdminLogin';

const Login: NextPage = () => {
  const { t } = useTranslate();

  const classes = useStyles();

  return (
    <>
      <Seo title={t('app.admin-login.title')} />
      <Box className={classes.main}>
        <AdminLogin />
      </Box>
    </>
  );
};

const useStyles = makeStyles({
  main: {
    position: 'fixed',
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
    top: '0%',
    zIndex: 1,
  },
});

export default Login;
