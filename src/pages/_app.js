import { AppHead, Footer, Header } from '../components';
import '@/styles/globals.css'


export default function App({ Component, pageProps }) {
  return (
    <>
      <AppHead />
      <Header />

      <Component {...pageProps} />

      <Footer />
    </>
  )
}
