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
    resave: false,
    saveUninitialized: true
}));

//for sessions
var cookieParser = require('cookie-parser'); 
app.use(cookieParser());

//users router for now ...
var usersRouter = require('./usersRoute.js');
app.use('/users', usersRouter);

//orgs router for now ...
var orgsRouter = require('./orgsRoute.js');
app.use('/orgs', orgsRouter);

//events router for now ...
var eventsRouter = require('./eventsRoute.js');
app.use('/events', eventsRouter);

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


var port = process.env.PORT || 3333
var listener = app.listen(port , () => {
	const { address, port } = listener.address();
	console.log(`listining on http://${address}:${port}`);
});


