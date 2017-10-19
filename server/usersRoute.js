const Users = require('../database/comp/users.js');

module.exports = {
  get : {
    '/' : (req, res, cb) => {
      Users.find({})
        .then((data) => {
          cb(data);
        })
        .catch((err) => {
          console.log('error getting users : ' , err);
          cb([]);
        })
    },
    '/signout' : (req, res, cb) => {
      req.session.destroy((err) => {
        if (err) {
          console.log('error destroying session !!');
          cb(false);
        } else {
          cb(true);
        }
      })
    }
  },
  post : {
    '/signin' : (req, res, cb) => {
      var info = req.body;
      //check db for user 
      Users.find({where : {name : info.name , password : info.password}})
        .then((user) => {
          console.log('signing in for : ', user.get('name') , ' : ' , !!user);
          cb(!!user);
        })
        .catch((err) => {
          cb('err =========> '+err);          
        })
    },
    '/signup' : (req, res, cb) => {
      var info = req.body;
      console.log(info);
      Users.build(info)
        //add info to db ..
        .save()
        .then(() => {
          cb(`recieved user : ${info} and saved`);
        })
        .catch(() => {
          cb(`recieved user : ${info} but not saved saved`);
        })      
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
 
*/