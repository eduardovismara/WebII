var express = require('express');
var load = require('express-load');

module.exports = function(){

	var app = express();
	 
	app.set('port', 3000);
    //middleware
	app.use(express.static('./public'));
	
    load('models')
       .then('controllers')
       .then('routes')
       .into(app);

	return app;
};