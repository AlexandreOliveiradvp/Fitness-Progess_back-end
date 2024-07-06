import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, beforeSave, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Hash from '@ioc:Adonis/Core/Hash'
import Profile from './Profile'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public email: string

  @column({ serializeAs: null })
  public password: string

  @column()
  public phone: string

  @column()
  public active: boolean

  @column()
  public profileId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }
  @belongsTo(() => Profile, {
    foreignKey: 'profileId',
  })
  public Profile: BelongsTo<typeof Profile>
}
