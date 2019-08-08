var usuariosapp = require('./usuariosapp');

var editar = function (req, res) {
    usuariosapp.editar(req.body.email, req.body.pontuacao, function (usuariosapp) {
        res.status(200).json(usuariosapp);
    }, function (erro) {
        res.status(400).json(erro);
    });
}

var listar = function (req, res) {
    usuariosapp.listar(function (usuariosapp) {
        res.status(200).json(usuariosapp);
    }, function (erro) {
        res.status(400).json(erro);
    });
}

exports.editar = editar;
exports.listar = listar;
