var notificacoes = require('./notificacoes');

var cadastrar = function(req, res) {
    var notificacao = req.body;
    notificacoes.cadastrar(notificacao, function(resultado) {
        res.status(201).json(resultado);
    }, function(erro) {
        res.status(400).json(erro);
    });
};

var listar = function (req, res) {
    notificacoes.listar(function (notificacoes) {
        res.status(200).json(notificacoes);
    }, function (erro) {
        res.status(400).json(erro);
    });
}

exports.cadastrar = cadastrar;
exports.listar = listar;