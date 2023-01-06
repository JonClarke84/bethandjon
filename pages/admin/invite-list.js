import clientPromise from "../../lib/mongodb"
import styles from '../../styles/Home.module.css'

export async function getServerSideProps() {
  const client = await clientPromise
  const db = client.db("bethandjon")
  const guests = await db.collection("guests").find({}).toArray()
  return {
    props: {
      guests: JSON.parse(JSON.stringify(guests))
    }
  }
}

export default function InviteList({ guests }) {
  console.log('Guests: ', guests)
  const dayGuests = guests.filter(guest => guest.eveningOrDay === 'day')
  const eveningGuests = guests.filter(guest => guest.eveningOrDay === 'evening')
  return (
    <div>
      <h1>Invite List</h1>
      <h2>Day Guests</h2>
      <GuestListAsATable guests={dayGuests} />
      <h2>Evening Guests</h2>
      <GuestListAsATable guests={eveningGuests} />
    </div>
  )
}

function GuestListAsATable({ guests }) {
  return (
    <table className={styles.guestListTable}>
      <thead>
        <tr>
          <th>Lead Guest</th>
          <th>+1</th>
          <th>Children</th>
        </tr>
      </thead>
      <tbody>
        {guests.map((guest) => (
          <tr key={guest._id} className={styles.guestListTableItem}>
            <td>{guest.firstName} {guest.lastName}</td>
            <td>{guest.plusOneFirstName} {guest.plusOneLastName}</td>
            <td>
              {
                guest.children &&
                  guest.children.map((child, index) => (
                    <span key={index}>{child}{guest.children.length > 1 && ', '}</span>
                    ))
              }
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}