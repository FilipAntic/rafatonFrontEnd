import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Http } from '@angular/http'
import { Response } from '@angular/http/src/static_response';
import { Proba } from './proba';
import { DataTable } from 'primeng/primeng';

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
  constructor(private http: Http) { }
  ngOnInit() {
    /*this.http.get('https://app.ticketmaster.com/discovery/v1/events.json?apikey=J0j6po0B7Ncodizwp1STKHPGMgLriirG').
      subscribe((response: Response) => {
        // Read the result field from the JSON response.
        // this.results = data['results'];
        this.data = response.json();
        this.events = <Proba[]>this.data._embedded.events;
        console.log(this.data.json);
      });*/
    this.http.get('https://localhost:8087/user/findAll').
      subscribe((response: Response) => {
        // Read the result field from the JSON response.
        // this.results = data['results'];
        this.data = response.json();
        //this.events = <Proba[]>this.data._embedded.events;
        console.log(this.data);
      });
  }

  update(dt: DataTable) {
    dt.reset();
  }
}
