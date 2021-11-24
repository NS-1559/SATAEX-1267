import { useTranslate } from '@app/hooks/translate';
import Head from 'next/head';
import { FC } from 'react';

interface SeoProps {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
}

const Seo: FC<SeoProps> = ({ title, description, url, image }) => {
  const { t } = useTranslate();

  return (
    <Head>
      {/* Common */}
      <title>
        {title
          ? `${title} | ${t('app.global.name')}`
          : `${t('app.home.title')} | ${t('app.global.name')}`}
      </title>
      <meta
        name="description"
        content={description || t('app.global.description')}
      />
      <meta name="image" content={image || ''} />

      {/* Open Graph */}
      <meta property="og:title" content={title || t('app.global.name')} />
      <meta
        property="og:description"
        content={description || t('app.global.description')}
      />
      <meta property="og:image" content={image || ''} />
      <meta property="og:url" content={url || ''} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || t('app.global.name')} />
      <meta
        name="twitter:description"
        content={description || t('app.global.description')}
      />
      <meta name="twitter:image" content={image || ''} />
      <meta name="twitter:url" content={url || ''} />
    </Head>
  );
};

export default Seo;
