import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { GetStaticProps, GetStaticPaths } from 'next';
import { cards } from '../../data/cards';

interface RedirectProps {
  slug: string;
}

export default function CardRedirect({ slug }: RedirectProps) {
  const router = useRouter();

  useEffect(() => {
    // Redirect old card URLs to new Ukrainian version
    router.replace(`/ua/${slug}`);
  }, [router, slug]);

  return null;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = cards.map((card) => ({
    params: { id: card.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const card = cards.find((c) => c.slug === params?.id);

  if (!card) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      slug: card.slug,
    },
  };
};