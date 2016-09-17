angular.module('produtos')
  .controller('produtosController', ['$scope', '$http',
    function ($scope, $http) {
      $scope.total = 0;
      $scope.filtro = '';
      $scope.sortValue = 'nome';
      $scope.order = false;
      $scope.carrinho = [];

      $scope.produtos = [];

      $http.get('api/produtos')
        .success(function (data) {
          $scope.produtos = data;
        })
        .error(function (statusText) {
          console.log(statusText);
        });

      $scope.sort = sort;
      function sort (fild) {
        $scope.sortValue = fild;
        $scope.order = !$scope.order;
      }

      $scope.del = del;
      function del (id) {
        $http.delete('api/produtos/' + id)
          .success(function () {
            console.log('produto deletado com sucesso');

            $http.get('api/produtos')
              .success(function (data) {
                $scope.produtos = data;
              })
              .error(function (statusText) {
                console.log(statusText);
              });

          }).error(function (statusText) {
          console.log(statusText);
        });
      }


    $scope.addCarrinho = addCarrinho;
    function addCarrinho(produto){
      encontrou = 'N';
      $scope.carrinho.forEach(function(element, index, array){
        if(element._id === produto._id){
            produto.qtd=produto.qtd+1;    
            encontrou = 'S';
        }
      });

      if (encontrou === 'N'){
        produto.qtd=1;
        $scope.carrinho.push(produto);
      }

    }

    $scope.remCarrinho = remCarrinho;
    function remCarrinho(id){
          $scope.carrinho.forEach(function(element, index, array){
            if(element._id === id){
                $scope.carrinho.splice(index,1);
            }
          });
    }

    }]);
