import clientPromise from "../../lib/mongodb"

// need a handleSubmit function that will group the responses by person and send to the api
function handleSubmit(e) {
  e.preventDefault()

  console.log(e)
}

export default function RsvpForm ({ family, food }) {
  return (
    <div>
      <form action="/api/rsvp" method="POST">
        {family.map((guest, i) => {
          return (
            <div key={i}>
              <h3 key={i}>{guest.firstName} {guest.lastName}</h3>
              <p>{i}</p>
              <ul>
                <li>
                  <label htmlFor="rsvp">Attending: </label>
                  <input type="checkbox" name="rsvp" value="yes" />
                </li>
                <li>
                  {guest.eveningOrDay === 'day' ? (
                    <>
                    <label htmlFor="foodChoice">Menu Choice: </label>
                      <select name="foodChoice">
                        {food.map((item, i) => {
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
        <button onClick={handleSubmit}>Submit</button>
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
