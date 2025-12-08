import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './events.component';
import { ListEventComponent } from './pages/list-event/list-event.component';
import { EventDetailsComponent } from './pages/event-details/event-details.component';
import { AddEventComponent } from './components/add-event/add-event.component';
import { ParticipationFormComponent } from './components/participation-form/participation-form.component';

const routes: Routes = [
  //localhost:4200/events
  { path: '', component: EventsComponent, children: //EventsComponent: composant racine de EventsModule
    [
      {path:'participate/:id/:price', component:ParticipationFormComponent},
       //localhost:4200/events/add
     {path:'add', component:AddEventComponent}, //à placer avant la route paramétrée qui suit
      {path:'update/:id', component:AddEventComponent},
     //localhost:4200/events
     { path: '', component: ListEventComponent, children:
        [
         // localhost:4200/events/1
          { path: ':id', component: EventDetailsComponent } //route paramétré avec pathParam
        ]
      },


    ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
