import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Exemplo01Component } from './views/exemplo01/exemplo01.component';
import { MeunomeComponent } from './views/meunome/meunome.component';
import { UpcaseComponent } from './views/upcase/upcase.component';
import { PetroleoComponent } from './views/petroleo/petroleo.component';
import { Time7Component } from './views/time7/time7.component';
import { EscolheImgComponent } from './views/escolhe-img/escolhe-img.component';
import { TresBtnComponent } from './views/tres-btn/tres-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    Exemplo01Component,
    MeunomeComponent,
    UpcaseComponent,
    PetroleoComponent,
    Time7Component,
    EscolheImgComponent,
    TresBtnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
