import { Component, OnInit } from '@angular/core';
import { EventService } from './event.service';
import { Event } from './event';

@Component({
  selector: 'app-my-events',
  templateUrl: './my-events.component.html',
  styleUrls: ['./my-events.component.css']
})
export class MyEventsComponent implements OnInit {

  events: Event[];
  displayDialog: boolean;
  selectedEvent: Event;
  constructor(private eventService: EventService) { }

  ngOnInit() {
    setTimeout(() => {
      this.eventService.getEvents();
      this.events = JSON.parse(localStorage.getItem('events'));
      console.log(this.events);
    }, 0)

  }

  selectCar(event: Event) {
    this.selectedEvent = event;
    this.displayDialog = true;
  }

  onDialogHide() {
    this.selectedEvent = null;
  }

}
