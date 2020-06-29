import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('cars', table => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('board', 7).notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('cars');
}