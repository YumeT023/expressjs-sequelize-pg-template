const { Sequelize } = require("sequelize");

const Database = new Sequelize({
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  username: process.env.DB_USERNAME,
  host: "localhost",
  dialect: "postgres",
});

module.exports = Database;
