import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Evaluated from 'App/Models/Evaluated'
export default class extends BaseSeeder {
  public async run() {
    await Evaluated.createMany([
      {
        name: 'Alexandre Oliveira',
        email: 'alexandreolitec@hotmail',
        phone: '(21)96444-8046',
        dateofbirth: '28/02/1990',
        sex: 'male',
      },
      {
        name: 'Aline Oliveira',
        email: 'alineolitec@hotmail',
        phone: '(21)96700-4070',
        dateofbirth: '02/03/1989',
        sex: 'female',
      },
    ])
  }
}
