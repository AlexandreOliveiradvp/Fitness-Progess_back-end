import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class extends BaseSeeder {
  public async run() {
    await User.createMany([
      {
        name: 'Master',
        email: 'master@gmail.com',
        password: 'teste@123',
        phone: '21999999999',
        active: true,
        profileId: 1,
      },
      {
        name: 'Alexandre Oliveira',
        email: 'alexandreoliveiradvp@gmail.com',
        password: 'teste@123',
        phone: '21964448046',
        active: true,
        profileId: 2,
      },
    ])
  }
}
