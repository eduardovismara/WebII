angular.module('produtos').controller('loginController', ['$scope', '$http', '$location', function ($scope, $http, $location) {
      $scope.user = {};

      $scope.login = login;
      function login () {
        if ($scope.formulario.$valid) {
            if ($scope.user.username == 'admin' & $scope.user.password == '123'){
              $location.path('/admin');
            }else if ($scope.user.username == 'cliente' & $scope.user.password == '123'){
              $location.path('/produtos');
            }else{
              $scope.mensagem = 'Login Inválido';
            }

        };

      }      
}]);