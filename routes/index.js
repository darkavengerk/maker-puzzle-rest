// ROUTERS
module.exports.init = function(app) {
	app.use('/users', require('./user/'));
	return app;	
}
