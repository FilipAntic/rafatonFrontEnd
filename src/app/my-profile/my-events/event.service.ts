import { Injectable, Output } from '@angular/core';
import { Http } from '@angular/http';
import { Event } from './event';
import { Response } from '@angular/http';
@Injectable()
export class EventService {

  constructor(private http: Http) { }
  @Output() events: Event[];
  getEvents() {
    return this.http.get('https://app.ticketmaster.com/discovery/v1/events.json?apikey=J0j6po0B7Ncodizwp1STKHPGMgLriirG').
      subscribe((response: Response) => {
        // Read the result field from the JSON response.
        // this.results = data['results'];
        //this.data = response.json();
        //this.events = <Proba[]>this.data._embedded.events;
        //proba
        let data = response.json()
        this.events = <Event[]>data._embedded.events;
        localStorage.setItem('events', JSON.stringify(this.events))
      });

  }

}
