import { Component } from '@angular/core';
import { EventsService } from '../../data-access/services/events.service';
import { Event } from '../../models/event';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {

  constructor(private es:EventsService){}
  topEvents:Event[]=[];

  ngOnInit(){
   this.es.getAllEventsFromBackend2().subscribe(
    events=>
      this.topEvents=events.sort((a,b)=>b.nbLikes-a.nbLikes).slice(0,3))
  }

}
