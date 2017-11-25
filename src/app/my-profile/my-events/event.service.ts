import { Injectable, Output } from '@angular/core';
import { Http } from '@angular/http';
import { Event } from './event';
import { Response } from '@angular/http';
import { User } from '../../login/user';
@Injectable()
export class EventService {

  constructor(private http: Http) { }
  @Output() events: Event[];
  getEvents() {
    let user = <User>JSON.parse(localStorage.getItem('user'));
    return this.http.get('http://localhost:8087/user/loadUserEvents?id=' + user.id).
      subscribe((response: Response) => {
        // Read the result field from the JSON response.
        // this.results = data['results'];
        //this.data = response.json();
        //this.events = <Proba[]>this.data._embedded.events;
        let data = response.json()
        this.events = <Event[]>data._embedded.events;
        localStorage.setItem('events', JSON.stringify(this.events))
      });

  }

}
