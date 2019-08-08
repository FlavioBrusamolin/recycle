var notificacoescidadaos = require('./notificacoescidadaos');

var cadastrar = function(req, res) {
    var notificacaocidadao = req.body;
    notificacoescidadaos.cadastrar(notificacaocidadao, function(resultado) {
        res.status(201).json(resultado);
    }, function(erro) {
        res.status(400).json(erro);
    });
};

exports.cadastrar = cadastrar;