'use strict';

const walk = require('walk');

module.exports.init = function(cb) {
	var walker  = walk.walk(__dirname, { followLinks: false });
	walker.on('file', function(root, stat, next) {
		if(stat.name != 'index.js') {
			require('./' + stat.name);
		}
	 	next();
	});	
	walker.on('end', function() {
		cb();
	});
}