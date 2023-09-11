import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Evaluated from 'App/Models/Evaluated'

export default class EvaluatedsController {
  public async get() {
    const evaluated = await Evaluated.all()
    return {
      data: evaluated,
    }
  }
  public async post({ request, response }: HttpContextContract) {
    const body = request.body()
    console.log(body)
    response.status(201)
    return {
      msg: 'Dados recebidos com sucesso.',
    }
  }
}
