import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';
import { ListEventComponent } from './pages/list-event/list-event.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { EventDetailsComponent } from './pages/event-details/event-details.component';
import { EventCardComponent } from './components/event-card/event-card.component';
import { AddEventComponent } from './components/add-event/add-event.component';


@NgModule({
  declarations: [
    EventsComponent,
    ListEventComponent,
    EventDetailsComponent,
    EventCardComponent,
    AddEventComponent
  ],
  imports: [
    CommonModule,
    EventsRoutingModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class EventsModule { }
