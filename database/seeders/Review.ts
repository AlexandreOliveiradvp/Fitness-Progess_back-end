import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Review from 'App/Models/Review'

export default class extends BaseSeeder {
  public async run() {
    await Review.createMany([
      {
        idEvaluated: 1,
        perRelaxBicLf: 32.2,
        perRelaxBicRg: 31,
        perContBicLf: 37.5,
        perContBicRg: 37.0,
        perForamrLf: 25,
        perForamrRg: 23,
        perThighHighLf: 64,
        perThighHighRg: 67,
        perThighMidLf: 57,
        perThighMidRg: 58,
        perThighLowLf: 47,
        perThighLowRg: 45.5,
        perCalfLf: 39,
        perCalfRg: 38,
        perAbdomem: 92.5,
        perWaist: 91.5,
        perHip: 106,
        perChest: 99,
        perShoulder: 115,
        skinSubscapular: 19,
        skinTriceps: 15,
        skinChest: 13,
        skinMidaxillary: 12,
        skinSuprailiac: 22,
        skinAbdominal: 34,
        skinThing: 25,
        height: 1.77,
        weight: 88.3,
        imc: 28.3,
        fatPercent: 20.63,
        leanWeight: 70.9,
        fatWeight: 18.21,
        idealWeight: 83.44,
      },
    ])
  }
}
