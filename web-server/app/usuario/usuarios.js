var Usuario = require('./modelo');

var cadastrar = function (usuario, quandoSalvar, quandoDerErro) {
    new Usuario(usuario).save(function (err, resultados) {
        if (err) {
            quandoDerErro(err);
        }
        else {
            quandoSalvar(resultados);
        }
    });
}

var autenticar = function (email, senha, quandoEncontrar, quandoDerErro) {
    Usuario.findOne({ email: email, senha: senha })
        .exec(function (err, usuario) {
            if (err) {
                quandoDerErro(err);
            }
            else if (usuario) {
                quandoEncontrar(usuario);
            }
            else {
                quandoDerErro(new Error('Usuario invalido'));
            }
        });
}

exports.cadastrar = cadastrar;
exports.autenticar = autenticar;

