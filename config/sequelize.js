const {Sequelize, DataTypes} = require("sequelize");

module.exports.sequelize = new Sequelize('shop','root','',{
  host: 'localhost',
  dialect: 'mysql'
});
 