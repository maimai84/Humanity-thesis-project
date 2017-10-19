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

// schema.sync({ alter: true })
//   .then((data) => {
//     console.log('users table created successfuly');
//   })
//   .catch((err) => {
//     console.log(err)
//   })

// schema.build({
//   name : 'ashar is here !!',
//   password : 'ashar is here !!'
// })
//   .save()
//   .then(() => {
//     console.log(`saved`);
//   })
//   .catch((err) => {
//     console.log(`not saved saved ${err}`);
//   })

module.exports = schema;