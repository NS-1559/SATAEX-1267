import { NextPage } from 'next';
import P2pMain from '@components/pages/p2p/p2pMain';
import Seo from '@components/common/Seo';
import { useTranslate } from '@app/hooks/translate';
import { Box, Container, FormLabel, TextField } from '@mui/material';

import { makeStyles, withStyles } from '@mui/styles';

const P2P: NextPage = () => {
  const { t } = useTranslate();
  const classes = useStyles();

  return (
    <>
      <Seo title={t('app.p2p.title')} />
      <Box className={classes.main}>
        <P2pMain />
      </Box>
    </>
  );
};

const useStyles = makeStyles({
  main: {
    backgroundColor: '#323232',
    color: 'white',
    overflow: 'hidden',
    display: 'flex',
    minHeight: '500px',
  },
});

export default P2P;
