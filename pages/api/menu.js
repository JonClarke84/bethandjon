import clientPromise from "../../lib/mongodb"

export default async (req, res) => {
  try {
    const client = await clientPromise
    const db = client.db("bethandjon")

    const menu = await db.collection("food").find({}).toArray()
    
    res.json(menu)
  }
  catch (err) {
    console.log(err)
  }
}
