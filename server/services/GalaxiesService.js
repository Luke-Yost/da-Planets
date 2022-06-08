import { dbContext } from "../db/DbContext";


class GalaxiesService{
  async getAll(){
    const galaxies = await dbContext.Galaxies
  }
}

export const galaxiesService = new GalaxiesService()