import clientPromise from "../../lib/mongodb"

export default async function handler (req, res) {
  if (req.method === 'POST') {
    const user = await getUser(req, res)
    if (user) {
      res.status(200).json(user)
    }
  } else {
    res.status(405).json({ message: 'ERROR' })
  }
}

async function getUser (req, res) {
  console.log('Requesting user with phone number: ', req.body)

  const client = await clientPromise
  const db = client.db("bethandjon")
  try {
    const leadGuest = await db.collection("guests").findOne({phone: req.body.phone})
    const familyId = leadGuest.familyId
    const family = await db.collection("guests").find({ familyId: familyId }).toArray()
    return family
  } catch (err) {
    res.status(500).json({ message: 'error' })
  }
}