import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Http } from '@angular/http'
import { Response } from '@angular/http/src/static_response';
import { Proba } from './proba';
import { DataTable } from 'primeng/primeng';

declare const gapi: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  // https://app.ticketmaster.com/{package}/{version}/{resource}.json?apikey=**{API key}
  data: any;
  events: any;
  selectedValues: string[] = [];
  eventsURL: string = "https://app.ticketmaster.com/discovery/v1/events.json?apikey=J0j6po0B7Ncodizwp1STKHPGMgLriirG";
  eventsURLSecond: string = "https://app.ticketmaster.com//discovery/v1/events.json?apikey=J0j6po0B7Ncodizwp1STKHPGMgLriirG&page=1&size=20{&sort}";
  constructor(private http: Http) { }
  ngOnInit() {
    this.http.get(this.eventsURL).
      subscribe((response: Response) => {
        // Read the result field from the JSON response.
        // this.results = data['results'];
        //this.data = response.json();
        //this.events = <Proba[]>this.data._embedded.events;
        console.log(response.json());
      });
    this.http.get('http://localhost:8087/user/findAll').
      subscribe((response: Response) => {
        // Read the result field from the JSON response.
        // this.results = data['results'];
        this.data = response.json();
        //this.events = <Proba[]>this.data._embedded.events;
        console.log(this.data);
      });
  }
  onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  }
  update(dt: DataTable) {
    dt.reset();
  }
}
