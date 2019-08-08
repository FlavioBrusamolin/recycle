angular.module('gcPanel').factory('usuariosapp', function ($http) {
    var editar = function (email, pontuacao) {
        var editpts = { email: email, pontuacao: pontuacao };
        return $http.post('http://localhost:9090/v1/usuariosapp/editar', editpts);
    };

    var listar = function () {
        return $http.get('http://localhost:9090/v1/usuariosapp');
    };

    return {
        editar: editar,
        listar: listar
    }
});