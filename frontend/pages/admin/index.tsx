import { NextPage } from 'next';
import Seo from '@components/common/Seo';
import { useTranslate } from '@app/hooks/translate';
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import AdminMain from '@components/pages/admin/Dashboard/AdminMain';
import Cookies from 'js-cookie';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const useStyles = makeStyles({
  main: {
    position: 'fixed',
    backgroundColor: '#0c1a32',
    height: '100%',
    width: '100%',
    top: '0%',
    zIndex: 1,
  },
});

const Admin: NextPage = () => {
  const { t } = useTranslate();
  const router = useRouter();
  const token = Cookies.get('token');

  useEffect(() => {
    if (!token) {
      router.push('admin/login');
    }
  }, []);

  const classes = useStyles();

  return (
    <>
      <Seo title={t('app.admin.title')} />
      <Box className={classes.main}>
        <AdminMain />
      </Box>
    </>
  );
};

export default Admin;
