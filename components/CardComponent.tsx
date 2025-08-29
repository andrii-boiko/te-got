import Image from 'next/image';
import Link from 'next/link';
import { Card } from '../data/cards';
import { useLanguage } from './LanguageContext';

interface CardComponentProps {
  card: Card;
  locale: string;
}

export default function CardComponent({ card, locale }: CardComponentProps) {
  const { language } = useLanguage();
  const currentLang = locale === 'ua' ? 'uk' : 'en';

  return (
    <div className="card">
      <Link href={`/${locale}/${card.slug}`}>
        <Image
          src={card.image}
          alt={card.name[currentLang]}
          width={300}
          height={420}
          className="card-image"
          unoptimized
          sizes="(max-width: 768px) 50vw, 25vw"
        />
      </Link>
      <div className="card-content">
        <Link href={`/${locale}/${card.slug}`} className="card-link">
          <h3 className="card-name">{card.name[currentLang]}</h3>
          <p className="card-event">{card.event[currentLang]}</p>
        </Link>
      </div>
    </div>
  );
}