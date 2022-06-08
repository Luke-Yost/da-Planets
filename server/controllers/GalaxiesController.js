import BaseController from "../utils/BaseController"
import { galaxiesService } from "../services/GalaxiesService"

export class GalaxiesController extends BaseController{
  constructor(){
    super('api/galaxies')
    this.router
    .get('', this.getAll)
  }

  async getAll(req, res, next){
    try {
      let galaxies = await galaxiesService.getAll()
      return res.send(galaxies)
    }
    catch(error){
      next(error)
    }
  }

}