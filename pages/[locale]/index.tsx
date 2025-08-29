import { useState, useMemo, useEffect } from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import CardComponent from '../../components/CardComponent';
import Header from '../../components/Header';
import { cards } from '../../data/cards';
import { useLanguage } from '../../components/LanguageContext';

interface HomeProps {
  locale: string;
}

export default function Home({ locale }: HomeProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const { language, setLanguage } = useLanguage();

  // Set language based on URL locale
  useEffect(() => {
    if (locale === 'en' && language !== 'en') {
      setLanguage('en');
    } else if (locale === 'ua' && language !== 'uk') {
      setLanguage('uk');
    }
  }, [locale, language, setLanguage]);

  const currentLang = locale === 'ua' ? 'uk' : 'en';
  const otherLang = locale === 'ua' ? 'en' : 'ua';

  const filteredCards = useMemo(() => {
    if (!searchQuery.trim()) {
      return cards;
    }

    const query = searchQuery.toLowerCase().trim();
    return cards.filter(card => 
      card.name.en.toLowerCase().includes(query) ||
      card.name.uk.toLowerCase().includes(query) ||
      card.event.en.toLowerCase().includes(query) ||
      card.event.uk.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const baseUrl = process.env.NODE_ENV === 'production' ? 'https://your-domain.com' : 'http://localhost:3000';
  const canonicalUrl = `${baseUrl}/${locale}/`;
  const alternateUrl = `${baseUrl}/${otherLang}/`;

  const titles = {
    en: 'Tiny Epic Game of Thrones - Plot Cards',
    uk: 'Tiny Epic Гра Престолів - Карти Подій'
  };

  const descriptions = {
    en: 'Browse and search all 52 Tiny Epic Game of Thrones plot cards. Complete card database with English and Ukrainian translations.',
    uk: 'Переглядайте та шукайте всі 52 карти подій Tiny Epic Game of Thrones. Повна база карт з англійськими та українськими перекладами.'
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": titles[currentLang],
    "description": descriptions[currentLang],
    "url": canonicalUrl,
    "inLanguage": locale === 'ua' ? 'uk' : 'en',
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${canonicalUrl}?search={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <Head>
        <title>{titles[currentLang]}</title>
        <meta name="description" content={descriptions[currentLang]} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content={locale === 'ua' ? 'Ukrainian' : 'English'} />
        
        {/* Canonical URL */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Language alternates */}
        <link rel="alternate" hrefLang="uk" href={locale === 'ua' ? canonicalUrl : alternateUrl} />
        <link rel="alternate" hrefLang="en" href={locale === 'en' ? canonicalUrl : alternateUrl} />
        <link rel="alternate" hrefLang="x-default" href={`${baseUrl}/ua/`} />
        
        {/* Open Graph */}
        <meta property="og:title" content={titles[currentLang]} />
        <meta property="og:description" content={descriptions[currentLang]} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={locale === 'ua' ? 'uk_UA' : 'en_US'} />
        <meta property="og:locale:alternate" content={locale === 'ua' ? 'en_US' : 'uk_UA'} />
        <meta property="og:site_name" content="Tiny Epic Game of Thrones - Plot Cards" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={titles[currentLang]} />
        <meta name="twitter:description" content={descriptions[currentLang]} />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <Header 
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        locale={locale}
      />

      <main className="container">
        <div className="card-grid">
          {filteredCards.map((card) => (
            <CardComponent key={card.id} card={card} locale={locale} />
          ))}
        </div>

        {filteredCards.length === 0 && (
          <div style={{ textAlign: 'center', padding: '4rem 0', color: '#666' }}>
            {currentLang === 'uk' ? 'Карти не знайдено' : 'No cards found'}
          </div>
        )}
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { locale: 'en' } },
      { params: { locale: 'ua' } }
    ],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params?.locale || !['en', 'ua'].includes(params.locale as string)) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      locale: params.locale,
    },
  };
};