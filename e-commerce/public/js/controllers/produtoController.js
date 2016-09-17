angular.module('produtos')
  .controller('produtoController', ['$scope', '$http', '$routeParams',
    function ($scope, $http, $routeParams) {      
      $scope.produto = {};
      $scope.mensagem = '';

      if ($routeParams.id) {
        $http.get('api/produtos/' + $routeParams.id)
          .success(function (produto) {
            $scope.produto = produto;
          })
          .error(function (erro) {
            console.log(erro);
            $scope.mensagem = 'Não foi possível obter';
          });
      }

      $scope.submeter = submeter;
      function submeter () {
        if ($scope.formulario.$valid) {
          if ($routeParams.id) {
            $http.put('/api/produtos/' + $scope.produto._id, $scope.produto)
              .success(function () {
                $scope.mensagem = 'Contato alterada com sucesso';
              }).error(function (erro) {
              console.log(erro);
              $scope.mensagem = 'Não foi possível alterar';
            });
          } else {
            $http.post('/api/produtos', $scope.produto)
              .success(function () {
                $scope.produto = {};
                $scope.mensagem = 'Foto cadastrada com sucesso';
              })
              .error(function (erro) {
                console.log(erro);
                $scope.mensagem = 'Não foi possível cadastrar a foto';
              }
            );
          }
        }
      }

    }]);