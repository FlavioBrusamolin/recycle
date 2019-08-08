angular.module("gcPanel").config(function($routeProvider) {
	$routeProvider.when("/login", {
		templateUrl:"view/login.html",
		controller:"loginCtrl"
	});

	$routeProvider.when("/mapa", {
		templateUrl:"view/mapa.html",
		controller:"mapaCtrl"
	});
	
	$routeProvider.when("/cadastro", {
		templateUrl:"view/cadastro.html",
		controller:"cadastroCtrl"
	});

	$routeProvider.when("/materiais/cadastro", {
		templateUrl:"view/materiaisCadastro.html",
		controller:"materiaisCadastroCtrl"
	});

	$routeProvider.when("/materiais/visualizar", {
		templateUrl:"view/materiaisVisualizar.html",
		controller:"materiaisVisualizarCtrl"
	});

	$routeProvider.when("/validacao", {
		templateUrl:"view/validacao.html",
		controller:"validacaoCtrl"
	});

	$routeProvider.when("/notificacao/cadastro", {
		templateUrl:"view/notificacoesEnviar.html",
		controller:"notificacoesEnviarCtrl"
	});

	$routeProvider.when("/notificacao/visualizar", {
		templateUrl:"view/notificacoesVisualizar.html",
		controller:"notificacoesVisualizarCtrl"
	});

	$routeProvider.when("/eventos/cadastro", {
		templateUrl:"view/eventosCadastro.html",
		controller:"eventosCadastroCtrl"
	});

	$routeProvider.when("/eventos/visualizar", {
		templateUrl:"view/eventosVisualizar.html",
		controller:"eventosVisualizarCtrl"
	});

	$routeProvider.when("/ranking", {
		templateUrl:"view/ranking.html",
		controller:"rankingCtrl"
	});

	$routeProvider.when("/notificacao/cidadao", {
		templateUrl:"view/notificacoesCidadao.html",
		controller:"notificacoesCidadaoCtrl"
	});
    	
	$routeProvider.otherwise({redirectTo:"/login"});
});