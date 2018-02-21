const mongoose = require('mongoose');
const walk = require('walk');

// Node.js의 native Promise 사용
mongoose.Promise = global.Promise;

// CONNECT TO MONGODB SERVER
mongoose.connect(process.env.MONGO_URI, {})
  .then(() => console.log('Successfully connected to mongodb'))
  .catch(e => console.error(e));

///////////////////////////////////////////////////////////////////////////////////////////////
// Load modules by directories
// This assumes the depth of the module structure is only one.
// Because this Walk library will load every directory regardless of the depth
var walker  = walk.walk(__dirname, { followLinks: false });
walker.on('directory', function(root, stat, next) {
	require('./' + stat.name);
 	next();
});


