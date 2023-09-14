import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Evaluated from 'App/Models/Evaluated'

export default class EvaluatedsController {
  public async showEvaluated({ response }: HttpContextContract) {
    const evaluated = await Evaluated.all()
    response.status(200)
    return {
      Evaluateds: evaluated,
    }
  }
  public async registerEvaluated({ request, response }: HttpContextContract) {
    const body = request.body()
    const evaluated = await Evaluated.create({
      name: body.name,
      email: body.email,
      phone: body.phone,
      dateOfBirth: body.dateofbirth,
      sex: body.sex,
    })
    if (evaluated.$isPersisted) {
      response.status(201)
      return {
        message: 'Successful operation',
      }
    } else {
      response.status(500)
      return {
        message: 'Internal server error',
      }
    }
  }
  public async deleteEvaluated({ request, response }: HttpContextContract) {
    const id: number = request.param('id')
    try {
      const evaluatedDeleted = await Evaluated.findOrFail(id)
      await evaluatedDeleted.delete()
      response.status(200)
      return {
        message: 'Evaluated delete successfully',
      }
    } catch {
      response.status(404)
      return {
        message: 'Evaluated not found',
      }
    }
  }
}
