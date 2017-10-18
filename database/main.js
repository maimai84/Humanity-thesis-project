var Sequelize = require('sequelize');
var config = require('../config.js');

const sequelize = new Sequelize('humanity', 'root', config.dbPassword , {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

//Checking connection status
sequelize.authenticate()
	.then(function(err) {
		console.log('Connection has been established successfully');
	})
	.catch(function (err) {
	    console.log('There is connection in ERROR', err);
	})
module.exports = sequelize ;