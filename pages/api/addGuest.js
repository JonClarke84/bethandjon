import clientPromise from "../../lib/mongodb"

export default async function handler(req, res) {
  console.log('Adding request: ', req.body)
  try {
    const newGuest = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phone: req.body.phone,
      eveningOrDay: req.body.eveningOrDay,
      plusOneFirstName: req.body.plusOneFirstName,
      plusOneLastName: req.body.plusOneLastName,
      children: req.body.children,
    }
    const client = await clientPromise
    const db = client.db("bethandjon")
    const guest = await db.collection("guests").insertOne(newGuest)
    console.log('Guest added: ', guest)
  } catch (err) {
    console.log('Error adding guest: ', err)
    res.redirect('/admin/add-guest?success=false')
  }
  res.status(200).redirect('/admin/add-guest?success=true&firstName=' + req.body.firstName + '&lastName=' + req.body.lastName)
}