import { dbContext } from "./DbContext";



class StarsService{
  async getAll(query = {}) {
    return await dbContext.Stars.find(query)
  }



}

export const starsService = new StarsService()