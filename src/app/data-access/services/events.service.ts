import { Injectable } from '@angular/core';
import { Event } from '../../models/event';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { catchError, map, Observable, of, throwError } from 'rxjs';
import { ErrorService } from '../../shared/service/error.service';


@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private apiEventsUrl:string="http://localhost:3000/events";

  constructor(private _http:HttpClient, private er:ErrorService){}


  list : Event[] = [
  {id:1, title:"Angular Summit", description:"Conférence sur Angular et l’écosystème front-end", date:new Date("2025-11-10"), place:"Tunis", price:50, organizerId:1,imageUrl:"images/event1.PNG", nbPlaces:25, nbLikes:0 },
  {id:2, title:"Web dev days", description:"Journée dédiée aux frameworks web modernes.", date:new Date("2025-01-05"), place:"Ariana",price:30, organizerId:1,imageUrl:"images/event2.PNG", nbPlaces:0, nbLikes:0}

  ];



getExpensiveEvents():Observable<{title: string, finalPrice: number}[]>{  //{title: string, finalPrice: number}
return this._http.get<Event[]>(this.apiEventsUrl).pipe(
  map(events => events.filter(e => e.price > 50)),
  map(events =>
      events.map(e => ({
        title: e.title,
        finalPrice: e.price * 1.2
      }))
    ),
  catchError((error:HttpErrorResponse)=>{return of([])}));
  }

getAllEventsFromBackend2():Observable<Event[]>{
return this._http.get<Event[]>(this.apiEventsUrl)}


getAllEventsFromBackend():Observable<HttpResponse<Event[]>>{
return this._http.get<Event[]>(this.apiEventsUrl,{
observe:'response',
params: { active: 'true', sort: 'name' },
headers: {'Authorization': 'Bearer 123', 'Content-Type': 'application/json'},
}
).pipe(
  catchError((error:HttpErrorResponse)=>{
    return this.er.handleError(error)}));
  }
  getAllEvents(): Event[] {
    return this.list;
  }
  getEventById(id: number): Event | undefined {
    return this.list.find(e => e.id === id) ;
  }

addEventToBackend(e:Event):Observable<Event>{
return this._http.post<Event>(this.apiEventsUrl,e).pipe(
  catchError((error:HttpErrorResponse)=>{
    return this.er.handleError(error)}));}

updateEventInToBackend(id:number,e:Event):Observable<Event>{
return this._http.put<Event>(this.apiEventsUrl+"/"+id,e).pipe(
  catchError((error:HttpErrorResponse)=>{
    return this.er.handleError(error)}));}

deleteEventFromBackend(id:number):Observable<Event>{
return this._http.delete<Event>(this.apiEventsUrl+"/"+id).pipe(
  catchError((error:HttpErrorResponse)=>{
    return this.er.handleError(error)}));}

getEventByIdFromBackend(id: number): Observable<Event>{
   return this._http.get<Event>(this.apiEventsUrl+"/"+id);
  }
}
