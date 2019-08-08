import { UsuariosProvider } from './../../providers/usuarios/usuarios';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, MenuController} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-ranking',
  templateUrl: 'ranking.html',
})
export class RankingPage {
  usuarios: any[];
  usersort: [{nome: string, pontuacao: number}];
  usuariossort: [{nome: string, pontuacao: number}];

  constructor(public navCtrl: NavController, public navParams: NavParams, private usuarioProvider: UsuariosProvider, private toast: ToastController, public menuCtrl: MenuController) {
  }
  
  ionViewDidEnter() {
    //this.buscarNomePontos();
    this.usuarios = [];
    this.buscaRanking();
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false, 'myMenu');
  }
  
  ionViewWillLeave() {
    this.menuCtrl.enable(true, 'myMenu');
  }

  buscaRanking() {
    this.usuarioProvider.listarUsuarios()
      .then((result: any) => {
          this.usersort = [{nome: "", pontuacao: 0}];
        for (var i = 0; i < result.length; i++) {
          this.usersort[i] = result[i];
          //this.usuarios.push(this.usersort[i]);
        }
        this.usuariossort = this.usersort.sort((a, b) => {
          return b.pontuacao - a.pontuacao;
        });
        for(var j = 0; j < result.length; j++) {
          console.log(this.usuariossort[j]);
          this.usuarios.push(this.usuariossort[j]);
        }
      })
      .catch((error: any) => {
        this.toast.create({ message: 'Erro ao listar o ranking.', position: 'botton', duration: 3000 }).present();
      });
  }

}
