import BaseController from "../utils/BaseController";
import { galaxiesService } from "../services/GalaxiesService";
import { starsService } from "../db/StarsService";


export class StarsController extends BaseController{
  constructor(){
    super('api/stars')
    this.router
    .get('', this.getAll)

    // .post('', this.create)
    // .delete('/:id', this.remove)
  }

  async getAll(req, res, next){
    try{
      let stars = await starsService.getAll(req.query)
      return res.send(stars)
    }
    catch(error){
      next(error)
    }
  }

}