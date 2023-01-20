import clientPromise from "../../lib/mongodb"
import Person from '../../schemas/person'

export default async function handler(req, res) {
  req.body.children = Array.isArray(req.body.children) ? req.body.children : [req.body.children]
  console.log('Request: ', req.body)

  const client = await clientPromise
  const db = client.db("bethandjon")

  const generateFamilyId = () => {
    const familyId = Math.floor(Math.random() * 100000000000000000)
    return familyId
  }

  const familyID = generateFamilyId()

  const leadGuest = new Person({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phone: req.body.phone,
    invited: true,
    eveningOrDay: req.body.eveningOrDay,
    familyId: familyID
  })

  const people = [leadGuest]
  
  const hasPlusOne = req.body.plusOneFirstName ? true : false

  if(hasPlusOne) {
    const plusOne = new Person({
      firstName: req.body.plusOneFirstName ? req.body.plusOneFirstName : null,
      lastName: req.body.plusOneLastName ? req.body.plusOneLastName : null,
      invited: true,
      eveningOrDay: req.body.eveningOrDay,
      familyId: familyID
    })
    people.push(plusOne)
  }

  const setLastName = () => {
    const plusOneLastName = req.body.plusOneLastName
    if(plusOneLastName && (leadGuest.lastName != plusOneLastName)) {
      return plusOneLastName + ' ' + leadGuest.lastName
    } else {
      return leadGuest.lastName
    }
  }

  req.body.children.forEach((child) => {
    const childPerson = new Person({
      firstName: child,
      lastName: setLastName(),
      invited: true,
      eveningOrDay: req.body.eveningOrDay,
      isChild: true,
      familyId: familyID
    })
    people.push(childPerson)
  })
  
  await db.collection("guests").insertMany(people)

  const printFamilyToConsole = (people) => {
    console.log(`Added the ${setLastName()} family:`)
    console.log('Family ID: ', people[0].familyId)
    console.log('-----------------------')
    people.forEach((person) => {
      console.log(person.firstName)
    })
  }

  printFamilyToConsole(people)

  res.status(200).redirect('/admin/add-guest?success=true&firstName=' + req.body.firstName + '&lastName=' + req.body.lastName)
}
