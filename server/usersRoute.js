const Users = require('../database/comp/users.js');

module.exports = {
  get : {
    '/' : (req, res, cb) => {
      Users.findAll()
        .then((data) => {
          console.log('found : ' , data.length , ' users ...');
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
      console.log('info :  ', info);
      Users.find({where : {username : info.username , password : info.password}})
        .then((user) => {
          cb(!!user);
        })
        .catch((err , user) => {
          cb(false);          
        })
    },
    '/signup' : (req, res, cb) => {
      var info = req.body;
      console.log(info);
      console.log(typeof info);
      Users.build(info)
        .save()
        .then((data) => {
          var m = "recieved user : " + data + " and saved !!"
          cb({message : m});
        })
        .catch((err) => {
          var m = "recieved user : " + info + " but not saved coz : " + err.message;
          cb({message : m});
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