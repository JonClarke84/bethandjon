import mongoose from 'mongoose'
const { Schema } = mongoose

const Family = new Schema({
  people: [{ type: Schema.Types.ObjectId, ref: 'Person' }],
})

export default mongoose.models.Family || mongoose.model('Family', Family)