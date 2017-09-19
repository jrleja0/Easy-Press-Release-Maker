const Sequelize = require('sequelize');
const db = new Sequelize(
  process.env.DATABASE_URL || 'postgres://localhost:5432/pressReleaseMaker', {
    logging: console.log
  }
);
module.exports = db;
