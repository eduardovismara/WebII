module.exports = function (app) {
  var controller = {};
  var Produtos = app.models.produto;

  /**
   * fucao que listas todos os produtos
   */
  controller.listaProdutos = function (req, res) {
    Produtos.find().exec()
      .then(
        function (produtos) {
          res.json(produtos);
        },
        function (erro) {
          console.error(erro);
          res.status(500).json(erro);
        }
    );

  };

  /**
   * funcao que lista o produto pelo id 
   */
  controller.listaProdutoId = function (req, res) {
    var _id = req.params.id;
    Produtos.findById(_id).exec()
      .then(function (produto) {
        if (!produto) throw new Error('Produto não encontrado');
        res.json(produto);
      },
        function (erro) {
          console.log(erro);
          res.status(404).json(erro);
        }
    );
  };

  /**
   * funcao que adciona um produto
   */
  controller.addProduto = function (req, res) {
    var produto = req.body;
    Produtos.create(produto,
      function (erro, produto) {
        if (erro) {
          console.log(erro);
          res.status(500).json(erro);
        }
        res.status(201).json(produto);
      });
  };

  controller.deleteProduto = function (req, res) {
    var query = {'_id': req.params.id};
    Produtos.remove(query, function (erro) {
      if (erro) {
        console.error(erro);
        res.status(500).json(erro);
      } else {
        res.status(204).end();

      }
    });
  };

  controller.updateProduto = function (req, res) {
    var id = req.params.id;
    Produtos.findByIdAndUpdate(id, req.body,
      function (erro, produto) {
        if (erro) {console.error(erro);
          res.status(500).json(erro);} else {
          res.json(produto);
        }
      });

  };

  return controller;
};
