import { NextPage } from 'next';
import Seo from '@components/common/Seo';
import { useTranslate } from '@app/hooks/translate';
import { Box } from '@mui/material';
import { makeStyles, withStyles } from '@mui/styles';
import Dashboard from '@components/pages/admin/Dashboard/Dashboard';
const Admin: NextPage = () => {
  const { t } = useTranslate();

  const classes = useStyles();

  return (
    <>
      <Seo title={t('app.admin.title')} />
      <Box className={classes.main}>
        <Dashboard />
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

export default Admin;
