import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Platform } from 'ionic-angular/platform/platform';

/*
  Generated class for the CartolaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CartolaProvider {

  basepath = "/cartolaapi"

  constructor(public http: Http, 
    private plataforma: Platform) {
      
      console.log(plataforma);

      if(this.plataforma.is("codorva")){
        this.basepath = "https://api.cartolafc.globo.com";
  
      }
    
  }

  mercado(){
    return this.http.get(`${this.basepath}/atletas/mercado`);
  }

  escalados(){
    return this.http.get(`${this.basepath}/mercado/destaques`);
  }

  rodada(){
    return this.http.get(`${this.basepath}/atletas/pontuados`);
  }

}
