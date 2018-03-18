'use strict';

// ROUTERS
module.exports.init = function(app) {
	app.use('/users', require('./user/'));
	app.use('/company', require('./company/'));
	app.use('/project', require('./project/'));
	app.use('/portfolio', require('./portfolio/'));
	app.use('/misc', require('./misc/'));
	return app;	
}
