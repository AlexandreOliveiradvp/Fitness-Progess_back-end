import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Review from 'App/Models/Review'

export default class ReviewsController {
  public async showReviews({ response }: HttpContextContract) {
    const reviews = await Review.all()
    response.status(200)
    return {
      reviews: reviews,
    }
  }
  public async showById({ request, response }: HttpContextContract) {
    const id: number = request.param('id')
    const review = await Review.find(id)
    if (review) {
      response.status(200)
      return {
        review: review,
      }
    } else {
      response.status(404)
      return {
        message: 'Review not found.',
      }
    }
  }
  public async registerReview({ request, response }: HttpContextContract) {
    const body = request.body()
    const reviewsCreated = await Review.create({
      idEvaluated: body.idEvaluated,
      perRelaxBicLf: body.perRelaxBicLf,
      perRelaxBicRg: body.perRelaxBicRg,
      perContBicLf: body.perContBicLf,
      perContBicRg: body.perContBicRg,
      perForamrLf: body.perForamrLf,
      perForamrRg: body.perForamrRg,
      perThighHighLf: body.perThighHighLf,
      perThighHighRg: body.perThighHighRg,
      perThighMidLf: body.perThighMidLf,
      perThighMidRg: body.perThighMidRg,
      perThighLowLf: body.perThighLowLf,
      perThighLowRg: body.perThighLowRg,
      perCalfLf: body.perCalfLf,
      perCalfRg: body.perCalfRg,
      perAbdomem: body.perAbdomem,
      perWaist: body.perWaist,
      perHip: body.perHip,
      perChest: body.perChest,
      perShoulder: body.perShoulder,
      skinSubscapular: body.skinSubscapular,
      skinTriceps: body.skinTriceps,
      skinMidaxillary: body.skinMidaxillary,
      skinChest: body.skinChest,
      skinSuprailiac: body.skinSuprailiac,
      skinAbdominal: body.skinAbdominal,
      skinThigh: body.thigh,
      height: body.height,
      weight: body.weight,
      imc: body.imc,
      fatPercent: body.fatPercent,
      leanWeight: body.leanWeight,
      fatWeight: body.fatWeight,
      idealWeight: body.idealWeight,
    })
    if (reviewsCreated.$isPersisted) {
      response.status(201)
      return {
        message: 'Review created successfully.',
      }
    } else {
      response.status(500)
      return {
        message: 'Internal server error',
      }
    }
  }
}
