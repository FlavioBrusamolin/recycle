import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-novasenha',
  templateUrl: 'novasenha.html',
})
export class NovasenhaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
    this.menuCtrl.enable(false, 'myMenu'); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NovasenhaPage');
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false, 'myMenu');
  }

}
