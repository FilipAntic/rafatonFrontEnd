import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Response } from '@angular/http/src/static_response';
import { User } from '../login/user';
import { Event } from '../my-profile/my-events/event';
import { UserEvent } from './UserEvent';

@Injectable()
export class AuthService {

  constructor(private http: Http) { }
  data: any;
  isAuthenticated: boolean = false;
  login(username: string, password: string) {
    let user: User = <User>JSON.parse(localStorage.getItem('user'));
    let object = {
      userId: user.id,
      event: null
    };

    this.http.get('http://localhost:8087/user/login?username=' + username + '&password=' + password).
      subscribe((response: Response) => {
        // Read the result field from the JSON response.
        // this.results = data['results'];
        if (!response) {
          console.log(response);
          return;
        }
        let user = <User>response.json();
        localStorage.setItem('user', JSON.stringify(user));
        this.isAuthenticated = true;
      });
  }

  logout() {
    this.isAuthenticated = false;
    localStorage.setItem('user', null)
    console.log(localStorage.getItem('user'))
  }
  setEvents(data: any) {
    let user: User = <User>JSON.parse(localStorage.getItem('user'));
    let object: UserEvent = {
      userId: user.id,
      event: null
    };

    console.log(object)
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post("http://localhost:8087/event/saveEvent", object).toPromise()
      .then(() => {

      })
      .catch(() => (console.log("A")));
  }
}
