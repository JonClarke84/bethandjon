import clientPromise from "../../lib/mongodb"

export default function Invites({ families }) {
  const rsvpLink = 'https://bethandjon.vercel.app/rsvp'
  return (
    <div>
      <h1>Invite Emails</h1>
      {families.map((family) => (
        <div key={family[0]}>
          <div>
            <p>Hello!</p>
            {family.map((name, index) => (
              (index === 0 || index === 1) ? null :
                <span key={index}>
                  {(index === family.length - 1) && (index !== 2) && ' and '}
                  {name}
                  {(family.length > 1) && (index !== family.length - 2) && (index !== family.length - 1) && ', '}
                </span>
            ))}
            <span>{family[1] === 'evening' ?
              `. It\'s time to RSVP! We would love to welcome you for the evening from 6pm. Please go here - ${rsvpLink} and let us know if you can make it.`
                :
              `. It\'s time to RSVP! We would love to welcome you for the day from 1:30pm. Please go here - ${rsvpLink}, let us know if you can make it and choose your food.`}
              <p>You can login with {family[0]}.</p>
              <p>All the details are now up on the website, we look forward to seeing you on August 24th in Whitstable!</p>
              <p>Please RSVP by the {family[1] === 'day' ? '5th April' : '5th May'}, thank you.</p>
              <p>Beth and Jon</p>
            </span>
          </div>
          <p>-------------------</p>
        </div>
      ))}
    </div>
  )
}

export async function getServerSideProps() {
  const client = await clientPromise
  const db = client.db("bethandjon")

  const familyIds = await db.collection("guests").distinct("familyId")

  const families = await Promise.all(familyIds.map(async (familyId) => {
    let tempFamilyArray = [familyId]
    let tempFamilyNames = []
    const family = await db.collection("guests").find({ familyId: familyId }).toArray()
    const isDayTime = family[0].eveningOrDay
    tempFamilyArray.push(isDayTime)
    family.forEach((guest) => {
      if(!guest.isChild) {
        tempFamilyNames.unshift(guest.firstName)
      } else {
        tempFamilyNames.push(guest.firstName)
      }
    })
    tempFamilyArray.push(tempFamilyNames)
    tempFamilyNames = []
    return tempFamilyArray.flat()
  }))

  return {
    props: {
      families: JSON.parse(JSON.stringify(families))
    }
  }
}