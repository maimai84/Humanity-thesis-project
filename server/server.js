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

app.get('/', (req, res) => {
  res.send('i have nothing to the main page ammar !!!');
})

//users router for now ...
var usersRouter = require('./usersRoute.js');
app.get('/users', (req, res) => {
  usersRouter['get']['/'](req, res, (data) => {
    res.send(data);
  });
})
app.get('/users/signout', (req, res) => {
  usersRouter['get']['/signout'](req, res, (data) => {
    res.send(data);
  });
})
app.post('/users/signin', (req, res) => {
  usersRouter['post']['/signin'](req, res, (data) => {
    //create the session here ....
    console.log(data)
    if (data) {
      req.session.username = req.body.username;
      req.session.password = req.body.password;
      console.log('session : ', req.session);
      res.send('"signed in"');
    } else {
      res.send('"not signed in"');
    }
  });
});
app.post('/users/signup', (req, res) => {
  console.log('inside server .. redirecting to ordered route ..');
  usersRouter['post']['/signup'](req, res, (data) => {
    res.send(data);
  });
});

//orgs router for now ...
var orgsRouter = require('./orgsRoute.js');
app.get('/orgs/', (req, res) => {
  orgsRouter['get']['/'](req, res, (data) => {
    res.send(data);
  });
})
app.get('/orgs/signout', (req, res) => {
  orgsRouter['get']['/signout'](req, res, (data) => {
    res.send(data);
  });
})
app.post('/orgs/signin', (req, res) => {
  orgsRouter['post']['/signin'](req, res, (data) => {
    //create the session here ....
    if (data) {
      req.session.username = req.body.name;
      req.session.password = req.body.password;
      console.log('session : ', req.session);
      res.send('"signed in"');
    } else {
      res.send('"not signed in"');
    }
  });
});
app.post('/orgs/signup', (req, res) => {
  orgsRouter['post']['/signup'](req, res, (data) => {
    res.send(data);
  });
});

//events router for now ...
var eventsRouter = require('./eventsRoute.js');
app.get('/events/', (req, res) => {
  eventsRouter['get']['/'](req, res, (data) => {
    res.send(data);
  });
})
app.post('/events/create', (req, res) => {
  eventsRouter['post']['/create'](req, res, (data) => {
    res.send(data);
  });
});




var port = process.env.PORT || 3336
var listener = app.listen(port , () => {
	const { address, port } = listener.address();
	console.log(`listining on http://${address}:${port}`);
});


