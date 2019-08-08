import { MateriaisValidosProvider } from './../../providers/materiais-validos/materiais-validos';
import { UsuariosProvider } from './../../providers/usuarios/usuarios';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import { CadastrarPage } from '../cadastrar/cadastrar';

@IonicPage()
@Component({
  selector: 'page-lista',
  templateUrl: 'lista.html',
})
export class ListaPage {
  materiaisValidados: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private toast: ToastController, private matValProvider: MateriaisValidosProvider, private usuarioProvider: UsuariosProvider) {
  }

  ionViewDidEnter() {
    this.materiaisValidados = [];
    this.listarMateriaisValidados();
  }

  listarMateriaisValidados() {
    var email = this.usuarioProvider.emailglobal;
    this.matValProvider.listarValidados(email)
      .then((result: any) => {
        for (var i = 0; i < result.length; i++) {
          var materialValidado = result[i];
          this.materiaisValidados.push(materialValidado);
        }
      })
      .catch((error: any) => {
        this.toast.create({ message: 'Erro ao listar os materiais. Erro: ' + error.error, position: 'botton', duration: 3000 }).present();
      });
  }

  abrecadastrar() {
    this.navCtrl.push(CadastrarPage);
  }

}
