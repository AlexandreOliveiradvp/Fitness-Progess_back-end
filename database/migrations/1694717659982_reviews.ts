import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'reviews'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('id_evaluated').unsigned()
      table.float('per_relax_bic_lf')
      table.float('per_relax_bic_rg')
      table.float('per_cont_bic_lf')
      table.float('per_cont_bic_rg')
      table.float('per_foreamr_lf')
      table.float('per_foreamr_rg')
      table.float('per_thigh_higt_lf')
      table.float('per_thigh_mid_lf')
      table.float('per_thigh_low_lf')
      table.float('per_thigh_high_rg')
      table.float('per_thigh_mid_rg')
      table.float('per_thigh_low_rg')
      table.float('per_calf_lf')
      table.float('per_calf_rg')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })

      table.foreign('id_evaluated').references('id').inTable('evaluateds')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
