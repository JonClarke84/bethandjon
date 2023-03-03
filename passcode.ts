const MongoClient = require('mongodb').MongoClient

const uri = 'mongodb+srv://jonclarke1984:sW3tReUqS9xsObka@bethjon0.rxipqht.mongodb.net/?retryWrites=true&w=majority'
const options = {}

let client
let clientPromise

client = new MongoClient(uri, options)
clientPromise = client.connect()

function cutStringToFirstFourCharacters(string) {
  return string.substring(0, 4)
}

function logAllUniqueFamilyIds() {
  const db = client.db('bethandjon')
  const collection = db.collection('guests')
  const cursor = collection.find({})
  cursor.forEach((doc) => {
    console.log(cutStringToFirstFourCharacters(doc.familyId))
  })
}

function cutAllFamilyIdsToFirstFourCharacters() {
  const db = client.db('bethandjon')
  const collection = db.collection('guests')
  const cursor = collection.find({})
  cursor.forEach((doc) => {
    const familyId = cutStringToFirstFourCharacters(doc.familyId)
    collection.updateOne({ _id: doc._id }, { $set: { familyId } })
  })
}

logAllUniqueFamilyIds()
cutAllFamilyIdsToFirstFourCharacters()
