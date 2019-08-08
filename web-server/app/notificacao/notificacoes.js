var Notificacao = require('./modelo');

var cadastrar = function(notificacao, quandoSalvar, quandoDerErro) {
    new Notificacao(notificacao).save(function(err, resultados) {
        if(err) {
            quandoDerErro(err);
        }
        else {
            quandoSalvar(resultados);
        }
    });
}

var listar = function (quandoListar, quandoDerErro) {
    Notificacao.find()
        .select({ mensagem: true, data: true, hora: true, _id: false })
        .exec(function (err, notificacoes) {
            if (err) {
                quandoDerErro(err);
            }
            else {
                quandoListar(notificacoes);
            }
        });
}

exports.cadastrar = cadastrar;
exports.listar = listar;