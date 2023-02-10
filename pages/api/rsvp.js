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

  function setRsvp (rsvp) {
    if (rsvp === 'yes') return true
    return false
  }

  try { 
    req.body.guestId.forEach(async (guest, index) => {
      await mutateGuest(guest, setRsvp(req.body.rsvp[index]), req.body.foodChoice[index])
    })
    res.redirect(302, '/rsvp/success')
  } catch (error) {
    res.status(500).json({ error })
  }
}
