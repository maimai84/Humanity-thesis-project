const {Users, Events, Orgs} = require('../database/main.js');
var express , {router} = require('express');
var doo = require('./controllers.js');
const routerer = router();

routerer.route('/someEndPoint')
	.get(doo.someFuncInsideControllers)
	.post(doo.anotherFunc)

module.exports = routerer;