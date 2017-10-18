var express = require('express');
const app = express();

var morgan = require('morgan'); //display req in terminal ..
app.use(morgan('dev'));

//APIs request , if needed
var request = require('request'); 

//read req body data 
var bodyParser = require('body-parser');  
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//passwords in/de-crypting ..
//import bcrypt = require('bcrypt'; 

//for log-in/out sessions
var session = require('express-session'); 
app.use(session({
    secret: "ptb",
    resave: true,
    saveUninitialized: true
}));

//for sessions
var cookieParser = require('cookie-parser'); 
app.use(cookieParser());

// Add headers
app.use(function (req, res, next) {

   // Website you wish to allow to connect
   res.setHeader('Access-Control-Allow-Origin', '*');

   // Request methods you wish to allow
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

   // Request headers you wish to allow
   res.setHeader('Access-Control-Allow-Headers', '*');

   // Set to true if you need the website to include cookies in the requests sent
   // to the API (e.g. in case you use sessions)
   res.setHeader('Access-Control-Allow-Credentials', true);

   // Pass to next layer of middleware
   next();
});

//users router for now ...
var usersRouter = require('./usersRoute.js');
app.get('/users/*', (req, res) => {
  var subEndPoint = req.originalUrl.substring(6);
  console.log('inside server .. redirecting to ordered route ..' , subEndPoint);
  usersRouter['get'][subEndPoint](req, res);
});
app.post('/users/*', (req, res) => {
  var subEndPoint = req.originalUrl.substring(6);
  console.log('inside server .. redirecting to ordered route ..' , subEndPoint);
  usersRouter['post'][subEndPoint](req, res);
});

//orgs router for now ...
var orgsRouter = require('./orgsRoute.js');
app.get('/orgs/*', (req, res) => {
  var subEndPoint = req.originalUrl.substring(5);
  console.log('inside server .. redirecting to ordered route ..' , subEndPoint);
  eventsRouter['get'][subEndPoint](req, res);
});
app.post('/orgs/*', (req, res) => {
  var subEndPoint = req.originalUrl.substring(5);
  console.log('inside server .. redirecting to ordered route ..' , subEndPoint);
  eventsRouter['post'][subEndPoint](req, res);
});

//events router for now ...
var eventsRouter = require('./eventsRoute.js');
app.get('/events/*', (req, res) => {
  var subEndPoint = req.originalUrl.substring(7);
  console.log('inside server .. redirecting to ordered route ..' , subEndPoint);
  eventsRouter['get'][subEndPoint](req, res);
});
app.post('/events/*', (req, res) => {
  var subEndPoint = req.originalUrl.substring(7);
  console.log('inside server .. redirecting to ordered route ..' , subEndPoint);
  eventsRouter['post'][subEndPoint](req, res);
});


var port = process.env.PORT || 3336
var listener = app.listen(port , () => {
	const { address, port } = listener.address();
	console.log(`listining on http://${address}:${port}`);
});


