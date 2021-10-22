import en from '@translations/en.json';
import jp from '@translations/jp.json';
import vi from '@translations/vi.json';
import { useRouter } from 'next/router';

interface Language {
  [key: string]: string;
}

export const useTranslate = () => {
  const router = useRouter();
  const { locale } = router;
  let language: Language = en;
  if (locale === 'vi') language = vi;
  if (locale === 'jp') language = jp;

  function t(key: string) {
    return language[key];
  }

  return t;
};
