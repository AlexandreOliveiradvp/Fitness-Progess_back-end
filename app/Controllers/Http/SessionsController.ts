import { schema, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class SessionsController {
  public async login(ctx: HttpContextContract) {
    const newUserSchema = schema.create({
      login: schema.string([
        rules.exists({ table: 'users', column: 'email', where: { active: true } }),
      ]),
      password: schema.string(),
    })
    const data = await ctx.request.validate({
      schema: newUserSchema,
    })
    const token = await ctx.auth.use('api').attempt(data.login, data.password, {
      expiresIn: '1 day',
    })
    return token
  }
  public async destroy(ctx: HttpContextContract) {
    await ctx.auth.use('api').authenticate()
    const isLogged = ctx.auth.use('api').isLoggedIn

    if (!isLogged)
      return ctx.response.status(401).json({
        message: 'Invalid credentials',
        error: true,
      })
    else await ctx.auth.use('api').revoke()
    ctx.auth.use('api').isLoggedOut

    return ctx.response.status(200).json({
      revoked: true,
    })
  }
}
