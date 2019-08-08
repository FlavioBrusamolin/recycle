angular.module('gcPanel').controller('notificacoesVisualizarCtrl', function ($scope, notificacoes) {
    $scope.notificacao = {};

    var promise = notificacoes.listar();
    promise.then(function (response) {
        $scope.notificacoes = response.data;
    });
    promise.catch(function (err) {
        alert('Nao foi possivel buscar as notificações cadastradas');
    });
});