import clientPromise from "../../lib/mongodb"

export default async (req, res) => {
  try {
    const client = await clientPromise
    const db = client.db("bethandjon")

    const hotel = await db.collection("hotels").insertOne(req.body)

    res.status(200).json(hotel)
  }
  catch (err) {
    console.log('ERROR')
  }
}
