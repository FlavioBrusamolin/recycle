var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var notificacaoSchema = new Schema({
    mensagem: {
        type:String,
        required:true
    },
    data: {
        type:String,
        required:true
    },
    hora: {
        type:String,
        required:true
    }
});

var Notificacao = mongoose.model('notificacoes', notificacaoSchema);

module.exports = Notificacao; 