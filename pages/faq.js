import styles from '../styles/menu.module.css'

export default function Faq() {
 
  return(
    <div>
      <h1 className={styles.title}>FAQs</h1>
      <section className={styles.section}>
        <div className={styles.sectionContent}>
            <h3>What should you wear?</h3>
            <ul>
              <li>Smart but casual. Like you might wear to a big birthday party.</li>
            </ul>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.sectionContent}>
            <h3>What about children?</h3>
            <ul>
              <li>Children are more than welcome, there will be beach games and a children's disco.</li>
            </ul>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.sectionContent}>
            <h3>Where's the gift list?</h3>
            <ul>
              <li>Please no presents. Just your company is plenty!</li>
            </ul>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.sectionContent}>
            <h3>No, I REALLY want to give you a present!</h3>
            <ul>
              <li>Go on then! (There will be a table for cards)</li>
            </ul>
        </div>
      </section>
    </div>
  )
}