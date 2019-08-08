var NotificacaoCidadao = require('./modelo');

var cadastrar = function(notificacaocidadao, quandoSalvar, quandoDerErro) {
    new NotificacaoCidadao(notificacaocidadao).save(function(err, resultados) {
        if(err) {
            quandoDerErro(err);
        }
        else {
            quandoSalvar(resultados);
        }
    });
}

exports.cadastrar = cadastrar;