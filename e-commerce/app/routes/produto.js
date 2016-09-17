module.exports = function (app) {
    var controller = app.controllers.produto;

    //organnizacao das rotas
    app.route('/api/produtos')
        .get(controller.listaProdutos)
        .post(controller.addProduto);

    app.route('/api/produtos/:id')
        .get(controller.listaProdutoId)
        .delete(controller.deleteProduto)
        .put(controller.updateProduto);
}