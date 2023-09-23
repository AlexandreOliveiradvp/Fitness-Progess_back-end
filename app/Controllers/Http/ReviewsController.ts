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
  public async showByEvaluatedId({ request, response }: HttpContextContract) {
    const evaluatedId: number = request.param('evaluatedId')
    const review = await Review.findBy('idEvaluated', evaluatedId)
    if (review) {
      response.status(200)
      return {
        review: review,
      }
    } else {
      response.status(404)
      return {
        review: 'Review not found',
      }
    }
  }
  public async registerReview({ request, response }: HttpContextContract) {
    const body = request.body()
    const sumFolds: number =
      body.skinSubscapular +
      body.skinTriceps +
      body.skinMidaxillary +
      body.skinChest +
      body.skinSuprailiac +
      body.skinAbdominal +
      body.skinThigh
    const fatPercentStr: string = (
      0.29669 * sumFolds -
      0.00043 * Math.pow(sumFolds, 2) +
      0.02963 * 34 +
      0.4072
    ).toFixed(2)
    const fatPercent: number = parseFloat(fatPercentStr)
    const leanWeight: number = body.weight - body.weight * (fatPercent / 100)
    const fatWeightStr: string = (body.weight - leanWeight).toFixed(2)
    const imcStr: string = (body.weight / (body.height * body.height)).toFixed(2)
    const idealWeightStr: string = (24.9 * (body.height * body.height)).toFixed(2)
    const fatWeight: number = parseFloat(fatWeightStr)
    const imc: number = parseFloat(imcStr)
    const idealWeight: number = parseFloat(idealWeightStr)
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
      skinThigh: body.skinThigh,
      height: body.height,
      weight: body.weight,
      imc: imc,
      fatPercent: fatPercent,
      leanWeight: leanWeight,
      fatWeight: fatWeight,
      idealWeight: idealWeight,
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
  public async deleteReview({ request, response }: HttpContextContract) {
    const idDelete: number = request.param('id')
    try {
      const reviewDeleted = await Review.findOrFail(idDelete)
      await reviewDeleted.delete()
      response.status(200)
      return {
        message: 'Review delete successfully',
      }
    } catch {
      response.status(404)
      return {
        message: 'Review not found',
      }
    }
  }
}
