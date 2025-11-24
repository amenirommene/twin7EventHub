import { Injectable } from '@angular/core';
import { Event } from '../../models/event';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private apiEventsUrl:string="http://localhost:3000/events";

  constructor(private _http:HttpClient){}
  list : Event[] = [
  {id:1, title:"Angular Summit", description:"Conférence sur Angular et l’écosystème front-end", date:new Date("2025-11-10"), place:"Tunis", price:50, organizerId:1,imageUrl:"images/event1.PNG", nbPlaces:25, nbLikes:0 },
  {id:2, title:"Web dev days", description:"Journée dédiée aux frameworks web modernes.", date:new Date("2025-01-05"), place:"Ariana",price:30, organizerId:1,imageUrl:"images/event2.PNG", nbPlaces:0, nbLikes:0}

  ];
  getAllEventsFromBackend():Observable<HttpResponse<Event[]>>{
return this._http.get<Event[]>(this.apiEventsUrl,{
observe:'response',
params: { active: 'true', sort: 'name' },
headers: {'Authorization': 'Bearer 123', 'Content-Type': 'application/json'},
}
).pipe(
  catchError((error:HttpErrorResponse)=>{return throwError(()=>error)}));
  }
  getAllEvents(): Event[] {
    return this.list;
  }
  getEventById(id: number): Event | undefined {
    return this.list.find(e => e.id === id) ;
  }
}
