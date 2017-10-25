import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { PowComponent } from './pow/pow.component';
import { HumanComponent } from './pow/human/human.component';
import { SaiyanComponent } from './pow/saiyan/saiyan.component';
import { SuperSaiyanComponent } from './pow/super-saiyan/super-saiyan.component';
import { SuperSaiyan2Component } from './pow/super-saiyan2/super-saiyan2.component';
import { SuperSaiyan3Component } from './pow/super-saiyan3/super-saiyan3.component';
import { SuperSaiyan4Component } from './pow/super-saiyan4/super-saiyan4.component';

@NgModule({
  declarations: [
    AppComponent,
    PowComponent,
    HumanComponent,
    SaiyanComponent,
    SuperSaiyanComponent,
    SuperSaiyan2Component,
    SuperSaiyan3Component,
    SuperSaiyan4Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
