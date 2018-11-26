const Sequelize = require('sequelize');

const sequelize = new Sequelize('sequelize_example', 'root', 'Immanuel^95', {
  dialect: 'mysql',
  host: 'localhost',
  operatorsAliases: false
});

module.exports = sequelize;
