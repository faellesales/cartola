import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CartolaProvider } from '../../providers/cartola/cartola';

/**
 * Generated class for the RodadaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rodada',
  templateUrl: 'rodada.html',
  providers: [
    CartolaProvider
  ]
})
export class RodadaPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private cartolaProvider: CartolaProvider) {
  }

  public lista_rodada = new Array<any>();

  ionViewDidLoad() {
    this.cartolaProvider.rodada().subscribe(
      data=>{

        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);

        this.lista_rodada = objeto_retorno;

        console.log(objeto_retorno);

      }, error => {
        console.log(error);
      }
      )
  }

}
