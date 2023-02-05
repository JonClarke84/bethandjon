import clientPromise from "../lib/mongodb"

export default function Menu({ menu }) {
  return (
    <div>
      <h1>The Menu</h1>
      <h2>Lunch time</h2>
      <ul>
        {menu.map((item, i) => {
          if (item.isChildOption) return
          return (
          <div key={i}>
            {(i > 0) && <li>~</li>}
            <li><h4>{item.name}</h4></li>
            <li><i>{item.description}</i></li>
          </div>
        )})}
      </ul>
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
      <h2>Evening</h2>
      <ul>
        <li>Pizza!</li>
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
