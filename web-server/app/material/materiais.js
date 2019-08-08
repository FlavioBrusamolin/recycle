var Material = require('./modelo');

var cadastrar = function (material, quandoSalvar, quandoDerErro) {
    new Material(material).save(function (err, resultados) {
        if (err) {
            quandoDerErro(err);
        }
        else {
            quandoSalvar(resultados);
        }
    });
}

var listar = function (quandoListar, quandoDerErro) {
    Material.find()
        .select({ tipo: true, pontuacao: true, medida: true, _id: false })
        .exec(function (err, materiais) {
            if (err) {
                quandoDerErro(err);
            }
            else {
                quandoListar(materiais);
            }
        });
}

var buscar = function (tipo, quandoListar, quandoDerErro) {
    Material.findOne({ tipo: tipo })
        .select({ tipo: true, pontuacao: true, medida: true, _id: false })
        .exec(function (err, materiais) {
            if (err) {
                quandoDerErro(err);
            }
            else {
                quandoListar(materiais);
            }
        });
}

exports.cadastrar = cadastrar;
exports.listar = listar;
exports.buscar = buscar;