'use strict';

// ENV
require('dotenv').config();
// DEPENDENCIES
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 8281;

// Static File Service
app.use(express.static('public'));
// Body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// hash preproce
app.use(function(req, res, next) {
  if(req.body['hash']) {
		var hashes = req.body['hash'].split('#');
		var tags = [];
		for(var i in hashes) {
			var tag = hashes[i].trim();
			if(tag) {
				tags.push(tag);
			}
		}
		req.body['hash'] = tags;
	}
  next();
});

var db = require('./models').init(function(err){
	require('./routes').init(app);
	app.listen(port, () => console.log(`Server listening on port ${port}`));	
});


