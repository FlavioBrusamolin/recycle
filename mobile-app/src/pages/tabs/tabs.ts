import { Component } from '@angular/core';

import { NotificacoesPage } from '../notificacoes/notificacoes';
import { MapaPage } from '../mapa/mapa';
import { ListaPage } from '../lista/lista';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = MapaPage;
  tab2Root = ListaPage;
  tab3Root = NotificacoesPage;

  constructor() {

  }
}
