var Sequelize = require('sequelize');
var sequelize = require('./../main.js');

var schema = sequelize.define('Users', {
  username: {
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

// schema.sync({ alter: true })
//   .then((data) => {
//     console.log('users table created successfuly');
//   })
//   .catch((err) => {
//     console.log(err)
//   })

// schema.findAll({where:{username:'Ammar'}})
//   .then(function (err, data) {
//   data.destroy({})
//     .then(function (data1) {
//       console.log('destroyed data');
//     })
//   })
//   .catch((err) => {
//     console.log('error destroying : ' , err.message);
//   })

// schema.findAll({where:{username:''}})
//   .then(function (data) {
//     data.destroy({})
//       .then(function (data1) {
//         console.log('destroyed data');
//       })
//   })
//   .catch((err) => {
//     console.log('error destroying : ' , err.message);
//   })

module.exports = schema;