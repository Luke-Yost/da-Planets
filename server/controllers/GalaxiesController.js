import BaseController from "../utils/BaseController"
import { galaxiesService } from "../services/GalaxiesService"

export class GalaxiesController extends BaseController{
  constructor(){
    super('api/galaxies')
    this.router
    .get('', this.getAll)


    .post('', this.create)
    .delete('/:id', this.remove)

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

    async create(req, res, next){
      try{
        let galaxies = await galaxiesService.create(req.body)
        return res.send(galaxies)
      }
      catch(error){
        next(error)
      }
    }

    async remove(req, res, next){
      try{
        let message = await galaxiesService.remove(req.params.id)
        return res.send(message)
      }
      catch(error){
        next(error)
      }
    }

  }

