import { MateriaisProvider } from './../../providers/materiais/materiais';
import { MateriaisValidosProvider } from './../../providers/materiais-validos/materiais-validos';
import { UsuariosProvider } from './../../providers/usuarios/usuarios';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, MenuController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-cadastrar',
  templateUrl: 'cadastrar.html',
})
export class CadastrarPage {
  materiais: any[];
  //material: any[];
  model: MaterialValidado;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toast: ToastController, private matProvider: MateriaisProvider, private matValProvider: MateriaisValidosProvider, private usuarioProvider: UsuariosProvider, public menuCtrl: MenuController) {
    this.model = new MaterialValidado();
    //var email = this.usuarioProvider.emailglobal;
    //console.log(email);
  }

  ionViewDidEnter() {
    this.materiais = [];
    //this.material = [];
    this.listarMateriais();
    this.menuCtrl.enable(false, 'myMenu');
  }

  ionViewDidLeave() {
    this.menuCtrl.enable(true, 'myMenu');
  }

  listarMateriais() {
    this.matProvider.listar()
      .then((result: any) => {
        var item = [];
        for (var i = 0; i < result.length; i++) {
          var material = result[i];
          item[i] = material;
          this.materiais.push(item[i]);
        }
      })
      .catch((error: any) => {
        this.toast.create({ message: 'Erro ao listar os materiais. Erro: ' + error.error, position: 'botton', duration: 3000 }).present();
      });
  }

  buscarMedida() {
    this.matProvider.listar()
      .then((result: any) => {
        var item = [];
        for (var i = 0; i < result.length; i++) {
          var material = result[i];
          item[i] = material;
          if(this.model.tipo == item[i].tipo) {
            document.getElementById('medida').innerHTML = item[i].medida;
          }
        }
      })
  }

  cadastrarMaterialValido() {
    var email = this.usuarioProvider.emailglobal;
    var nome = this.usuarioProvider.nomeglobal;
    var local = this.usuarioProvider.localglobal;
    var medida = document.getElementById('medida').innerHTML;
    if(this.model.quantidade > 1) {
      medida = medida + 's';
    }
    this.matValProvider.cadastrarValidados(this.model.tipo, this.model.quantidade, medida, email, nome, local)
      .then((result: any) => {
        this.toast.create({ message: 'Material cadastrado com sucesso.', position: 'botton', duration: 3000}).present();
        this.navCtrl.pop();
      })
      .catch((error: any) => {
        this.toast.create({ message: 'Erro ao cadastrar material.', position: 'botton', duration: 3000 }).present();
      });
  }
  
}

export class MaterialValidado {
  tipo: string;
  quantidade: number;
  medida: string;
  email: string;
  nome: string;
}
