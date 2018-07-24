import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  public nome_usuario:string = "Guará Gouvêa do Código"

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
/*Criando funções - */
  public somaDoisNumeros(num1:number, num2:number): void{
    alert(num1 + num2);

  }
/*Parte do ciclo de vida de uma página - Inicia, executa e finaliza.
Para fazer referência a algum item, função ou propriedade de dentro da classe tem que usar
o código de referência: "this"*/
  ionViewDidLoad() {
    //this.somaDoisNumeros(10, 99);
  }

}
