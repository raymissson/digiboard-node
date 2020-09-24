import knex from 'knex';

const connection = knex({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'digiboard'
    },
    useNullAsDefault: true,
});

export default connection;