import Head from 'next/head'
import Image from 'next/image'
import MainTitle from '../components/mainTitle'
import styles from '../styles/Home.module.css'
import { getSortedSections } from '../lib/sections'
import Section from '../components/section'
import { Main } from 'next/document'

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
          <MainTitle title="Beth and Jon's not-wedding party" />
            <div className={styles.subTitleContainer}>
              <h2 className={styles.subTitle}>August 24th 2023, save the date!</h2>
              <p className={styles.subTitle}>
                Scroll for details &#128071;
              </p>
            </div>
          </div>
        </div>
        <div name="content">
          {allSections.map(({ id, content, title}) => {
            return (
              <Section key={id} title={title} content={content} />
            )
          })}
        </div>
      </main>
    </div>
  )
}
