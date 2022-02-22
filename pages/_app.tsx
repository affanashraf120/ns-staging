import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Honeybadger from "@honeybadger-io/js";
import PageLayout from '../components/layout/PageLayout';

Honeybadger.configure({
  apiKey: process.env.HONEYBADGER_API_KEY,
  revision: process.env.HONEYBADGER_REVISION,
  environment: process.env.NODE_ENV,
  projectRoot: 'webpack://_N_E/./',

  reportData: true,
})

if (typeof window !== 'undefined') {
  // @ts-ignore
  window.Honeybadger = Honeybadger
}

function MyApp({ Component, pageProps }: AppProps) {
  return <PageLayout>
    <Component {...pageProps} />
  </PageLayout>
}

export default MyApp
