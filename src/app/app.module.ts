import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {TestPage} from "../pages/test/test";
import {ContactPage} from "../pages/contact/contact";
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ContactService } from '../services/contact.service';
import { DetailContactPage } from '../pages/detail-contact/detail-contact';
import { NouveauContactPage } from '../pages/nouveau-contact/nouveau-contact';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    TestPage,
    ContactPage,
    DetailContactPage,
    NouveauContactPage
  ],
  
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),HttpModule,FormsModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    TestPage,
    ContactPage,
    DetailContactPage,
    NouveauContactPage
  ],
  providers: [
    StatusBar,ContactService,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
