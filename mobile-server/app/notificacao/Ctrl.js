var notificacoes = require('./notificacoes');

var listar = function (req, res) {
    notificacoes.listar(function (notificacoes) {
        res.status(200).json(notificacoes);
    }, function (erro) {
        res.status(400).json(erro);
    });
}

exports.listar = listar;