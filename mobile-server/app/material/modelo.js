var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var materialSchema = new Schema({
    tipo: {
        type:String,
        required:true
    },
    pontuacao: {
        type:Number,
        required:true
    },
    medida: {
        type:String,
        required:true
    }
});

var Material = mongoose.model('materiais', materialSchema);

module.exports = Material; 