import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Event } from '@angular/router/src/events';
import { EventService } from '../event.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-my-event-dialog',
  templateUrl: './my-event-dialog.component.html',
  styleUrls: ['./my-event-dialog.component.css']
})
export class MyEventDialogComponent implements OnInit {

  @Input() displayDialog: boolean = false;
  @Input() selectedEvent: Event;
  @Output() onDialogClosed: EventEmitter<any> = new EventEmitter<any>();
  images: any[];
  title: string = "Title"
  hashTags: string[];
  friendTags: string[];
  constructor(private eventService: EventService, private auth: AuthService) { }

  ngOnInit() {
    this.images = [];
    this.images.push({ source: 'assets/images/events.jpg', alt: 'Description for Image 1' });
  }

  onSave() {
    this.auth.setEvents(this.selectedEvent);
  }

  onHide() {
    console.log("proba")
    this.selectedEvent = null;
    this.onDialogClosed.emit()
  }
}
