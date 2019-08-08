angular.module('gcPanel').controller('materiaisVisualizarCtrl', function ($scope, materiais) {
    $scope.material = {};

    var promise = materiais.listar();
    promise.then(function (response) {
        $scope.materiais = response.data;
    });
    promise.catch(function (err) {
        alert('Nao foi possivel buscar os materiais cadastrados');
    });

    /*$scope.excluir = function (material) {
        console.log(material);
        var promise = materiais.excluir(material);
        promise.then(function (resultado) {
            //$scope.material = {};
            alert('Material excluído com sucesso');
        });
        promise.catch(function (err) {
            alert('Nao foi possivel excluir o material');
        });
    };*/
});