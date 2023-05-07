import clientPromise from "../lib/mongodb"
import styles from '../styles/guestList.module.css'

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
  const dayGuests = guests.filter(guest => guest.eveningOrDay === 'day' && guest.rsvp === true)
  const eveningGuests = guests.filter(guest => (guest.eveningOrDay === 'evening') && (guest.rsvp === true))

  const totalCod = dayGuests.filter(guest => guest.foodChoice === 'Beer battered day boat cod').length
  const totalChicken = dayGuests.filter(guest => guest.foodChoice === 'Homemade panko chicken breast goujons').length
  const totalHalloumi = dayGuests.filter(guest => guest.foodChoice === 'Beer battered Halloumi (V)').length
  const totalHallal = dayGuests.filter(guest => guest.foodChoice === 'Battered day boat cod (no beer/alcohol please)').length
  const totalChildrenFish = dayGuests.filter(guest => guest.foodChoice === "Children's battered cod").length
  const totalChildrenSausage = dayGuests.filter(guest => guest.foodChoice === "Children's grilled sausage").length

  return (
    <div className={styles.guestList}>
      <h1>Guest List</h1>
      <p>Total cod: {totalCod}</p>
      <p>Total alcohol free fish: {totalHallal}</p>
      <p>Total chicken: {totalChicken}</p>
      <p>Total halloumi: {totalHalloumi}</p>
      <p>Total children fish: {totalChildrenFish}</p>
      <p>Total children sausage: {totalChildrenSausage}</p>
      <p>Total day guests: {dayGuests.length}</p>
      <p>Total evening guests: {eveningGuests.length}</p>
      <h2>Day Guests</h2>
      <GuestList guests={dayGuests} />
      <h2>Evening Guests</h2>
      <GuestList guests={eveningGuests} dayGuests={dayGuests}/>
    </div>
  )
}

function GuestList({ guests, dayGuests }) {
  return (
    <ul>
      {guests.map((guest, index) => (
        <li key={guest._id}>
          {guest.eveningOrDay === 'day' &&
            <span>{index + 1}: </span>
          }
          {guest.eveningOrDay === 'evening' &&
            <span>{index + 1 + dayGuests.length}: </span>
          }
          <span>{guest.firstName} </span>
          <span>{guest.lastName}</span>
          {guest.eveningOrDay === 'day' &&
            <span> - {guest.foodChoice}</span>
          }
        </li>
      ))}
    </ul>
  )
}