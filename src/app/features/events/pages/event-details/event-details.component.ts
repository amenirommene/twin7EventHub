import { Event } from './../../../../models/event';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from '../../../../data-access/services/events.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrl: './event-details.component.css'
})
export class EventDetailsComponent implements OnInit {
myEvent?:Event ;
  constructor(private ac:ActivatedRoute,private es:EventsService){
     console.log("je suis constructor");
  } //injecter le service ActivatedRoute sous le nom de "ac"

  ngOnInit(){ //méthode hook qui fait partie du cycle de vie d'un composant
    console.log("je suis ngOnInit");
    ///1ere solution : Utilisation de snapshot
   /* let id = Number(this.ac.snapshot.paramMap.get('id'));
    this.myEvent = this.es.getEventById(id);*/
    //2 eme solution : utilisation de paramMap
 ​this.ac.paramMap.subscribe(params => {
let id= Number(params.get('id'))
this.myEvent = this.es.getEventById(id);
});


}

}
