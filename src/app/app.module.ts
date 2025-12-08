import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { HomeComponent } from './layout/home/home.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NotFoundComponent } from './layout/not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { EventsModule } from './features/events/events.module';
import { provideHttpClient } from '@angular/common/http';
import { EventCardComponent } from './features/events/components/event-card/event-card.component';
import { CardComponent } from './layout/card/card.component';

@NgModule({
  declarations: [ // liste des composants/directives/pipes associés à ce module
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    NotFoundComponent,

  ],
  imports: [
    BrowserModule, //importé par défaut dans le module racine
    AppRoutingModule,
    CardComponent   //importer un composant StandAlone

   // FormsModule //dans ce module on trouve la directive NgModel
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
