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
var usuarioappCtrl = require('./usuarioapp/Ctrl');
var materialCtrl = require('./material/Ctrl');
var materialvalidadoCtrl = require('./materialvalidado/Ctrl');
var notificacaoCtrl = require('./notificacao/Ctrl');
var notificacaocidadaoCtrl = require('./notificacaocidadao/Ctrl');

app.post('/v1/usuarios', usuarioCtrl.cadastrar);
app.post('/v1/usuarios/auth', usuarioCtrl.autenticar);

app.post('/v1/usuariosapp/editar', usuarioappCtrl.editar);
app.get('/v1/usuariosapp', usuarioappCtrl.listar);

app.post('/v1/materiais', materialCtrl.cadastrar);
//app.post('/v1/materiais/excluir', materialCtrl.excluir);
app.get('/v1/materiais', materialCtrl.listar);
app.post('/v1/materiais/buscar', materialCtrl.buscar);

app.get('/v1/materiaisvalidados', materialvalidadoCtrl.listar);
app.post('/v1/materiaisvalidados/editar', materialvalidadoCtrl.editar);

app.post('/v1/notificacoes', notificacaoCtrl.cadastrar);
app.get('/v1/notificacoes', notificacaoCtrl.listar);

app.get('/v1/notificacoescidadaos', notificacaocidadaoCtrl.listar);

app.listen(9090, function () {
    console.log('Recycle Web API');
});