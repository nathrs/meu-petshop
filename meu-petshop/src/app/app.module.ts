import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { NossaHistoriaComponent } from './nossa-historia/nossa-historia.component';


@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    NossaHistoriaComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
