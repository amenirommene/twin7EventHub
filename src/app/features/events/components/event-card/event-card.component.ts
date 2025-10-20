import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Event } from '../../../../models/event';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.css'
})
export class EventCardComponent {
  p : string = "valeur de p dans EventCard";
@Input() event! : Event;
@Output() liked = new EventEmitter<Event>();
likeEvent(e:Event){
this.liked.emit(e);
}
}
