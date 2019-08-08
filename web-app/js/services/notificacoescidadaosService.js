angular.module('gcPanel').factory('notificacoescidadaos', function ($http) {
    var listar = function () {
        return $http.get('http://localhost:9090/v1/notificacoescidadaos');
    };

    return {
        listar: listar
    }
});