import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './events.component';
import { ListEventComponent } from './pages/list-event/list-event.component';
import { EventDetailsComponent } from './pages/event-details/event-details.component';

const routes: Routes = [
  { path: '', component: EventsComponent, children:[
     { path: '', component: ListEventComponent, children:[
    { path: ':id', component: EventDetailsComponent } //route paramétré avec pathParam
     ] },

  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
