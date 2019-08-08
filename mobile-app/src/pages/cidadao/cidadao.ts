import { NotificacoescidadaosProvider } from './../../providers/notificacoescidadaos/notificacoescidadaos';
import { UsuariosProvider } from './../../providers/usuarios/usuarios';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, MenuController } from 'ionic-angular';

/**
 * Generated class for the CidadaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cidadao',
  templateUrl: 'cidadao.html',
})
export class CidadaoPage {
  model: NotificacaoCidadao;

  constructor(public navCtrl: NavController, public navParams: NavParams, private usuarioProvider: UsuariosProvider, private notificacoescidadaosProvider: NotificacoescidadaosProvider, private toast: ToastController, public menuCtrl: MenuController) {
    this.model = new NotificacaoCidadao();
  }
  
  ionViewWillEnter() {
    this.menuCtrl.enable(false, 'myMenu');
  }
  
  ionViewWillLeave() {
    this.menuCtrl.enable(true, 'myMenu');
  }

  cadastrarNotificacao() {
    var data = new Date().getDate() + '/' + (new Date().getMonth() + 1) + '/' + new Date().getFullYear();
    var hora = new Date().getHours() + ':' + new Date().getMinutes(); 
    var nome = this.usuarioProvider.nomeglobal;
    var telefone = this.usuarioProvider.telefoneglobal;
    console.log(data);
    console.log(hora);
    console.log(nome);
    console.log(telefone);
    this.notificacoescidadaosProvider.cadastrarNotificacoes(this.model.mensagem, data, hora, nome, telefone)
      .then((result: any) => {
        this.toast.create({ message: 'Sugestão ou reclamação enviada com sucesso.', position: 'botton', duration: 3000}).present();
        this.model.mensagem = "";
      })
      .catch((error: any) => {
        this.toast.create({ message: 'Erro ao enviar mensagem.', position: 'botton', duration: 3000 }).present();
      });
  }

}

export class NotificacaoCidadao {
  mensagem: string;
  data: string;
  hora: string;
  nome: string;
  telefone: number;
}
