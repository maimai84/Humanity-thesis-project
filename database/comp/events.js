export const Events = sequelize.define('Events', {
  Name: {
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
  organazation:{
  	type:Sequelize.STRING
  }
});