import { DateTime } from 'luxon'
import { BaseModel, HasMany, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Evaluated from './Evaluated'

export default class Review extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public idEvaluated: number

  @column()
  public perRelaxBicLf: number

  @column()
  public perRelaxBicRg: number

  @column()
  public perContBicLf: number

  @column()
  public perContBicRg: number

  @column()
  public perForeamrLf: number

  @column()
  public perForeamrRg: number

  @column()
  public perThighHigtLf: number

  @column()
  public perThighHigtRg: number

  @column()
  public perThighMidLf: number

  @column()
  public perThighMidRg: number

  @column()
  public perThighlowLf: number

  @column()
  public perThighlowRg: number

  @column()
  public perCalfLf: number

  @column()
  public perCalfRg: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Evaluated)
  public evaluated: HasMany < typeof Evaluated >
}
