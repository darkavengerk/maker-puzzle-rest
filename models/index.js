'use strict';

const mongoose = require('mongoose');
const walk = require('walk');
const fs = require('fs');

module.exports.init = function(mode, cb) {

	// Node.js의 native Promise 사용
	mongoose.Promise = global.Promise;

	fs.readFile('keys.json', 'utf8', function(err, data) {
		const keys = JSON.parse(data).db[mode];
		let uri;

		if(keys.auth) {
		  const user = keys.username;
			const password = keys.password;
			const port = keys.port;
			const address = keys.addr;
			const db = keys.db;
			uri = `mongodb://${encodeURIComponent(user)}:${encodeURIComponent(password)}@${address}:${port}/${db}`
			console.log(uri);
		}
		else {
			uri = keys.uri;
		}		

		// CONNECT TO MONGODB SERVER
		mongoose.connect(uri, {})
		  .then(() => console.log('Successfully connected to mongodb'))
		  .catch(e => console.error(e));

		///////////////////////////////////////////////////////////////////////////////////////////////
		// Load modules by directories
		// This assumes the depth of the module structure is only one.
		// Because this Walk library will load every directory regardless of the depth
		var walker  = walk.walk(__dirname, { followLinks: false });
		walker.on('directory', function(root, stat, next) {
			require('./' + stat.name).init(next);
		});

		walker.on("end", function () {
			console.log('Mongoose loaded');
	    cb(null);
	  });
	});
}




