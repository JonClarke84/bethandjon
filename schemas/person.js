import mongoose from 'mongoose'
const { Schema } = mongoose

const Person = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  isChild: { type: Boolean, default: false },
  email: { type: String, unique: true },
  phone: { type: String, unique: true },
  eveningOrDay: { type: String, required: true, default: 'evening' },
  invited: { type: Boolean, default: true },
  attending: { type: Boolean, default: false },
  food: { type: String },
  familyId: { type: String, required: true }
})

export default mongoose.models.Person || mongoose.model('Person', Person)
