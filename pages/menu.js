import clientPromise from "../lib/mongodb"
import styles from '../styles/menu.module.css'

export default function Menu({ menu }) {
  return (
    <div className={styles.menu}>
      <h1 className={styles.title}>The Menu</h1>
      <div>
        <section className={styles.section}>
          <div className={styles.sectionContent}>
            <h3>Lunch time</h3>
            <ul>
              {menu.map((item, i) => {
                if (item.isChildOption) return
                return (
                  <div key={i}>
                    {(i > 0) && <li>~</li>}
                    <li><h4>{item.name}</h4></li>
                    <li><i>{item.description}</i></li>
                  </div>
                )}
              )}
            </ul>
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.sectionContent}>
            <h3>For children</h3>
            <ul>
              {menu.map((item, i) => {
                if (!item.isChildOption) return
                return (
                  <div key={i}>
                  {(i != 3) && <li>~</li>}
                  <li><h4>{item.name}</h4></li>
                  <li><i>{item.description}</i></li>
                </div>
              )})}
            </ul>
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.sectionContent}>
              <h3>Dessert</h3>
              <ul>
                <li><i>TBC<br />(there will be some though don't worry)</i></li>
              </ul>
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.sectionContent}>
            <h3>Evening</h3>
            <ul>
              <li>Hot buffet!</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  )
}


export async function getServerSideProps() {
  const client = await clientPromise
  const db = client.db("bethandjon")

  const menu = await db.collection("food").find({}).toArray()

 return {
  props: {
    menu: JSON.parse(JSON.stringify(menu))
  }
 }
}
