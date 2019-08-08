var materiaisValidados = require('./materiaisValidados');

var cadastrar = function(req, res) {
    var materialValidado = req.body;
    materiaisValidados.cadastrar(materialValidado, function(resultado) {
        res.status(201).json(resultado);
    }, function(erro) {
        res.status(400).json(erro);
    });
};

var listar = function(req, res) {
    materiaisValidados.listar(req.body.email, function(materiaisValidados) {
        res.status(200).json(materiaisValidados);
    }, function(erro) {
        res.status(400).json(erro);
    });
}

/*var listar = function(req, res) {
    materiais.listar(function(materiais) {
        res.status(200).json(materiais);
    }, function(erro) {
        res.status(400).json(erro);
    });
}*/

/*var autenticar = function(req, res) {
    usuarios.autenticar(req.body.email, req.body.senha, function(usuario) {
        res.status(200).json(usuario);
    }, function(erro) {
        res.status(400).json(erro);
    });
}*/

exports.cadastrar = cadastrar;
exports.listar = listar;
//exports.buscar = buscar;
//exports.autenticar = autenticar;