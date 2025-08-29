import Link from 'next/link';
import { useLanguage } from './LanguageContext';
import { useRouter } from 'next/router';

interface SimpleHeaderProps {
  locale: string;
}

export default function SimpleHeader({ locale }: SimpleHeaderProps) {
  const { language, setLanguage } = useLanguage();
  const router = useRouter();

  const titles = {
    en: 'Tiny Epic Game of Thrones - Plot Cards',
    uk: 'Tiny Epic Гра Престолів - Карти Подій'
  };

  const currentLang = locale === 'ua' ? 'uk' : 'en';

  const handleLanguageSwitch = (newLang: string) => {
    const targetLocale = newLang === 'uk' ? 'ua' : 'en';
    const { slug } = router.query;
    setLanguage(newLang as 'en' | 'uk');
    
    if (slug) {
      router.push(`/${targetLocale}/${slug}`);
    } else {
      router.push(`/${targetLocale}/`);
    }
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link href={`/${locale}/`}>
            <h1 className="title">{titles[currentLang]}</h1>
          </Link>
          <div className="controls">
            <div className="lang-toggle">
              <button
                className={`lang-button ${locale === 'ua' ? 'active' : ''}`}
                onClick={() => handleLanguageSwitch('uk')}
              >
                🇺🇦
              </button>
              <button
                className={`lang-button ${locale === 'en' ? 'active' : ''}`}
                onClick={() => handleLanguageSwitch('en')}
              >
                🇺🇸
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}