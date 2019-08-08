import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, MenuController } from 'ionic-angular';
import { EventosProvider } from '../../providers/eventos/eventos';

@IonicPage()
@Component({
  selector: 'page-eventos',
  templateUrl: 'eventos.html',
})
export class EventosPage {
  public eventos: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private events: EventosProvider, private toast: ToastController, public menuCtrl: MenuController) {
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false, 'myMenu');
  }
  
  ionViewWillLeave() {
    this.menuCtrl.enable(true, 'myMenu');
  }

  ionViewDidEnter() {
    this.eventos = [{URL:"https://facebook.com"}]
  }

  listarEventos() {
    this.events.listarEventos()
      .then((result: any) => {
        for (var i = 0; i < result.length; i++) {
          var event = result[i];
          this.eventos.push(event);
        }
      })
      .catch((error: any) => {
        this.toast.create({ message: 'Erro ao listar os materiais.', position: 'botton', duration: 3000 }).present();
      });
  }

}
