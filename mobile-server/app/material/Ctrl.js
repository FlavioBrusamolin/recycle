var materiais = require('./materiais');

/*var cadastrar = function(req, res) {
    var material = req.body;
    materiais.cadastrar(material, function(resultado) {
        res.status(201).json(resultado);
    }, function(erro) {
        res.status(400).json(erro);
    });
};*/

var listar = function(req, res) {
    materiais.listar(function(materiais) {
        res.status(200).json(materiais);
    }, function(erro) {
        res.status(400).json(erro);
    });
}

/*var buscar = function(req, res) {
    var tipo = req.params.tipo;
    materiais.buscar(tipo, function(material) {
        res.status(200).json(material);
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

//exports.cadastrar = cadastrar;
exports.listar = listar;
//exports.buscar = buscar;
//exports.buscar = buscar;
//exports.autenticar = autenticar;