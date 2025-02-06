import { AppProps } from 'next/app'
import Layout from '@/app/components/Layout'

// TypeScript version of the component
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}