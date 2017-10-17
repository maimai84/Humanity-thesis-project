import express from 'express';
const app = express();

import morgan from 'morgan'; //display req in terminal ..
app.use(morgan('dev'));

//APIs request , if needed
import request from 'request'; 

//read req body data 
import bodyParser from 'body-parser';  
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//passwords in/de-crypting ..
//import bcrypt from 'bcrypt'; 

//for log-in/out sessions
import session from 'express-session'; 
app.use(session({
    secret: "ptb",
    resave: false,
    saveUninitialized: true
}));

//for sessions
import cookieParser from 'cookie-parser'; 
app.use(cookieParser());

//users router for now ...
import usersRouter from './usersRoute.js';
app.use('/users', usersRouter);

//orgs router for now ...
import orgsRouter from './orgsRoute.js';
app.use('/orgs', orgsRouter);

//events router for now ...
import eventsRouter from './eventsRoute.js';
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


