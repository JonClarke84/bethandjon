import Head from "next/head"
import styles from "./pageLayout.module.css"

export default function PageLayout({ children, title, description }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.contentContainer}>
          <div className={styles.content}>
            {children}
          </div>
        </div>
      </main>
    </div>
  )
}