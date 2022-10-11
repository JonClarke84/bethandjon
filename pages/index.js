import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { getSortedSections } from '../lib/sections'
import Section from '../components/section'

export async function getStaticProps() {
  const allSections = getSortedSections()
  return {
    props: {
      allSections
    }
  }
}

export default function Home({ allSections }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Beth and Jon's not-wedding party</title>
        <meta name="description" content="Beth and Jon's not-wedding party" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.home}>
          <Image
            className={styles.image}
            src="/whitstable.jpg"
            alt="Beth and Jon"
            layout='fill'
            sizes='100vh'
          />
          <div className={styles.text}>
            <h1 className={styles.title}>
              Beth and Jon's not-wedding party
            </h1>

            <p className={styles.description}>
              Scroll for details &#128071;
            </p>
          </div>
        </div>
        {allSections.map(({ id, content, title}) => {
          return (
            <Section key={id} title={title} content={content} />
          )
        })}
      </main>
    </div>
  )
}
