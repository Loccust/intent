import knex from 'knex';

export async function up(knex: knex) {
    return knex.schema.createTableIfNotExists('tasks', (table) => {
        table.increments('id').primary();
        table.string('description').notNullable();;
        table.dateTime('deadLine').notNullable();
        table.boolean('done').notNullable()
        .notNullable()
        .defaultTo(0);
        table.integer('categoryId')
        .references('categories.id')
        .notNullable()
        .onDelete('CASCADE');
    });
}

export async function down(knex: knex){
    return knex.schema.dropTableIfExists('tasks');
}


