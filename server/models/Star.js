import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId


export const StarSchema = new Schema({
  name: {type: String, required: true},
  size: { type: String, required: true},
  color: {type: String, required: true},
  galaxyId: { type: ObjectId, ref: 'galaxy', required: true}
},
{timestamps: true, toJSON:{virtuals: true}})