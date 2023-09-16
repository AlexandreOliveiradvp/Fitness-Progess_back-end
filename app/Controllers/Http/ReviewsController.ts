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
}
