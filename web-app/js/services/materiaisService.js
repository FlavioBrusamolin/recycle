angular.module('gcPanel').factory('materiais', function ($http) {
    var cadastrar = function (material) {
        return $http.post('http://localhost:9090/v1/materiais', material);
    };

    var listar = function () {
        return $http.get('http://localhost:9090/v1/materiais');
    };

    var buscar = function (tipo) {
        var auth = { tipo: tipo };
        return $http.post('http://localhost:9090/v1/materiais/buscar', auth);
    };

    /*var excluir = function (material) {
        console.log(material);
        //var ex = { _id:_id };
        return $http.post('http://localhost:9090/v1/materiais/excluir', material);
    };*/

    return {
        cadastrar: cadastrar,
        listar: listar,
        buscar: buscar
        //excluir: excluir
    }
});