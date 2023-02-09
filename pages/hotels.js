import clientPromise from "../lib/mongodb"
import HotelList from '../components/HotelList'
import styles from '../styles/hotels.module.css'

export default function Hotels({ hotels }) {
  return (
    <div>
      <div>
        <h1 className={styles.title}>Where to stay</h1>
      </div>
        {hotels.map((hotel) => (
          <HotelList
            key={hotel._id}
            title={hotel.name}
            url={hotel.url}
            description={hotel.description}
            map={hotel.googleMapUrl}/>
        ))}
    </div>
  )
}

export async function getServerSideProps() {
  const client = await clientPromise
  const db = client.db("bethandjon")

  const hotels = await db.collection("hotels").find({}).toArray()

  return {
    props: {
      hotels: JSON.parse(JSON.stringify(hotels))
    }
  }
}
