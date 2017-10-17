module.exports = sequelize.define('Users', {
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
