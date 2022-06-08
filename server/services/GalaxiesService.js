import { dbContext } from "../db/DbContext";


class GalaxiesService{
  async getAll(){
    const galaxies = await dbContext.Galaxies.find()
    return galaxies
  }
}

export const galaxiesService = new GalaxiesService()