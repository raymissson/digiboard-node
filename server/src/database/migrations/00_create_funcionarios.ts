import Knex from 'knex';

export async function up(knex: Knex){
    return knex.schema.createTable('funcionarios', table =>{
        table.bigInteger('cpf').primary();
        table.string('nome').notNullable();
        table.string('cargo').notNullable();
        table.string('foto').notNullable();
    });
}

export async function down(knex: Knex){
    return knex.schema.dropTable('funcionarios');
}