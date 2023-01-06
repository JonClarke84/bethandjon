import clientPromise from "../lib/mongodb"
import HotelLayout from '../components/HotelLayout'
import HotelList from '../components/HotelList'
import styles from '../styles/Home.module.css'

export default function Hotels({ hotels }) {
  return (
    <HotelLayout title="Where to stay in Whitstable" description="Where to stay in Whitstable">

      <h1 className={styles.pageHeader}>Where to stay</h1>

      {hotels.map((hotel) => (
        <HotelList
          key={hotel._id}
          title={hotel.name}
          url={hotel.url}
          description={hotel.description}
          map={hotel.googleMapUrl}/>
      ))}

    </HotelLayout>
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