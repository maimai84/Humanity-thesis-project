const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql'|'sqlite'|'postgres'|'mssql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }


 // var mysql      = require('mysql');
 // var connection = mysql.createConnection({
 //   host     : 'localhost',
 //   user     : 'root',
 //   password : '',
 //   database : ''
 // });

 // connection.connect(function(err){
	//  if(!err) {
	//      console.log("Database is connected ... \n\n");  
	//  } else {
	//      console.log("Error connecting database ... \n\n");  
	//  }
 // });