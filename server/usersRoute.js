const Users = require('../database/comp/users.js');
const db = require('../database/main.js');
module.exports = {
  get : {
    '/' : (req, res) => {
      var allUsers =  Users.find({})
      allUsers
        .then((data) => {
          console.log('data : ', data);
          res.send(data);
        })
        .catch((err) => {
          console.log('error getting users : ' , err);
          res.send("[]");
        })
    }
  },
  post : {
    '/signup' : (req, res) => {
      var info = req.body;
      console.log(info);
      Users.build(info)
        .save()
        .then(() => {
          res.send(`recieved user : ${info} and saved`);
        })
        .catch(() => {
          res.send(`recieved user : ${info} but not saved saved`);
        })

      
      //add info to db ..
    }
  }
}

/*
var item1 = Item.build({
    id: 1,
    name:'Laptop',
    description: 'Acer 2340TL',
    qty: 23
});
//Inserting Data into database
item1.save().complete(function (err) {
 if (err) {
    console.log('Error in Inserting Record');
 } else {
    console.log('Data successfully inserted');
 }
});
 
//Other way: Immediate insertion of data into database
sequelize.sync().success(function () {
  Item.create({
     id: 2,
     name:'Cell Phone',
     description: 'Sony',
     qty: 20
  }).success(function (data) {
  console.log(data.values)
 })
});
*/