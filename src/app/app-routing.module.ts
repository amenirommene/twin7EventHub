import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { NotFoundComponent } from './layout/not-found/not-found.component';
import { ListEventComponent } from './layout/list-event/list-event.component';

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"", redirectTo:"home", pathMatch:'full'},
  {path:"events", component:ListEventComponent},
  {path:"**", component:NotFoundComponent}, //toujours la dernière route

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
