// ROUTERS
module.exports.init = function(app) {
	app.use('/todos', require('./todo'));
	return app;	
}
