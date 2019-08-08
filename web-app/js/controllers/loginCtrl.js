angular.module('gcPanel').controller('loginCtrl', function ($scope, usuarios) {
	$scope.usuario = {};

	$scope.entrar = function (usuario) {
		var promise = usuarios.autenticar(usuario.email, usuario.senha);
		promise.then(function (retorno) {
			window.location.replace("#!/mapa");
		});
		promise.catch(function (err) {
			$scope.usuario = {};
			alert('O e-mail ou a senha estao incorretos.');
		});
	};

	$scope.cadastro = function () {
		window.location.replace("#!/cadastro");
	};
});