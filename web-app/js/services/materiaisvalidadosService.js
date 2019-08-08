angular.module('gcPanel').factory('materiaisvalidados', function ($http) {
    var listar = function () {
        return $http.get('http://localhost:9090/v1/materiaisvalidados');
    };

    var editar = function (_id) {
        var auth = { _id: _id };
        return $http.post('http://localhost:9090/v1/materiaisvalidados/editar', auth);
    };

    return {
        listar: listar,
        editar: editar
    }
});