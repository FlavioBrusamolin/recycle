angular.module('gcPanel').controller('notificacoesCidadaoCtrl', function ($scope, notificacoescidadaos) {
    $scope.notificacaocidadao = {};

    var promise = notificacoescidadaos.listar();
    promise.then(function (response) {
        $scope.notificacoescidadaos = response.data;
    });
    promise.catch(function (err) {
        alert('Nao foi possivel buscar as notificações enviadas pelos usuários');
    });
});