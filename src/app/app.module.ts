import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './Pokemon/listar/listar.component';
import { AddComponent } from './Pokemon/add/add.component';
import { EditComponent } from './Pokemon/edit/edit.component';
import{ FormsModule }from '@angular/forms';
import{ ServiceService }from '../app/Service/service.service';
import{ HttpClientModule }from '@angular/common/http';
import { FilterPipe } from './pipes/filter.pipe'


@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    AddComponent,
    EditComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
