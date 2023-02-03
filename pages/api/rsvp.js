import clientPromise from '../../lib/mongodb'
import { ObjectId } from 'mongodb'

export default async function handler(req, res) {
  const client = await clientPromise
  const db = client.db("bethandjon")

  async function mutateGuest(guestId, rsvp, foodChoice) {
    await db.collection("guests").updateOne(
      { _id: ObjectId(guestId) },
      { $set: { rsvp, foodChoice } }
    )
  }

  req.body.guestId.forEach(async (guest, index) => {
    const setRsvp = () => {
      if (req.body.rsvp[index] === 'yes') {
        return true
      } else {
        return false
      }
    }
    req.body.rsvp[index] = setRsvp()
    const updatedGuest = await mutateGuest(guest, req.body.rsvp[index], req.body.foodChoice[index])
    console.log('Updated guest: ', updatedGuest)
  })

  res.status(200).json({ ...req.body })
}
