import '../styles/globals.css'
import '../styles/menu.module.css'
import '../styles/schedule.module.css'
import Layout from '../components/layout'

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
