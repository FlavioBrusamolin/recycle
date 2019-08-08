var MaterialValidado = require('./modelo');

var cadastrar = function(materialValidado, quandoSalvar, quandoDerErro) {
    new MaterialValidado(materialValidado).save(function(err, resultados) {
        if(err) {
            quandoDerErro(err);
        }
        else {
            quandoSalvar(resultados);
        }
    });
}

var listar = function(email, quandoListar, quandoDerErro) {
    MaterialValidado.find({email:email})
        .select({tipo:true, quantidade:true, status:true, medida:true, _id:false})
        .exec(function(err, materiaisValidados) {
            if(err) {
                quandoDerErro(err);
            }
            else {
                quandoListar(materiaisValidados);
            }
        });
}

/*var listar = function(quandoListar, quandoDerErro) {
    Material.find()
        .select({tipo:true, pontuacao:true, medida:true, _id:false})
        .exec(function(err, materiais) {
            if(err) {
                quandoDerErro(err);
            }
            else {
                quandoListar(materiais);
            }
        });
}*/

/*var autenticar = function(email, senha, quandoEncontrar, quandoDerErro) {
    Usuario.findOne({email:email, senha:senha})
        .exec(function(err, usuario) {
            if(err) {
                quandoDerErro(err);
            }
            else if(usuario) {
                quandoEncontrar(usuario);
            }
            else {
                quandoDerErro(new Error('Usuario invalido'));
            }
        });
}*/

exports.cadastrar = cadastrar;
exports.listar = listar;
//exports.autenticar = autenticar;