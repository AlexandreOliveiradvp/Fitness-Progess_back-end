import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
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
  public perForamrLf: number

  @column()
  public perForamrRg: number

  @column()
  public perThighHighLf: number

  @column()
  public perThighHighRg: number

  @column()
  public perThighMidLf: number

  @column()
  public perThighMidRg: number

  @column()
  public perThighLowLf: number

  @column()
  public perThighLowRg: number

  @column()
  public perCalfLf: number

  @column()
  public perCalfRg: number

  @column()
  public perAbdomem: number

  @column()
  public perWaist: number

  @column()
  public perHip: number

  @column()
  public perChest: number

  @column()
  public perShoulder: number

  @column()
  public skinSubscapular: number

  @column()
  public skinTriceps: number

  @column()
  public skinMidaxillary: number

  @column()
  public skinChest: number

  @column()
  public skinSuprailiac: number

  @column()
  public skinAbdominal: number

  @column()
  public skinThigh: number

  @column()
  public height: number

  @column()
  public weight: number

  @column()
  public years: number

  @column()
  public imc: number

  @column()
  public fatPercent: number

  @column()
  public leanWeight: number

  @column()
  public fatWeight: number

  @column()
  public idealWeight: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Evaluated, {
    foreignKey: 'idEvaluated',
  })
  public evaluated: BelongsTo<typeof Evaluated>
}
