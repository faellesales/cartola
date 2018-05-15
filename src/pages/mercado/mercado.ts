import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CartolaProvider } from '../../providers/cartola/cartola';

/**
 * Generated class for the MercadoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mercado',
  templateUrl: 'mercado.html',
  providers: [
    CartolaProvider
  ]
})
export class MercadoPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private cartolaProvider: CartolaProvider) {
  }

  public lista_mercado = new Array<any>();

  ionViewDidLoad() {
    this.cartolaProvider.mercado().subscribe(
      data=>{

        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);

        this.lista_mercado = objeto_retorno.atletas;

        /**for (let entry of this.lista_mercado) {
          entry.replace("FORMATO","140x140");

          console.log(entry); // 1, "string", false
        }*/

        console.log(objeto_retorno);

      }, error => {
        console.log(error);
      }
      )
  }

}
