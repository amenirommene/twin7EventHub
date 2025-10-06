import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { HomeComponent } from './layout/home/home.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NotFoundComponent } from './layout/not-found/not-found.component';
import { ListEventComponent } from './layout/list-event/list-event.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ // liste des composants/directives/pipes associés à ce module
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    NotFoundComponent,
    ListEventComponent
  ],
  imports: [
    BrowserModule, //importé par défaut dans le module racine
    AppRoutingModule,
    FormsModule //dans ce module on trouve la directive NgModel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
