import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Evaluated from 'App/Models/Evaluated'
export default class extends BaseSeeder {
  public async run() {
    await Evaluated.createMany([
      {
        name: 'Alexandre Oliveira',
        email: 'alexandreolitec@hotmail',
        phone: '(21)96444-8046',
        dateOfBirth: '1990-02-28',
        sex: 'male',
      },
      {
        name: 'Aline Oliveira',
        email: 'alineolitec@hotmail',
        phone: '(21)96700-4070',
        dateOfBirth: '1989-03-02',
        sex: 'female',
      },
    ])
  }
}
