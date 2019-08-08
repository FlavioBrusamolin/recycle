var Usuarioapp = require('./modelo');

var editar = function (email, pontuacao, quandoEditar, quandoDerErro) {
    Usuarioapp.findOne({ email: email })
        .exec(function (err, usuariosapp) {
            if (err) {
                quandoDerErro(err);
            }
            else {
                usuariosapp.pontuacao = usuariosapp.pontuacao + pontuacao;
                usuariosapp.save();
                quandoEditar(usuariosapp);
            }
        });
}

var listar = function (quandoListar, quandoDerErro) {
    Usuarioapp.find()
        .select({ nome: true, pontuacao: true, _id: false })
        .exec(function (err, usuariosapp) {
            if (err) {
                quandoDerErro(err);
            }
            else {
                quandoListar(usuariosapp);
            }
        });
}

exports.editar = editar;
exports.listar = listar;


