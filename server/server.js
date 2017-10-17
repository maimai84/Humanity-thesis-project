
var express    = require("express");

 var app = express();


 app.get("/",function(req,res){
 connection.query('SELECT * from user LIMIT 2', function(err, rows, fields) {
 connection.end();
   if (!err)
     console.log('The solution is: ', rows);
   else
     console.log('Error while performing Query.');
   });
 });
  app.listen(3000);