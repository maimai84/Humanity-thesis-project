const Events = require('../database/comp/events.js');

module.exports = {
	get : {
		'/' : (req, res) => {
			console.log('inside get/events/ ...');
			//should get all event in db
			res.send('hi there');
		}
	},
	post : {
		'/anotherEndPoint' : (req, res) => {

		}
	}
}

/*
findAll()
find({where : {key : val} })
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
User.findAll().then(users => {
  console.log(users)
})
.................................
Item.find({}).complete(function (err,data) {
    console.log(data);
});
//With where condition
    Item.find({where:{name:'Laptop'}}).complete(function (err, data) {
   console.log(data);
});

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