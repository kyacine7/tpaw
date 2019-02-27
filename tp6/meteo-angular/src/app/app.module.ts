import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeteoComponent } from './meteo/meteo.component';

/*@NgModule({
  declarations: [
    AppComponent,
    MeteoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
*/
import { RouterModule, Routes } from '@angular/router';


//ajouter par le prof
import { FormsModule } from '@angular/forms'; // <--  Ajouter la référence ici

//import { AppComponent } from './app.component';
//import { MeteoComponent } from './meteo/meteo.component';

@NgModule({
  declarations: [
    AppComponent,
    MeteoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule //<-- Ajouter la référence ici aussi
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }