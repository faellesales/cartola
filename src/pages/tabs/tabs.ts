import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { MercadoPage } from '../mercado/mercado';
import { EscaladosPage } from '../escalados/escalados';
import { RodadaPage } from '../rodada/rodada';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MercadoPage;
  tab3Root = EscaladosPage;
  tab4Root = RodadaPage

  constructor() {

  }
}
