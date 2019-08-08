var materiaisvalidados = require('./materiaisvalidados');

var listar = function (req, res) {
    materiaisvalidados.listar(function (materiaisvalidados) {
        res.status(200).json(materiaisvalidados);
    }, function (erro) {
        res.status(400).json(erro);
    });
}

var editar = function (req, res) {
    materiaisvalidados.editar(req.body._id, function (materiaisvalidados) {
        res.status(200).json(materiaisvalidados);
    }, function (erro) {
        res.status(400).json(erro);
    });
}

exports.listar = listar;
exports.editar = editar;