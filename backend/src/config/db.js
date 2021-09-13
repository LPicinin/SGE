import Sequelize from 'sequelize';

const sequelize = new Sequelize({
    host: 'localhost',
    database: 'sge',
    username: 'postgres',
    password: 'postgres',
    dialect: 'postgres',
    port: 5432,
    logging: true
});

async function test_connection() {
    try {
        let result = await sequelize.authenticate()
        return true;
    }
    catch (error) {
    }
    return false;
}

export { sequelize, test_connection }
