import { Component, OnInit, Input } from '@angular/core';
import { Event } from '@angular/router/src/events';
import { EventService } from '../event.service';

@Component({
  selector: 'app-my-event-dialog',
  templateUrl: './my-event-dialog.component.html',
  styleUrls: ['./my-event-dialog.component.css']
})
export class MyEventDialogComponent implements OnInit {

  @Input() displayDialog: boolean = false;
  @Input() selectedEvent: Event;
  constructor(private eventService: EventService) { }

  ngOnInit() {
  }

  onSave() {
    this.eventService.setEvents(this.selectedEvent)
  }

  onDialogHide() {
    this.selectedEvent = null;
  }
}
