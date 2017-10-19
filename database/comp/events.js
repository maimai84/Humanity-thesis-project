var Sequelize = require('sequelize');
var sequelize = require('./../main.js');

var schema = sequelize.define('Events', {
  name: {
    type: Sequelize.STRING,
    allowNull:false,
    uniqe:true
  },
  description: {
    type: Sequelize.STRING
  },
  location:{
  	type:Sequelize.STRING
  },
  org_id:{
  	type:Sequelize.STRING
  }
});
// schema.build({
//   name : 'test event !!',
// })
//   .save()
//   .then(() => {
//     console.log(`saved`);
//   })
//   .catch((err) => {
//     console.log(`not saved saved ${err}`);
//   })
// schema.sync({ alter: true })
//   .then((data) => {
//     console.log('Events table created successfuly');
//   })
//   .catch((err) => {
//     console.log(err)
//   })

module.exports = schema;