
import { Component } from '@angular/core';
import { Event } from '../../models/event';

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrl: './list-event.component.css'
})
export class ListEventComponent {
  listEvent : Event[] = [
  {id:1, title:"Angular Summit", description:"Conférence sur Angular et l’écosystème front-end", date:new Date("2025-11-10"), place:"Tunis", price:50, organizerId:1,imageUrl:"images/event1.PNG", nbPlaces:25, nbLikes:0 },
  {id:2, title:"Web dev days", description:"Journée dédiée aux frameworks web modernes.", date:new Date("2025-01-05"), place:"Ariana",price:30, organizerId:1,imageUrl:"images/event2.PNG", nbPlaces:0, nbLikes:0}

  ];
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


}
