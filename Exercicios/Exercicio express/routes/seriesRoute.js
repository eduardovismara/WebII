module.exports = function(app){

	var controller = app.controllers.seriesController;

	app.get('/series', controller.listarSeries);
	app.get('/series/id/:id', controller.obterSerieID);
	app.get('/series/nome/:nome', controller.obterSerieNome);
};