import clientPromise from "../../lib/mongodb"
import styles from '../../styles/rsvp.module.css'

export default function RsvpForm ({ family, food }) {
  return (
    <div>
      <h1 className={styles.title}>RSVP</h1>
      <form action="/api/rsvp" method="POST" className={styles.form}>
        {family.map((guest, i) => {
          return (
            <div key={i} className={styles.guestPanel}>
              <h3 key={i}>{guest.firstName} {guest.lastName}</h3>
              <ul>
                <li className={styles.listItem} key={i} name="rsvp">
                  <label className={styles.label} htmlFor="rsvp">Attending: </label>
                  <select name="rsvp" className={styles.select}>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </li>
                <li className={styles.listItem}>
                  {guest.eveningOrDay === 'day' ? (
                    <>
                    <label className={styles.label} htmlFor="foodChoice">Menu Choice: </label>
                      <select name="foodChoice" className={styles.select}>
                        {food.map((item, i) => {
                          { if (!guest.isChild && item.isChildOption) return }
                          return (
                            <option value={item.name} key={i}>{item.name}</option>
                          )
                        })}
                      </select>
                    </>
                  ) : (
                    null
                  )}
                </li>
                <input type="hidden" name="guestId" value={guest._id} />
              </ul>
            </div>
          )
        })}
        <button className={styles.button}>Submit</button>
      </form>
    </div>
  )
}

export async function getServerSideProps(context) {
  const familyId = context.params.familyId
  const client = await clientPromise
  const db = client.db("bethandjon")

  const family = await db.collection("guests").find({familyId}).toArray()
  const food = await db.collection("food").find({}).toArray()

  return {
    props: {
      family: JSON.parse(JSON.stringify(family)),
      food: JSON.parse(JSON.stringify(food))
    }
  }
}
