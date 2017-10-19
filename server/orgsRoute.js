const Orgs = require('../database/comp/orgs.js');

module.exports = {
  get : {
    '/' : (req, res, cb) => {
      Orgs.findAll()
        .then((data) => {
          cb(data);
        })
        .catch((err) => {
          console.log('error getting Orgs : ' , err);
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
      //check db for org 
      Orgs.find({where : {name : info.name , password : info.password}})
        .then((user) => {
          console.log('signing in for : ', user.get('name'));
          cb(!!user);
        })
        .catch((err) => {
          cb(false);          
        })
    },
    '/signup' : (req, res, cb) => {
      var info = req.body;
      console.log('info : ', info);
      Orgs.build(info)
        //add info to db ..
        .save()
        .then(() => {
          cb(`recieved org : ${info} and saved`);
        })
        .catch(() => {
          cb(`recieved org : ${info} but not saved `);
        })      
    }
  }
}
