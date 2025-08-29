import { useLanguage } from './LanguageContext';
import { useRouter } from 'next/router';
import Link from 'next/link';

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  locale: string;
}

export default function Header({ searchQuery, onSearchChange, locale }: HeaderProps) {
  const { language, setLanguage } = useLanguage();
  const router = useRouter();

  const titles = {
    en: 'Tiny Epic Game of Thrones - Plot Cards',
    uk: 'Tiny Epic Гра Престолів - Карти Подій'
  };

  const currentLang = locale === 'ua' ? 'uk' : 'en';

  const handleLanguageSwitch = (newLang: string) => {
    const targetLocale = newLang === 'uk' ? 'ua' : 'en';
    setLanguage(newLang as 'en' | 'uk');
    router.push(`/${targetLocale}/`);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link href={`/${locale}/`}>
            <h1 className="title">{titles[currentLang]}</h1>
          </Link>
          <div className="controls">
            <input
              type="text"
              placeholder={currentLang === 'uk' ? 'Пошук карт...' : 'Search cards...'}
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="search-input"
            />
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