import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Profile from 'App/Models/Profile'

export default class extends BaseSeeder {
  public async run() {
    await Profile.createMany([
      {
        name: 'Admin',
        description: 'Administrador',
      },
      {
        name: 'Personal',
        description: 'Personal/Nutricionista',
      },
      {
        name: 'client',
        description: 'Aluno',
      },
    ])
  }
}
