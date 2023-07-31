import clientPromise from "../lib/mongodb"
import HotelList from '../components/HotelList'
import styles from '../styles/hotels.module.css'

export default function Parking({ parking }) {
  return (
    <div>
      <div>
        <h1 className={styles.title}>Where to park</h1>
      </div>
        {parking.map(({ _id, name, description, googleMapUrl }) => (
          <HotelList
            key={_id}
            title={name}
            description={description}
            map={googleMapUrl}/>
        ))}
    </div>
  )
}

export async function getServerSideProps() {
  const client = await clientPromise
  const db = client.db("bethandjon")

  const parking = await db.collection("parking").find({}).toArray()

  return {
    props: {
      parking: JSON.parse(JSON.stringify(parking))
    }
  }
}
