import { Component } from '@angular/core';
import { NavController, LoadingController, Content } from 'ionic-angular';
import {Http} from "@angular/http";
import "rxjs/add/operator/map";
import { ContactService } from '../../services/contact.service';
import { DetailContactPage } from '../detail-contact/detail-contact';
import { NouveauContactPage } from '../nouveau-contact/nouveau-contact';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  contact:any;
  motcle:string ="";
  size:number=20;
  currentPage:number=0;
  totalPages:number;
  

  constructor(public navCtrl: NavController,
    private contactService: ContactService,public loadingCtrl:LoadingController) {
  }

  ionViewDidLoad() {
    this.contactService.chercher(this.motcle,this.size,this.currentPage)
    .subscribe(data=>{
      this.contact=data;
    },err=>{
      console.log(err)
    })
    console.log('ionViewDidLoad HomePage');
  }

  onSearch(){
    this.contactService.chercher(this.motcle,this.size,this.currentPage)
    .subscribe(data=>{
      this.contact=data;
    },err=>{
      console.log(err)
    })
  }


  onDetailContact(co){
    this.navCtrl.push(DetailContactPage,{myContact:co});
    }

    onNewContact(){
      this.navCtrl.push(NouveauContactPage);
     }
 
}

