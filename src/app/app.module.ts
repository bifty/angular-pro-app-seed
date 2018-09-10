import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { Store } from 'store';

// feature modules
import { AuthModule } from '../auth/auth.module';

// containers
import { AppComponent } from './containers/app/app.component';

// components

// routes
export const ROUTES: Routes = [];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(ROUTES), AuthModule],
  declarations: [AppComponent],
  providers: [Store],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
  var config = {
    apiKey: "AIzaSyD0beW9ahqFVsAVCCd-nk5slTeJEvn8FXg",
    authDomain: "fitness-app-28f70.firebaseapp.com",
    databaseURL: "https://fitness-app-28f70.firebaseio.com",
    projectId: "fitness-app-28f70",
    storageBucket: "fitness-app-28f70.appspot.com",
    messagingSenderId: "757589550994"
  };
*/
