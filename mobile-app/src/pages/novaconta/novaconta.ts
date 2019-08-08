import { UsuariosProvider } from './../../providers/usuarios/usuarios';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-novaconta',
  templateUrl: 'novaconta.html',
})
export class NovacontaPage {
  usuarios: any[];
  model: Usuario;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toast: ToastController, private usuarioProvider: UsuariosProvider) {
    this.model = new Usuario();
  }

  /*ionViewDidLoad() {
    console.log('ionViewDidLoad NovacontaPage');
  }*/

  cadastrarUsuario() {
    if(this.model.confirmasenha !== this.model.senha) {
      this.toast.create({ message: 'As senhas não conferem.', position: 'botton', duration: 3000}).present();
    }
    else {
      this.usuarioProvider.cadastrarUsuario(this.model.nome, this.model.email, this.model.cpf, this.model.telefone, this.model.senha)
        .then((result: any) => {
          this.toast.create({ message: 'Usuario cadastrado com sucesso.', position: 'botton', duration: 3000}).present();
          this.navCtrl.pop();
        })
        .catch((error: any) => {
          this.toast.create({ message: 'Erro ao cadastrar usuario.', position: 'botton', duration: 3000 }).present();
        });
    }
  }
}

export class Usuario {
  nome: string;
  email: string; 
  cpf: number; 
  telefone: number; 
  senha: string;
  confirmasenha: string;
}
