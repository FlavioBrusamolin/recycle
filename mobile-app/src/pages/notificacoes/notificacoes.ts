import { NotificacoesProvider } from './../../providers/notificacoes/notificacoes';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-notificacoes',
  templateUrl: 'notificacoes.html',
})
export class NotificacoesPage {
  notificacoes: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private loadingCtrl: LoadingController, private notificacaoProvider: NotificacoesProvider, private toast: ToastController) {
  }

  ionViewWillEnter() {
    let loading = this.loadingCtrl.create({
    });
    loading.present();
    setTimeout(() => {
      loading.dismiss();
    }, 1000);
  }

  ionViewDidEnter() {
    this.notificacoes = [];
    this.listarNotificacoes();
  }

  listarNotificacoes() {
    this.notificacaoProvider.listarNotificacoes()
      .then((result: any) => {
        var notificacao = [];
        for (var i = 0; i < result.length; i++) {
          notificacao[i] = result[i];
          this.notificacoes.push(notificacao[i]);
        }
      })
      .catch((error: any) => {
        this.toast.create({ message: 'Erro ao listar as notificações.', position: 'botton', duration: 3000 }).present();
      });
  }

}
