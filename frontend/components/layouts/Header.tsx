import { useTranslate } from '@app/hooks/translate';
import logo from '@assets/images/logo.svg';
import Link from '@components/common/Link';
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { nanoid } from 'nanoid';
import Image from 'next/image';
import { FC } from 'react';

const useStyles = makeStyles((theme) => ({
  navLink: {
    padding: theme.spacing(2, 1.5),
    color: 'white',
    transitionDuration: '0.2s',
    textTransform: 'capitalize',

    '&:hover': {
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.grey[800],
    },
  },
  actionButton: {
    borderLeft: `1px solid ${theme.palette.grey[800]}`,
    padding: theme.spacing(2),
    cursor: 'pointer',
  },
  actionButtonText: {
    fontSize: 14,
    fontWeight: 600,
  },
  actionButtonPrimary: {
    color: 'black',
    backgroundColor: theme.palette.primary.main,

    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      color: 'black',
    },
  },
}));

const Header: FC = () => {
  const { t, locale } = useTranslate();
  const classes = useStyles();

  const navLinks = [
    {
      href: '/markets',
      label: 'app.header.markets',
    },
    {
      href: '/buy-crypto',
      label: 'app.header.buy-crypto',
    },
    {
      href: '/trade',
      label: 'app.header.trade',
    },
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        bgcolor: 'grey.900',
      }}
    >
      <Box width={120} height={24} sx={{ ml: 2 }}>
        <Image src={logo} width={100} height={24} alt="logo" />
      </Box>
      <Box sx={{ display: 'flex', ml: 2, flexGrow: 1 }}>
        {navLinks.map(({ href, label }) => (
          <Link key={nanoid(12)} href={href} className={classes.navLink}>
            <Typography
              sx={{
                fontSize: 14,
                fontWeight: 600,
              }}
            >
              {t(label)}
            </Typography>
          </Link>
        ))}
      </Box>
      <Box sx={{ display: 'flex' }}>
        <Link
          href="/login"
          className={`${classes.navLink} ${classes.actionButton}`}
        >
          <Typography className={classes.actionButtonText}>
            {t('app.header.logIn')}
          </Typography>
        </Link>
        <Link
          href="/login"
          className={`${classes.navLink} ${classes.actionButton} ${classes.actionButtonPrimary}`}
        >
          <Typography className={classes.actionButtonText}>
            {t('app.header.signUp')}
          </Typography>
        </Link>
        <Typography
          className={`${classes.navLink} ${classes.actionButton} ${classes.actionButtonText}`}
        >
          {t(`app.header.${locale}`)}
        </Typography>
      </Box>
    </Box>
  );
};

export default Header;
