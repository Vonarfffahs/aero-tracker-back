const { Sequelize } = require('sequelize');

module.exports = new Sequelize(
    process.env.DB_NAME, // DB name
    process.env.DB_USER, // DB username
    process.env.DB_PASSWORD, // DB password
    {
        dialect: 'postgres', // sql dialect
        host: process.env.DB_HOST, // server hosting the db
        port: process.env.DB_PORT // connection port
    }
);