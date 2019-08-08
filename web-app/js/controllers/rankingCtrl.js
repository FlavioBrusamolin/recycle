angular.module('gcPanel').controller('rankingCtrl', function ($scope, usuariosapp) {
    $scope.users = {};

    var promise = usuariosapp.listar();
    promise.then(function (response) {
        $scope.userssort = response.data;
        $scope.userssort.sort(function (a, b) {
            return b.pontuacao - a.pontuacao;
        });
        //console.log($scope.userssort);
    });
    promise.catch(function (err) {
        alert('Nao foi possivel buscar as notificações cadastradas');
    });
});