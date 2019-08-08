angular.module('gcPanel').controller('materiaisCadastroCtrl', function ($scope, materiais) {
    $scope.material = {};

    $scope.cadastrar = function (material) {
        var promise = materiais.cadastrar(material);
        promise.then(function (resultado) {
            $scope.material = {};
            alert('Cadastro realizado com sucesso');
        });
        promise.catch(function (err) {
            alert('Nao foi possivel realizar o cadastro');
        });
    };
});