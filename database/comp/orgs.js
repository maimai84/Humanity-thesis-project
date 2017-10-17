module.exports = sequelize.define('Orgs', {
  name: {
    type: Sequelize.STRING,
    allowNull:false,
    uniqe:true
  },
  description: {
    type: Sequelize.STRING
  },
  password:{
  	type:Sequelize.STRING,
    allowNull:false
  },
  email:{
  	type:Sequelize.STRING
  },
  rate:{
  	type:Sequelize.STRING
  },
 
});