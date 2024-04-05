const express = require('express');
const port = 8080;
const app = express();


const db = require('./backend/config/mongoose');
const User = require('./backend/models/user');
const mongostorre = require('connect-mongo');


app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);
app.use('/',require('./backend/routes'));


app.listen(port, function(err){
	if(err){
		console.error(err);
	}
	console.log('server is running on port: ',port);
});
