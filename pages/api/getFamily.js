import clientPromise from "../../lib/mongodb"

export default async function handler (req, res) {
  console.log('Requesting family with familyId: ', req.body.loginNumber)

  const client = await clientPromise
  const db = client.db("bethandjon")
  try {
    const loginNumber = req.body.loginNumber
    const family = await (await db.collection("guests").find({ familyId: loginNumber }).toArray()).sort((a, b) => a.isChild - b.isChild)
    console.log('Found family: ', family)
    res.status(200).json(family)
  } catch (err) {
    res.status(500).json({ message: 'error' })
  }
}