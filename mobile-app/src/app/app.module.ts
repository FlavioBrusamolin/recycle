import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { NotificacoesPage } from '../pages/notificacoes/notificacoes';
import { MapaPage } from '../pages/mapa/mapa';
import { ListaPage } from '../pages/lista/lista';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { ConfiguracoesPage } from '../pages/configuracoes/configuracoes';
import { EditarPage } from '../pages/editar/editar';
import { RankingPage } from '../pages/ranking/ranking';
import { EventosPage } from '../pages/eventos/eventos';
import { AjudaPage } from '../pages/ajuda/ajuda';
import { NovacontaPage } from '../pages/novaconta/novaconta';
import { RecuperarPage } from '../pages/recuperar/recuperar';
import { NovasenhaPage } from '../pages/novasenha/novasenha';
import { CadastrarPage } from '../pages/cadastrar/cadastrar';
import { CidadaoPage } from '../pages/cidadao/cidadao';
import { MateriaisProvider } from '../providers/materiais/materiais';
import { MateriaisValidosProvider } from '../providers/materiais-validos/materiais-validos';
import { Geolocation } from '@ionic-native/Geolocation';
import { HttpModule } from '@angular/http';
import { UsuariosProvider } from '../providers/usuarios/usuarios';
import { NotificacoesProvider } from '../providers/notificacoes/notificacoes';
import { EventosProvider } from '../providers/eventos/eventos';
import { NotificacoescidadaosProvider } from '../providers/notificacoescidadaos/notificacoescidadaos';


@NgModule({
  declarations: [
    MyApp,
    NotificacoesPage,
    MapaPage,
    ListaPage,
    TabsPage,
    LoginPage,
    ConfiguracoesPage,
    EditarPage,
    RankingPage,
    EventosPage,
    AjudaPage,
    NovacontaPage,
    RecuperarPage,
    NovasenhaPage,
    CadastrarPage,
    CidadaoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    NotificacoesPage,
    MapaPage,
    ListaPage,
    TabsPage,
    LoginPage,
    ConfiguracoesPage,
    EditarPage,
    RankingPage,
    EventosPage,
    AjudaPage,
    NovacontaPage,
    RecuperarPage,
    NovasenhaPage,
    CadastrarPage,
    CidadaoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    MateriaisProvider,
    MateriaisValidosProvider,
    Geolocation,
    UsuariosProvider,
    NotificacoesProvider,
    EventosProvider,
    NotificacoescidadaosProvider
  ]
})
export class AppModule { }

