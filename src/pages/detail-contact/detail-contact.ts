import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-contact',
  templateUrl: 'detail-contact.html',
})
export class DetailContactPage {
  contact:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.contact=this.navParams.data.myContact;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailContactPage');
  }

}
