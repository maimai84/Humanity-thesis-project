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


/*
CREATE TABLE [users] (
  [name] NVARCHAR(40) ,
  [id] INT IDENTITY (1, 1) ,
  [password] NVARCHAR(20) ,
  [email] NVARCHAR(200) ,
  [rate] INT(10) , 
 PRIMARY KEY ([id])
) ON [PRIMARY]
GO

CREATE TABLE [event] (
  [id] INT IDENTITY (1, 1) ,
  [name] NVARCHAR(50) ,
  [location] NVARCHAR(200) ,
  [description] NVARCHAR(200) ,
  [team] NVARCHAR(200) ,
  [id_orgs] INT , 
 PRIMARY KEY ([id])
) ON [PRIMARY]
GO

CREATE TABLE [orgs] (
  [id] INT IDENTITY (1, 1) ,
  [name] NVARCHAR(100) ,
  [email] NVARCHAR(200) ,
  [password] NVARCHAR(20) ,
  [description] NVARCHAR(200) ,
  [rate] INT(10) , 
 PRIMARY KEY ([id])
) ON [PRIMARY]
GO

CREATE TABLE [eventuser] (
  [id] INT IDENTITY (1, 1) ,
  [id_event] INT ,
  [id_users] INT , 
 PRIMARY KEY ([id])
) ON [PRIMARY]
GO

ALTER TABLE [event] ADD FOREIGN KEY (id_orgs) REFERENCES [orgs] ([id]);
        
ALTER TABLE [eventuser] ADD FOREIGN KEY (id_event) REFERENCES [event] ([id]);
        
ALTER TABLE [eventuser] ADD FOREIGN KEY (id_users) REFERENCES [users] ([id]);
*/