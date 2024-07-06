import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'reviews'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('id_evaluated').unsigned()
      table.float('per_relax_bic_lf')
      table.float('per_relax_bic_rg')
      table.float('per_cont_bic_lf')
      table.float('per_cont_bic_rg')
      table.float('per_foramr_lf')
      table.float('per_foramr_rg')
      table.float('per_thigh_high_lf')
      table.float('per_thigh_high_rg')
      table.float('per_thigh_mid_lf')
      table.float('per_thigh_mid_rg')
      table.float('per_thigh_low_lf')
      table.float('per_thigh_low_rg')
      table.float('per_calf_lf')
      table.float('per_calf_rg')
      table.float('per_abdomem')
      table.float('per_waist')
      table.float('per_hip')
      table.float('per_chest')
      table.float('per_shoulder')
      table.float('skin_subscapular')
      table.float('skin_triceps')
      table.float('skin_midaxillary')
      table.float('skin_chest')
      table.float('skin_suprailiac')
      table.float('skin_abdominal')
      table.float('skin_thigh')
      table.float('height')
      table.float('weight')
      table.integer('years')
      table.float('imc')
      table.float('fat_percent')
      table.float('lean_weight')
      table.float('fat_weight')
      table.float('ideal_weight')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })

      table.foreign('id_evaluated').references('id').inTable('evaluateds')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
