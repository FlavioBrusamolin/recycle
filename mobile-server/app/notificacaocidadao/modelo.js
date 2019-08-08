var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var notificacaocidadaoSchema = new Schema({
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
    },
    nome: {
        type:String,
        required:true
    },
    telefone: {
        type:Number,
        required:true
    }
});

var NotificacaoCidadao = mongoose.model('notificacoescidadaos', notificacaocidadaoSchema);

module.exports = NotificacaoCidadao; 