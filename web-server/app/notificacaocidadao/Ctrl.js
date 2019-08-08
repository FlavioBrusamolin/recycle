var notificacoescidadaos = require('./notificacoescidadaos');

var listar = function (req, res) {
    notificacoescidadaos.listar(function (notificacoescidadaos) {
        res.status(200).json(notificacoescidadaos);
    }, function (erro) {
        res.status(400).json(erro);
    });
}

exports.listar = listar;