const Events = require('../database/comp/events.js');

module.exports = {
  get : {
      '/' : (req, res, cb) => {
        Events.findAll()
          .then((data) => {
            cb(true, data);
          })
          .catch((err) => {
            console.log('error getting Events : ' , err);
            cb(false, []);
          })
      }
  },
  post : {
    '/create' : (req, res) => {
      var event = req.body;
      console.log('info of event to create : ', event);
      Events.build(event)
        .save()
        .then((ev) => {
          var m = `recieved event : ${event} and saved`;
          console.log(m);
          cb(true , m);
        })
        .catch((err) => {
          var m = `error saving event : ${event} - sign up coz : ${err.message}`;
          console.log(m);
          cb(false , m);
        })
    }
  }
}

/*

User.findOne()
data.destroy({}) 
data.updateAttributes({key : val})


.................................
User.findOne().then(user => {
  console.log(user.get('firstName'));
}); 
or
user = await User.findOne()
console.log(user.get('firstName'));
 ................................
.................................


Item.find({where:{name:'Laptop'}}).complete(function (err, data) {
  if(err){
    console.log(err);
  }
  if(data){
      data.destroy({}) or 
    data.updateAttributes({
        name:'Computer'
      }).success(function (data1) {
        console.log(data1);
      })
 }
});

*/