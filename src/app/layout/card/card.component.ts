import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Event } from '../../models/event';
import { CurrencyPipe, DatePipe, DecimalPipe, UpperCasePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [UpperCasePipe,DatePipe,DecimalPipe,CurrencyPipe,RouterLink], //les dépendances : component, directives, pipes àutiliser dans ce composant
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  p : string = "valeur de p dans EventCard";
@Input() event! : Event;
@Output() liked = new EventEmitter<Event>();
likeEvent(e:Event){
this.liked.emit(e);
}
}
