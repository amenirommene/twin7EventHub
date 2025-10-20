import { Component, Input } from '@angular/core';
import { Event } from '../../../../models/event';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.css'
})
export class EventCardComponent {
@Input() event! : Event;
likeEvent(e:Event){

}
}
