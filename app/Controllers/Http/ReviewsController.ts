import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Review from 'App/Models/Review'
/* import Evaluated from 'App/Models/Evaluated' */
/* import { DateTime } from 'luxon' */

export default class ReviewsController {
  public async showReviews({ response }: HttpContextContract) {
    const reviewEvaluated = await Review.query().preload('evaluated')
    response.status(200)
    return {
      reviews: reviewEvaluated,
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
    const review = {
      weight: parseInt(body.weight),
      years: parseInt(body.years),
      height: parseFloat(body.height),
      perBicRelaxRg: parseFloat(body.perBicRelaxRg),
      perBicRelaxLf: parseFloat(body.perBicRelaxLf),
      perBicContRg: parseFloat(body.perBicContRg),
      perBicContLf: parseFloat(body.perBicContLf),
      perForarmRg: parseFloat(body.perForarmRg),
      perForarmLf: parseFloat(body.perForarmLf),
      perThighHighRg: parseFloat(body.perThighHighRg),
      perThighHighLf: parseFloat(body.perThighHighLf),
      perThighMidRg: parseFloat(body.perThighMidRg),
      perThighMidLf: parseFloat(body.perThighMidLf),
      perThighLowRg: parseFloat(body.perThighLowRg),
      perThighLowLf: parseFloat(body.perThighLowLf),
      perCalfRg: parseFloat(body.perCalfRg),
      perCalfLf: parseFloat(body.perCalfLf),
      perAbdomem: parseFloat(body.perAbdomem),
      perWaist: parseFloat(body.perWaist),
      perHip: parseFloat(body.perHip),
      perChest: parseFloat(body.perChest),
      perShoulder: parseFloat(body.perShoulder),
      skinSubscapular: parseInt(body.skinSubscapular),
      skinTriceps: parseInt(body.skinTriceps),
      skinChest: parseInt(body.skinChest),
      skinMidaxillary: parseInt(body.skinMidaxillary),
      skinSuprailiac: parseInt(body.skinSuprailiac),
      skinAbdominal: parseInt(body.skinAbdominal),
      skinThigh: parseInt(body.skinThigh),
    }
    const sumFolds: number =
      review.skinSubscapular +
      review.skinTriceps +
      review.skinMidaxillary +
      review.skinChest +
      review.skinSuprailiac +
      review.skinAbdominal +
      review.skinThigh
    const fatPercent = (
      0.29669 * sumFolds -
      0.00043 * Math.pow(sumFolds, 2) +
      0.02963 * review.years +
      0.4072
    ).toFixed(2)
    const leanWeight: any = review.weight - review.weight * (parseFloat(fatPercent) / 100)
    const fatWeight: any = (review.weight - leanWeight).toFixed(2)
    const imc: any = (review.weight / (review.height * review.height)).toFixed(2)
    const idealWeight: any = (24.9 * (review.height * review.height)).toFixed(2)
    const reviewsCreated = await Review.create({
      idEvaluated: body.evaluatedId,
      perRelaxBicLf: review.perBicRelaxLf,
      perRelaxBicRg: review.perBicRelaxRg,
      perContBicLf: review.perBicContLf,
      perContBicRg: review.perBicContRg,
      perForamrLf: review.perForarmLf,
      perForamrRg: review.perForarmRg,
      perThighHighLf: review.perThighHighLf,
      perThighHighRg: review.perThighHighRg,
      perThighMidLf: review.perThighMidLf,
      perThighMidRg: review.perThighMidRg,
      perThighLowLf: review.perThighLowLf,
      perThighLowRg: review.perThighLowRg,
      perCalfLf: review.perCalfLf,
      perCalfRg: review.perCalfRg,
      perAbdomem: review.perAbdomem,
      perWaist: review.perWaist,
      perHip: review.perHip,
      perChest: review.perChest,
      perShoulder: review.perShoulder,
      skinSubscapular: review.skinSubscapular,
      skinTriceps: review.skinTriceps,
      skinMidaxillary: review.skinMidaxillary,
      skinChest: review.skinChest,
      skinSuprailiac: review.skinSuprailiac,
      skinAbdominal: review.skinAbdominal,
      skinThigh: review.skinThigh,
      height: review.height,
      weight: review.weight,
      years: review.years,
      imc: imc,
      fatPercent: parseFloat(fatPercent),
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
