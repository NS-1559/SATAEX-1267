import { useTranslate } from '@app/hooks/translate';
import logo from '@assets/images/logo.svg';
import Fade from '@components/common/Fade';
import Link from '@components/common/Link';
import { Backdrop, Box, Modal, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { nanoid } from 'nanoid';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';

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

const languages = [
  {
    label: 'app.header.english',
    locale: 'en',
  },
  {
    label: 'app.header.vietnamese',
    locale: 'vi',
  },
  {
    label: 'app.header.japanese',
    locale: 'jp',
  },
];

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
  languageButton: {
    transitionDuration: '0.2s',

    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
}));

const Header: FC = () => {
  const router = useRouter();
  const { pathname, asPath, query } = router;
  const { t, locale } = useTranslate();
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function onSelectLanguage(l: string) {
    router.push({ pathname, query }, asPath, { locale: l });
    handleClose();
  }

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          bgcolor: 'grey.900',
        }}
      >
        <Box width={104} height={20} sx={{ ml: 2 }}>
          <Link href="/">
            <Image src={logo} width={104} height={20} alt="logo" />
          </Link>
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
            href="/sign-up"
            className={`${classes.navLink} ${classes.actionButton} ${classes.actionButtonPrimary}`}
          >
            <Typography className={classes.actionButtonText}>
              {t('app.header.signUp')}
            </Typography>
          </Link>
          <Typography
            className={`${classes.navLink} ${classes.actionButton} ${classes.actionButtonText}`}
            onClick={handleOpen}
          >
            {t(`app.header.${locale}`)}
          </Typography>
        </Box>
      </Box>

      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 200,
        }}
      >
        <Fade in={open}>
          <Paper
            elevation={4}
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 800,
              p: 6,
            }}
          >
            <Typography variant="h6" component="h2">
              {t('app.header.select-language')}
            </Typography>
            <Box
              sx={{ width: '100%', display: 'flex', flexWrap: 'wrap', mt: 6 }}
            >
              {languages.map((lang) => (
                <Box key={lang.label} sx={{ width: '33.33%' }}>
                  <Typography
                    variant="body1"
                    component="span"
                    sx={{ userSelect: 'none', cursor: 'pointer' }}
                    className={classes.languageButton}
                    onClick={() => onSelectLanguage(lang.locale)}
                  >
                    {t(lang.label)}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Paper>
        </Fade>
      </Modal>
    </>
  );
};

export default Header;
