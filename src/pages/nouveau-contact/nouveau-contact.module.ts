import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NouveauContactPage } from './nouveau-contact';

@NgModule({
  declarations: [
    NouveauContactPage,
  ],
  imports: [
    IonicPageModule.forChild(NouveauContactPage),
  ],
})
export class NouveauContactPageModule {}
