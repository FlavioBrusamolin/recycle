var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var materialvalidadoSchema = new Schema({
    tipo: {
        type: String,
        required: true
    },
    quantidade: {
        type: Number,
        required: true
    },
    medida: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    nome: {
        type: String,
        required: true
    },
    local: {
        type:Array,
        required:true
    },
    status: {
        type: String,
        required: true
    }
});

var MaterialValidado = mongoose.model('materiaisvalidados', materialvalidadoSchema);

module.exports = MaterialValidado; 