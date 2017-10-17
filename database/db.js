 const User = sequelize.define('user', {
  name: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  },
  email:{
  	type:Sequelize.STRING
  },
  rate:{
  	type:Sequelize.STRING
  }
});
const Event = sequelize.define('event', {
  Name: {
    type: Sequelize.STRING
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
const Event = sequelize.define('event', {
  Name: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.STRING
  },
  password:{
  	type:Sequelize.STRING
  },
  email:{
  	type:Sequelize.STRING
  },
});
