import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { cards, Card } from '../../data/cards';
import { useLanguage } from '../../components/LanguageContext';
import SimpleHeader from '../../components/SimpleHeader';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

interface CardDetailProps {
  card: Card;
  locale: string;
}

export default function CardDetail({ card, locale }: CardDetailProps) {
  const { language, setLanguage } = useLanguage();
  const router = useRouter();

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
  const otherLangCode = locale === 'ua' ? 'en' : 'uk';

  const baseUrl = process.env.NODE_ENV === 'production' ? 'https://your-domain.com' : 'http://localhost:3000';
  const canonicalUrl = `${baseUrl}/${locale}/${card.slug}`;
  const alternateUrl = `${baseUrl}/${otherLang}/${card.slug}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Game",
    "name": card.name[currentLang],
    "description": card.event[currentLang],
    "image": `${baseUrl}${card.image}`,
    "url": canonicalUrl,
    "inLanguage": locale === 'ua' ? 'uk' : 'en',
    "isPartOf": {
      "@type": "GameSeries",
      "name": "Tiny Epic Game of Thrones"
    }
  };

  return (
    <>
      <Head>
        <title>{`${card.name[currentLang]} - Tiny Epic Game of Thrones`}</title>
        <meta name="description" content={card.event[currentLang]} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content={locale === 'ua' ? 'Ukrainian' : 'English'} />
        
        {/* Canonical URL */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Language alternates */}
        <link rel="alternate" hrefLang="uk" href={locale === 'ua' ? canonicalUrl : alternateUrl} />
        <link rel="alternate" hrefLang="en" href={locale === 'en' ? canonicalUrl : alternateUrl} />
        <link rel="alternate" hrefLang="x-default" href={`${baseUrl}/ua/${card.slug}`} />
        
        {/* Open Graph */}
        <meta property="og:title" content={`${card.name[currentLang]} - Tiny Epic Game of Thrones`} />
        <meta property="og:description" content={card.event[currentLang]} />
        <meta property="og:image" content={`${baseUrl}${card.image}`} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={locale === 'ua' ? 'uk_UA' : 'en_US'} />
        <meta property="og:locale:alternate" content={locale === 'ua' ? 'en_US' : 'uk_UA'} />
        <meta property="og:site_name" content="Tiny Epic Game of Thrones - Plot Cards" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${card.name[currentLang]} - Tiny Epic Game of Thrones`} />
        <meta name="twitter:description" content={card.event[currentLang]} />
        <meta name="twitter:image" content={`${baseUrl}${card.image}`} />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <SimpleHeader locale={locale} />

      <div className="container">
        <div className="card-detail">
          <div className="card-detail-layout">
            <div className="card-detail-image-container">
              <Image
                src={card.image}
                alt={card.name[currentLang]}
                width={400}
                height={560}
                className="card-detail-image"
                unoptimized
                priority
                sizes="(max-width: 768px) 350px, 400px"
              />
            </div>

            <div className="card-detail-content">
              <h1 className="card-detail-name">{card.name[currentLang]}</h1>
              <p className="card-detail-event">{card.event[currentLang]}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: { params: { locale: string; slug: string } }[] = [];
  
  cards.forEach((card) => {
    paths.push({
      params: { locale: 'en', slug: card.slug }
    });
    paths.push({
      params: { locale: 'ua', slug: card.slug }
    });
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const card = cards.find((c) => c.slug === params?.slug);

  if (!card || !params?.locale || !['en', 'ua'].includes(params.locale as string)) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      card,
      locale: params.locale,
    },
  };
};