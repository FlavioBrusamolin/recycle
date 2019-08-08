var Usuario = require('./modelo');

var cadastrar = function(usuario, quandoSalvar, quandoDerErro) {
    new Usuario(usuario).save(function(err, resultados) {
        if(err) {
            quandoDerErro(err);
        }
        else {
            quandoSalvar(resultados);
        }
    });
}  

var autenticar = function(email, senha, quandoEncontrar, quandoDerErro) {
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
}

var buscar = function(email, quandoListar, quandoDerErro) {
    Usuario.findOne({email:email})
        .select({nome:true, pontuacao:true, telefone:true, _id:false})
        .exec(function(err, usuarios) {
            if(err) {
                quandoDerErro(err);
            }
            else {
                quandoListar(usuarios);
            }
        });
}

var listar = function (quandoListar, quandoDerErro) {
    Usuario.find()
        .select({ nome: true, pontuacao: true, _id: false })
        .exec(function (err, usuarios) {
            if (err) {
                quandoDerErro(err);
            }
            else {
                quandoListar(usuarios);
            }
        });
}

exports.cadastrar = cadastrar;
exports.autenticar = autenticar;
exports.buscar = buscar;
exports.listar = listar;

