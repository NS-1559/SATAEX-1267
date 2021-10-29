import { useTranslate } from '@app/hooks/translate';
import facebook from '@assets/images/facebook.svg';
import instagram from '@assets/images/instagram.svg';
import linkedin from '@assets/images/linkedin.svg';
import logo from '@assets/images/logo.svg';
import medium from '@assets/images/medium.svg';
import reddit from '@assets/images/reddit.svg';
import telegram from '@assets/images/telegram.svg';
import tiktok from '@assets/images/tiktok.svg';
import twitter from '@assets/images/twitter.svg';
import youtube from '@assets/images/youtube.svg';
import Link from '@components/common/Link';
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Image from 'next/image';
import { FC } from 'react';

const useStyles = makeStyles((theme) => ({
  footerLinkTitle: {
    color: theme.palette.text.primary,
  },
  footerLink: {
    color: 'white',
    transitionDuration: '0.2s',

    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
}));

const Footer: FC = () => {
  const { t } = useTranslate();
  const classes = useStyles();

  const links = [
    {
      title: 'app.footer.products',
      children: [
        {
          href: '/#',
          label: 'app.footer.spot',
        },
        {
          href: '/#',
          label: 'app.footer.inverse-perpetual',
        },
        {
          href: '/#',
          label: 'app.footer.usdt-perpetual',
        },
        {
          href: '/#',
          label: 'app.footer.inverse-futures',
        },
      ],
    },
    {
      title: 'app.footer.services',
      children: [
        {
          href: '/#',
          label: 'app.footer.buy-crypto',
        },
        {
          href: '/#',
          label: 'app.footer.markets',
        },
        {
          href: '/#',
          label: 'app.footer.trading-fee',
        },
        {
          href: '/#',
          label: 'app.footer.api',
        },
      ],
    },
    {
      title: 'app.footer.support',
      children: [
        {
          href: '/#',
          label: 'app.footer.sataex-learn',
        },
        {
          href: '/#',
          label: 'app.footer.help-center',
        },
      ],
    },
    {
      title: 'app.footer.about',
      children: [
        {
          href: '/#',
          label: 'app.footer.about-sataex',
        },
        {
          href: '/#',
          label: 'app.footer.blog',
        },
      ],
    },
  ];

  const socialLinks = [
    {
      href: 'https://facebook.com',
      icon: facebook,
    },
    {
      href: 'https://twitter.com',
      icon: twitter,
    },
    {
      href: 'https://instagram.com',
      icon: instagram,
    },
    {
      href: 'https://youtube.com',
      icon: youtube,
    },
    {
      href: 'https://medium.com',
      icon: medium,
    },
    {
      href: 'https://telegram.com',
      icon: telegram,
    },
    {
      href: 'https://linkedin.com',
      icon: linkedin,
    },
    {
      href: 'https://reddit.com',
      icon: reddit,
    },
    {
      href: 'https://tiktok.com',
      icon: tiktok,
    },
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        p: 15,
        bgcolor: '#15192a',
      }}
    >
      <Box sx={{ display: 'flex' }}>
        {links.map(({ title, children }) => (
          <Box key={title} sx={{ mr: 10 }}>
            <Typography
              variant="h6"
              sx={{
                textTransform: 'capitalize',
                fontSize: 16,
              }}
              className={classes.footerLinkTitle}
            >
              {t(title)}
            </Typography>
            <Box sx={{ mt: 2 }}>
              {children.map(({ href, label }) => (
                <Link key={label} href={href}>
                  <Typography
                    variant="body1"
                    className={classes.footerLink}
                    sx={{
                      textTransform: 'capitalize',
                      lineHeight: 2.5,
                      fontSize: 14,
                    }}
                  >
                    {t(label)}
                  </Typography>
                </Link>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
      <Box>
        <Image src={logo} width={200} height={40} alt="logo" />
        <Typography
          variant="body2"
          sx={{
            color: 'white',
            mt: 2,
          }}
        >
          {t('app.footer.copyright')}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: 'white',
            mt: 2,
          }}
        >
          <Link href="/#" className={classes.footerLink}>
            {t('app.footer.terms-of-service')}
          </Link>
          {' | '}
          <Link href="/#" className={classes.footerLink}>
            {t('app.footer.privacy-terms')}
          </Link>
        </Typography>
        <Box sx={{ mt: 3, display: 'flex', flexWrap: 'wrap' }}>
          {socialLinks.map(({ href, icon }) => (
            <Box key={href} sx={{ width: '20%', mb: 1 }}>
              <Link href={href} target="__blank">
                <Image src={icon} width={24} height={24} alt="social" />
              </Link>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
