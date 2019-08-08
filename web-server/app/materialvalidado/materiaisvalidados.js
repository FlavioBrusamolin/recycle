var MaterialValidado = require('./modelo');

var listar = function (quandoListar, quandoDerErro) {
    MaterialValidado.find()
        .select({ tipo: true, quantidade: true, status: true, medida: true, email: true, nome: true,local: true, _id: true })
        .exec(function (err, materiaisvalidados) {
            if (err) {
                quandoDerErro(err);
            }
            else {
                quandoListar(materiaisvalidados);
            }
        });
}

var editar = function (_id, quandoEditar, quandoDerErro) {
    MaterialValidado.findOne({ _id: _id })
        .exec(function (err, materiaisvalidados) {
            if (err) {
                quandoDerErro(err);
            }
            else {
                materiaisvalidados.status = 'Validado';
                materiaisvalidados.save();
                quandoEditar(materiaisvalidados);
            }
        });
}

exports.listar = listar;
exports.editar = editar;