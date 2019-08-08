var materiais = require('./materiais');

var cadastrar = function (req, res) {
    var material = req.body;
    materiais.cadastrar(material, function (resultado) {
        res.status(201).json(resultado);
    }, function (erro) {
        res.status(400).json(erro);
    });
};

var listar = function (req, res) {
    materiais.listar(function (materiais) {
        res.status(200).json(materiais);
    }, function (erro) {
        res.status(400).json(erro);
    });
}

var buscar = function (req, res) {
    materiais.buscar(req.body.tipo, function (materiais) {
        res.status(200).json(materiais);
    }, function (erro) {
        res.status(400).json(erro);
    });
}

exports.cadastrar = cadastrar;
exports.listar = listar;
exports.buscar = buscar;