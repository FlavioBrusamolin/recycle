var Notificacao = require('./modelo');

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

exports.listar = listar;