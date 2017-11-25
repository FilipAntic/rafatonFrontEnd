import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-event-dialog',
  templateUrl: './my-event-dialog.component.html',
  styleUrls: ['./my-event-dialog.component.css']
})
export class MyEventDialogComponent implements OnInit {

  @Input() displayDialog: boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
