import { AppProps } from 'next/app';
import { LanguageProvider } from '../components/LanguageContext';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <Component {...pageProps} />
    </LanguageProvider>
  );
}