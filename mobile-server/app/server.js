var express = require('express');
var cors = require('cors');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
require('dotenv-safe').load();

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true });

app.use(bodyParser.json());
app.use(cors());

var usuarioCtrl = require('./usuario/Ctrl');
var materialCtrl = require('./material/Ctrl');
var materialValidadoCtrl = require('./materialValidado/Ctrl');
var notificacaoCtrl = require('./notificacao/Ctrl');
var notificacaocidadaoCtrl = require('./notificacaocidadao/Ctrl');

app.post('/v1/usuariosapp', usuarioCtrl.cadastrar);
app.get('/v1/usuariosapp', usuarioCtrl.listar);
app.post('/v1/usuariosapp/auth', usuarioCtrl.autenticar);
app.post('/v1/usuariosapp/buscar', usuarioCtrl.buscar);

//app.post('/v1/materiais', materialCtrl.cadastrar);
app.get('/v1/materiais', materialCtrl.listar);
//app.get('/v1/materiais/:tipo', materialCtrl.buscar);

app.post('/v1/materiaisvalidados', materialValidadoCtrl.cadastrar);
app.post('/v1/materiaisvalidados/user', materialValidadoCtrl.listar);

app.get('/v1/notificacoes', notificacaoCtrl.listar);

app.post('/v1/notificacoescidadaos', notificacaocidadaoCtrl.cadastrar);

app.listen(9000, function() {
    console.log('Recycle Mobile API');
});