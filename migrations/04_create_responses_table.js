/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('responses', (table) => {
      table.increments('response_id').primary();
      table.string('response').notNullable();
      table.boolean('is_correct')
      table
      .integer('question_id')
      .unsigned()
      .references('questions.question_id')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'))
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function (knex) {
    return knex.schema.dropTable('responses');
  };
  