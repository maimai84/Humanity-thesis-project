module.exports = sequelize.define('Events', {
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