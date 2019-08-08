import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { ConfiguracoesPage } from '../pages/configuracoes/configuracoes';
import { EditarPage } from '../pages/editar/editar';
import { RankingPage } from '../pages/ranking/ranking';
import { EventosPage } from '../pages/eventos/eventos';
import { AjudaPage } from '../pages/ajuda/ajuda';
import { CidadaoPage } from '../pages/cidadao/cidadao';

import { UsuariosProvider } from '../providers/usuarios/usuarios';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {

  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;
  email: any;
  pontuacao: any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public usuarioProvider: UsuariosProvider) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
    setInterval(() => { this.buscarPontos(); }, 500);
  }

  abreeditar(item1: any) {
    this.nav.push(EditarPage);
  }

  abreranking(item3: any) {
    this.nav.push(RankingPage);
  }

  abreeventos(item4: any) {
    this.nav.push(EventosPage);
  }

  abreajuda(item5: any) {
    this.nav.push(AjudaPage);
  }

  abreconfiguracoes(item6: any) {
    this.nav.push(ConfiguracoesPage);
  }

  abrecidadao(item7: any) {
    this.nav.push(CidadaoPage);
  }

  sai() {
    this.nav.popToRoot();
  }

  buscarPontos() {
    if(this.usuarioProvider.controleglobal == 1) {
      var email = this.usuarioProvider.emailglobal;
      //console.log(email);
      this.usuarioProvider.buscarNomePontos(email)
        .then((result: any) => {
          this.usuarioProvider.nomeglobal = result.nome;
          this.usuarioProvider.pontosglobal = result.pontuacao;
          this.usuarioProvider.telefoneglobal = result.telefone;
          this.pontuacao = this.usuarioProvider.pontosglobal;
      });
    }
  }

}

//VISUALIZAR BACKEND:
//https://github.com/Eskalol/generator-swagger-es-6