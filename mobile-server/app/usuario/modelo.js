var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usuarioSchema = new Schema({
    nome: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true
    },
    cpf: {
        type:Number,
        required:true
    },
    telefone: {
        type:Number,
        required:true
    },
    senha: {
        type:String,
        required:true
    },
    pontuacao: {
        type:Number,
        required:true
    }
});

var Usuario = mongoose.model('usuariosapps', usuarioSchema);

module.exports = Usuario; 