var Sequelize = require('sequelize');
var sequelize = require('./../main.js');

var schema = sequelize.define('Users', {
  name: {
    type: Sequelize.STRING,
     allowNull:false,
    uniqe:true
  },
  password: {
    type: Sequelize.STRING,
    allowNull:false
  },
  email:{
    type:Sequelize.STRING
  },
  rate:{
    type:Sequelize.STRING
  }
});
var a ; 
schema.sync({ alter: true })
  .catch((err) => {
    console.log(err)
  }).then((data) => {
    a = data 
    console.log(data , ' : data ');
    console.log('users table created successfuly');
  });

module.exports = a;