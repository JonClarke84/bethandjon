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
  console.log("req.body: ", req.body)
  console.log('RSVP number: ', req.body.rsvp.length)
  try { 
    const client = await clientPromise
    const db = client.db("bethandjon")
    
    function setRsvp (rsvp) {
      if (rsvp === 'yes') return true
      return false
    }

    req.body.rsvp = Array.isArray(req.body.rsvp) ? req.body.rsvp : [req.body.rsvp]
    req.body.guestId = Array.isArray(req.body.guestId) ? req.body.guestId : [req.body.guestId]
    req.body.foodChoice = Array.isArray(req.body.foodChoice) ? req.body.foodChoice : [req.body.foodChoice]

    console.log('req.body.rsvp: ', req.body.rsvp)

    for (let i = 0; i < req.body.rsvp.length; i++) {
      await mutateGuest(db, req.body.guestId[i], setRsvp(req.body.rsvp[i]), req.body.foodChoice[i])
    }
    console.log('RSVP Success: ', req.body)
    res.redirect(302, '/rsvp/success')
  } catch (error) {
    console.log(error)
    res.redirect(302, `/rsvp/?error=true`)
  }
}
