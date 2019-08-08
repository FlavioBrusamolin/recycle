var Material = require('./modelo');

/*var cadastrar = function(material, quandoSalvar, quandoDerErro) {
    new Material(material).save(function(err, resultados) {
        if(err) {
            quandoDerErro(err);
        }
        else {
            quandoSalvar(resultados);
        }
    });
}*/

var listar = function(quandoListar, quandoDerErro) {
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
}

/*var buscar = function(tipo, quandoEncontrar, quandoDerErro) {
    Material.findOne({tipo:tipo})
        .select({tipo:false, pontuacao:false, medida:true, _id:false})
        .exec(function(err, material) {
            if(err) {
                quandoDerErro(err);
            }
            else {
                quandoEncontrar(material);
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

//exports.cadastrar = cadastrar;
exports.listar = listar;
//exports.buscar = buscar;
//exports.autenticar = autenticar;