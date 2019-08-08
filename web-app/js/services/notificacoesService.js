angular.module('gcPanel').factory('notificacoes', function ($http) {
    var cadastrar = function (notificacao) {
        return $http.post('http://localhost:9090/v1/notificacoes', notificacao);
    };

    var listar = function () {
        return $http.get('http://localhost:9090/v1/notificacoes');
    };

    return {
        cadastrar: cadastrar,
        listar: listar
    }
});