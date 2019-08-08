var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usuarioappSchema = new Schema({
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    cpf: {
        type: Number,
        required: true
    },
    telefone: {
        type: Number,
        required: true
    },
    senha: {
        type: String,
        required: true
    },
    pontuacao: {
        type: Number,
        required: true
    }
});

var Usuarioapp = mongoose.model('usuariosapps', usuarioappSchema);

module.exports = Usuarioapp; 