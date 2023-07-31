import clientPromise from "../../lib/mongodb"

export default function Update({ families }) {
  const faqLink = 'https://bethandjon.vercel.app/faq'
  const parkingLink = 'https://bethandjon.vercel.app/parking'
  const scheduleLink = 'https://bethandjon.vercel.app/schedule'
  return (
    <div>
      <h1>Updates</h1>
      {families.map((family) => (
        <div key={family[0]}>
          <div>
            <p><span>Hey </span> 
            {family.map((name, index) => (
              (index === 0 || index === 1) ? null :
                <span key={index}>
                  {(index === family.length - 1) && (index !== 2) && ' and '}
                  {name}
                  {(family.length > 1) && (index !== family.length - 2) && (index !== family.length - 1) && ', '}
                </span>
            ))}
            </p>
            <p>We've updated the website for our civil partnership party with a few more details following some questions.</p>
            <p>There's now a page of FAQs here - {faqLink} and a page about parking here - {parkingLink}.</p>
            <p>The schedule has also been updated here - {scheduleLink}.</p>
            <p>We really look forward to seeing you on August 24th in Whitstable at 
              <span>{family[1] === 'day' ?
                ` 1:30pm!`
                  :
                ` 6pm!`}
              </span>
            </p>
              <p>Beth and Jon</p>
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

  const familyIds = await db.collection("guests").distinct("familyId", { rsvp: true })

  const families = await Promise.all(familyIds.map(async (familyId) => {
    let tempFamilyArray = [familyId]
    let tempFamilyNames = []
    const family = await db.collection("guests").find({ familyId: familyId }).toArray()
    const isDayTime = family[0].eveningOrDay
    tempFamilyArray.push(isDayTime)
    family.forEach((guest) => {
      if (guest.rsvp === false) return
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