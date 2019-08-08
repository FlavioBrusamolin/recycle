var NotificacaoCidadao = require('./modelo');

var listar = function (quandoListar, quandoDerErro) {
    NotificacaoCidadao.find()
        .select({ mensagem: true, data: true, hora: true, nome: true, telefone: true, _id: false })
        .exec(function (err, notificacoescidadaos) {
            if (err) {
                quandoDerErro(err);
            }
            else {
                quandoListar(notificacoescidadaos);
            }
        });
}

exports.listar = listar;