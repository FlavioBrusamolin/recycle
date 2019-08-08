angular.module('gcPanel').controller('validacaoCtrl', function ($scope, materiaisvalidados, materiais, usuariosapp, $rootScope) {
    $scope.materialvalidado = {};

    pontuacao = "";

    var promise = materiaisvalidados.listar();
    promise.then(function (response) {
        // console.log(response.data);
        $scope.materiaisvalidados = response.data;
    });
    promise.catch(function (err) {
        alert('Nao foi possivel buscar os materiais a serem validados');
    });

    $scope.validar = function (tipo, quantidade, email, _id) {
        // console.log(_id);
        var promise = materiaisvalidados.editar(_id);
        promise.then(function (response) {
            alert('Material validado com sucesso');
        });
        promise.catch(function (err) {
            alert('Nao foi possivel validar o material');
        });

        var promise = materiais.buscar(tipo, quantidade);
        promise.then(function (response) {
            pontuacao = (response.data.pontuacao * quantidade);
            var promise = usuariosapp.editar(email, pontuacao);
            console.log(pontuacao);
            promise.then(function (response) {
                alert('Pontos enviados ao usuario');
            });
            promise.catch(function (err) {
                alert('Nao foi possivel enviar os pontos ao usuario');
            });
        });
    }

    $scope.vermapa = function (local, nome) {
        $rootScope.localmapa = local;
        $rootScope.nomemapa = nome;
        $rootScope.localrequest = 1;
        window.location.replace("#!/mapa");
    }
});