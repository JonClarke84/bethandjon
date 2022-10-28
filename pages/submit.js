import clientPromise from "../lib/mongodb"

export default function Submit({ menu }) {
  return (
    <div>
      <h1>Submit</h1>
      <p>Submit your menu choices here</p>
      <ul>
        {menu.map((item) => (
          <li key={item._id}>
            {item.name}
          </li>
        ))}
      </ul>
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
