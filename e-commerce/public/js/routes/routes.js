angular.module('produtos').config(['$routeProvider',function ($routeProvider) {

    $routeProvider.when('/login', {
      templateUrl: 'partials/login.html',
      controller: 'loginController'
    });

    $routeProvider.when('/admin', {
      templateUrl: 'partials/admin.html',
      controller: 'produtosController'
    });


    $routeProvider.when('/produtos', {
      templateUrl: 'partials/produtos.html',
      controller: 'produtosController'
    });

    $routeProvider.when('/produtos/new',{
      templateUrl: 'partials/formulario.html',
      controller: 'produtoController'
    });

    $routeProvider.when('/produtos/:id',{
      templateUrl: 'partials/formulario.html',
      controller: 'produtoController'
    });


    $routeProvider.otherwise(
        {redirectTo: '/login'});
  }]);
