
import { Component, ViewChild } from '@angular/core';
import { Event } from '../../../../models/event';
import { EventCardComponent } from '../../components/event-card/event-card.component';
import { EventsService } from '../../../../data-access/services/events.service';

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrl: './list-event.component.css'
})
export class ListEventComponent {
  constructor(private es:EventsService){}
  @ViewChild(EventCardComponent) eventCard! : EventCardComponent;
  listEvent : Event[] = [];
  ngOnInit(){
    this.es.getAllEventsFromBackend().subscribe({
      next : data=>{
        this.listEvent=data.body || [], //[] si jamais le body renvoit null;
        console.log(data.status+" : " +data.statusText)
      },
        error: error=>console.log(error.error.message),
      complete : ()=>console.log("terminé")
    }
    );
  }
  monInput : string = "bonjour";
  monInput2 : string = "";
  pageTitle : string = "Liste des évènements";
  placeHolderTexte : string = "Rechercher un évènement";
  like(nb : string){
    console.log("je suis la méthode like " + nb);
  }
  likeEvent(e: Event){
  e.nbLikes ++;
  }

ngAfterViewInit(){
 // console.log(this.eventCard?.p);
}
}
