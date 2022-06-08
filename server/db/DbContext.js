import mongoose from 'mongoose'
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);

  Galaxies = mongoose.model('Galaxies, GalaxySchema')

}

export const dbContext = new DbContext()
