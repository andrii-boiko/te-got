import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to Ukrainian version by default
    router.replace('/ua/');
  }, [router]);

  // This component won't render since we redirect immediately
  return null;
}