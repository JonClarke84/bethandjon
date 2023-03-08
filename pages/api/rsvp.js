import clientPromise from '../../lib/mongodb'
import { ObjectId } from 'mongodb'

async function mutateGuest(db, guestId, rsvp, foodChoice) {
  await db.collection("guests").updateOne(
    { _id: ObjectId(guestId) },
    { $set: { rsvp, foodChoice, hasResponded: true } }
    )
    console.log('Updated guest: ', guestId, rsvp, foodChoice)
  }

export default async function handler(req, res) {
  try { 
    const client = await clientPromise
    const db = client.db("bethandjon")
    
    function setRsvp (rsvp) {
      if (rsvp === 'yes') return true
      return false
    }

    for (let i = 0; i < req.body.rsvp.length; i++) {
      await mutateGuest(db, req.body.guestId[i], setRsvp(req.body.rsvp[i]), req.body.foodChoice[i])
    }

    res.redirect(302, '/rsvp/success')
  } catch (error) {
    console.log(error)
    res.redirect(302, `/rsvp/?error=true`)
  }
}
