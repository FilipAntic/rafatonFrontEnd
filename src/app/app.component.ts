import { Component, ElementRef } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Http } from '@angular/http'
import { Response } from '@angular/http/src/static_response';
import { Proba } from './proba';
import { DataTable } from 'primeng/primeng';
import { AuthService } from './services/auth.service';
import { Event } from './my-profile/my-events/event';


declare const gapi: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }
}
