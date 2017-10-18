
var Sequelize = require('sequelize');
var config = require('../config.js');
/*
const sequelize = new Sequelize('humanity', 'root', config.dbPassword , {
>>>>>>> 10446a8d4c4b15ed610541223a33fe79d8727c62
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
<<<<<<< HEAD
});
=======
});
*/
const sequelize = new Sequelize('sql12200128', 'sql12200128', 'Fjmu4tLdv5' , {
  host: 'sql12.freemysqlhosting.net',
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

