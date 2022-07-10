import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import * as appRoutingModule from './app-routing.module';
import { AppComponent } from "./app.component";
import { MarcaTextoDirective } from './directives/marca-texto.directive';

@NgModule({
  declarations: [
    AppComponent,
    MarcaTextoDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    appRoutingModule.AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
