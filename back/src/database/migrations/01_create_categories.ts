import knex from 'knex';

export async function up(knex: knex){
    return knex.schema.createTableIfNotExists('categories', (table) => {
        table.increments('id').primary();
        table.string('description');
    });
}

export async function down(knex: knex){
    return knex.schema.dropTableIfExists('categories');
}