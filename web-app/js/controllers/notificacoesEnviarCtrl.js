angular.module('gcPanel').controller('notificacoesEnviarCtrl', function ($scope, notificacoes) {
    $scope.notificacao = {};

    $scope.cadastrar = function (notificacao) {
        notificacao.data = new Date().getDate() + '/' + (new Date().getMonth() + 1) + '/' + new Date().getFullYear();
        notificacao.hora = new Date().getHours() + ':' + new Date().getMinutes(); 
        var promise = notificacoes.cadastrar(notificacao);
        promise.then(function (resultado) {
            $scope.notificacao = {};
            alert('Mensagem enviada aos usuários');
        });
        promise.catch(function (err) {
            alert('Nao foi possivel enviar a mensagem');
        });
    };
});