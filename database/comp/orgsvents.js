module.exports = sequelize.define('Events', {
  event_id: {
    type: Sequelize.STRING
  },
  user_id:{
  	type:Sequelize.STRING
  },
  org_id:{
  	type:Sequelize.STRING
  }
});