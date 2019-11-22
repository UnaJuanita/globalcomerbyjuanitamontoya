import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { FormclienteComponent } from './formcliente/formcliente.component';
import { FormproductoComponent } from './formproducto/formproducto.component';
import { DelproductoComponent } from './delproducto/delproducto.component';
import { VentaComponent } from './venta/venta.component';
import { ModclienteComponent } from './modcliente/modcliente.component';
import { ModproductoComponent } from './modproducto/modproducto.component';
import { DetclienteComponent } from './detcliente/detcliente.component';
import { DetproductoComponent } from './detproducto/detproducto.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, FormclienteComponent, FormproductoComponent, DelproductoComponent, VentaComponent, ModclienteComponent, ModproductoComponent, DetclienteComponent, DetproductoComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
