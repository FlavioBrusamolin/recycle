import { UsuariosProvider } from './../../providers/usuarios/usuarios';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, ToastController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { NovacontaPage } from '../novaconta/novaconta';
import { RecuperarPage } from '../recuperar/recuperar';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  usuarios: any[];
  model: Usuario;

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController, private toast: ToastController, private usuarioProvider: UsuariosProvider) {
    this.model = new Usuario();
  }

  ionViewDidEnter() {
    this.menuCtrl.enable(false, 'myMenu');
    this.model.email = null;
    this.model.senha = null;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  entrar() {
    this.usuarioProvider.entrar(this.model.email, this.model.senha)
      .then((result: any) => {
        this.usuarioProvider.emailglobal = this.model.email;
        this.navCtrl.push(TabsPage);
      })
      .catch((error: any) => {
        this.toast.create({ message: 'Usuario ou senha incorretos.', position: 'botton', duration: 3000 }).present();
      });
  }

  abrenova(item2: any) {
    this.navCtrl.push(NovacontaPage);
  }

  abrerecuperar(item3: any) {
    this.navCtrl.push(RecuperarPage);
  }
}

export class Usuario {
  email: string;  
  senha: string;
}

