export const Orgs = sequelize.define('Orgs', {
  Name: {
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