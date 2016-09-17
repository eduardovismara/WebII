var series = [
  {
  	_id: 1, nome: 'The Walging Dead', categoria: 'Ação'
  },
  {
  	_id: 2, nome: 'Stranger Things', categoria: 'Comédia'
  },
  {
  	_id: 3, nome: 'Vikings', categoria: 'Terror'
  },
  {
  	_id: 4, nome: 'Prison Break', categoria: 'Suspense'
  },
  {
  	_id: 5, nome: 'Supernatural', categoria: 'Ação'
  }
];

module.exports = function(app){
	var controller = {};
  
	controller.listarSeries = function(req, res){
		res.json(series);
	};

	controller.obterSerieID = function(req, res){
		var idSerie = req.params.id;
		var serie = series.filter(function(serie){
			return serie._id == idSerie;
		})[0];
		serie ?
		res.json(serie) :
		res.status(404).send('Série não encontrada!');

	};

  controller.obterSerieNome = function(req, res){
    var nome = req.params.nome;
    var serie = series.filter(function(serie){
      return serie.nome == nome;
    })[0];
    serie ?
    res.json(serie) :
    res.status(404).send('Série não encontrado!');

  };
	return controller;
}