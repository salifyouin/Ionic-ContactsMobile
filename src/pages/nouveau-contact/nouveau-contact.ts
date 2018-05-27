import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContactService } from '../../services/contact.service';

/**
 * Generated class for the NouveauContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nouveau-contact',
  templateUrl: 'nouveau-contact.html',
})
export class NouveauContactPage {

  constructor(public navCtrl: NavController, 
    private contactService: ContactService,public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NouveauContactPage');
  }

   
onSaveContact(dataForm){
  this.contactService.saveContact(dataForm)
    .subscribe(data=>{
  console.log(data);
    },err=>{
      console.log(JSON.parse(err._body).message);
    })
  }

}
